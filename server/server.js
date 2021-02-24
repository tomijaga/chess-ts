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
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
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

const games = {};
let totalGames = 0;
const connections = [];

io.on("connection", function (socket) {
  connections.push(socket);

  socket.on("create-game", (username, gameSettings) => {
    create_game(gameSettings);
  });

  socket.on("join-game", (gameId, username) => {
    join_game(gameId, username);
  });

  socket.on("get-game-details", (gameId) => {
    socket.emit("game-details", games[gameId]);
  });

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
    console.log({ move });
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

  function create_game(gameSettings) {
    console.log({ gameSettings });
    const game = new Game(gameSettings);
    const gameId = game.id.toString();
    games[gameId] = game;

    join_game(gameId, gameSettings.username);

    socket.emit("game-id", gameId);

    console.log("Created Game");
    console.log("game id:", gameId, "player id:", socket.id);
  }

  function join_game(gameId, username) {
    const game = games[gameId];
    console.log({ games });
    console.log({ game, gameId, username });
    if (game.players.length < 2) {
      socket.join(gameId);
      game.add_player(username);
      console.log({ players: game.players });
      // socket.emit("game-id", game.id);

      if (games[gameId].players.length === 2) {
        start_game(gameId);
      }
    } else {
      throw new Error("Too many people in a game");
    }
  }

  function start_game(gameId) {
    const game = games[gameId];

    console.log("game id:", game.id, "player id:", socket.id);

    const sides = game.choose_sides();
    io.to(game.id.toString()).emit("start-game", sides);
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
  white = "";
  black = "";
  moveHistory = [];

  constructor(gameSettings) {
    this.id = mongoose.Types.ObjectId();

    this.stakedAmount = gameSettings.stakedAmount;
    this.time = gameSettings.time;
  }

  add_player = (username) => {
    if (this.players.length < 2) {
      this.players.push(username);
    } else {
      throw new Error("Game is Full");
    }
  };

  choose_sides = () => {
    if (this.players.length === 2) {
      const random = Math.round(Math.random() * 97);
      console.log({ random });
      switch (random % 2) {
        case 0:
          this.white = this.players[0];
          this.black = this.players[1];

        case 1:
          this.white = this.players[1];
          this.black = this.players[0];
      }

      return { white: this.white, black: this.black };
    } else {
      throw new Error("Not enough players to choose sides");
    }
  };

  is_full = () => this.players.length === 2;
}
