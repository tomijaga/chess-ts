import path from "path";
import http from "http";
import express from "express";
import requirejs from "requirejs";
import { nanoid } from "nanoid";
import cors from "cors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { OnlineGameModel } from "./models/games/OnlineGameModel.js";
import { gamesRoute } from "./routes/games.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use("/", gamesRoute);

const server = http.createServer(app);
const io = requirejs("socket.io")(server);

app.use(express.static(path.resolve(__dirname, "public")));

mongoose.connect(
  "mongodb+srv://tomijaga:tomijaga@cryptochess.c2ssk.mongodb.net/games?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error!"));
db.once("open", async () => {
  server.listen(process.env.PORT || 8080, function () {
    console.log(`Listening on ${server.address().port}`);
  });
});

const games = [];
const connections = [];

io.on("connection", function (socket) {
  connections.push(socket);

  socket.on("connect-to-game", () => {
    const last_game = games[games.length - 1];
    if (last_game) {
      if (last_game.players.length === 2) {
        create_game();
      } else {
        start_game();
      }
    } else {
      create_game();
    }
  });

  console.log(connections.length + " connected");

  socket.on("send-move", async (game_id, move, turn) => {
    OnlineGameModel.addMove(mongoose.Types.ObjectId(game_id), move);

    socket.to(game_id.toString()).emit("move", move, turn);

    // console.log({ game_id, move, turn });
  });

  socket.on("disconnecting", () => {
    // console.log({ room: socket.rooms }); // the Set contains at least the socket ID
  });

  socket.on("disconnect", function () {
    // delete players[socket.id];
    // socket.emit("disconnect", socket.id);

    connections.splice(connections.indexOf(socket), 1);
    console.log("user disconnected");
    console.log(socket.rooms);
  });

  console.log(games);

  //functions

  function create_game() {
    const game = new Game();
    game.add_player(socket.id);
    socket.join(game.id.toString());
    socket.emit("game-id", game.id);

    console.log("Created Game");
    console.log("game id:", game.id, "player id:", socket.id);

    games.push(game);
  }

  function start_game() {
    const game = games[games.length - 1];
    game.add_player(socket.id);
    socket.join(game.id.toString());
    socket.emit("game-id", game.id);
    console.log("game id:", game.id, "player id:", socket.id);

    const sides = game.choose_sides();
    io.to(game.id.toString()).emit("sides", sides);
    console.log("chosen sides", sides);

    console.log("creating database record");
    const newGame = new OnlineGameModel({ _id: game.id, players: sides });
    newGame.save().then(() => {
      console.log("Starting game ...");
    });
  }
});

class Game {
  players = [];
  white = {};
  black = {};
  moveHistory = [];

  constructor() {
    this.id = mongoose.Types.ObjectId();
  }

  add_player = (player_id) => {
    if (this.players.length < 2) {
      this.players.push(new Player(player_id));
    } else {
      throw new Error("Game is Full");
    }
  };

  choose_sides = () => {
    if (this.players.length === 2) {
      switch (Math.round(Math.random())) {
        case 0:
          this.white = this.players[0];
          this.black = this.players[1];

        case 1:
          this.white = this.players[1];
          this.black = this.players[0];
      }

      return { white: this.white.id, black: this.black.id };
    } else {
      throw new Error("Not enough players to choose sides");
    }
  };

  is_full = () => this.players.length === 2;
}

class Player {
  constructor(id) {
    this.id = id;
  }
}
