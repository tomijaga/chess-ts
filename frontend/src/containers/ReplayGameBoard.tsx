import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CSS from "csstype";

import Tile from "../components/Tile";
import {
  BoardClass,
  IMovePiece,
  ITilePosition,
  SelectedTile,
  TileClass,
  TileData,
} from "types/Board";

import { TileDataContext } from "context/Board";
import chess, { Move, Square, GameStatus } from "chess";

import { maskSideInEnum, SideEnum } from "types/Side";
import { classic, classic_outlined } from "designs/pieces";

import { calculatePGN, possiblePromotion } from "utils/Chess";
import { BoardContext } from "context/Board";
import { io } from "socket.io-client";
import { setInterval } from "timers";

export interface PlayerSides {
  white: string;
  black: string;
}

const nodeEnvState = (dev: any, prod: any) => {
  if (process.env.NODE_ENV === "development") {
    return dev;
  } else {
    return prod;
  }
};

let gameClient = chess.create({ PGN: true });

interface Game {
  _id: string;
  players: { white: string; black: string };
  moveHistory: Move[];
}

const Board: FC<{ game: Game }> = ({ game }) => {
  const [game_id, set_game_id] = useState("");
  const [disable_pieces, set_disable_pieces] = useState(false);
  const [player_side, set_player_side] = useState(nodeEnvState("white", ""));
  const [tiles_as_jsx, set_tiles_as_jsx] = useState<JSX.Element[]>();
  const [selected_tile, set_selected_tile] = useState<Square>();
  const [turn_to_play, set_turn_to_play] = useState(nodeEnvState("white", ""));
  const [last_move, set_last_move] = useState<Move>();
  const [history, setHistory] = useState(gameClient.game.moveHistory);
  const [kingOnCheck, setKingOnCheck] = useState<Square>();
  const [promotion, setPromotion] = useState("Q");
  const [isCheckMate, setIsCheckMate] = useState(false);
  const [isStaleMate, setIsStaleMate] = useState(false);
  const [isRepitition, setIsRepitition] = useState(false);
  const [pauseGame, setPauseGame] = useState(true);
  const [winner, setWinner] = useState("");

  const [playButton, setPlayButton] = useState(false);
  const [moveIndex, setMoveIndex] = useState(0);
  const [storeIndex, setStoreIndex] = useState(0);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    let i = moveIndex;
    const withinHistoryLimits = i < game?.moveHistory.length && i >= 0;

    const interval = setInterval(() => {
      if (playButton === true && withinHistoryLimits) {
        gameClient.move(game?.moveHistory[i++].algebraic);
        console.log(playButton);

        setStoreIndex(() => i);
      }
      // else if (playButton === false ) {
      //   if(){

      //   }
      // }
    }, 1000);

    // clearInterval(interval);
    return () => {
      clearInterval(interval);
    };
  }, [moveIndex, speed, playButton]);

  useEffect(() => {
    map_tile_data_to_jsx();
  }, [
    selected_tile,
    player_side,
    turn_to_play,
    last_move,
    kingOnCheck,
    history,
  ]);

  useEffect(() => {
    gameClient.on("check", ({ attackingSquare, kingSquare }) => {
      console.log("The King is under attack!");
      setKingOnCheck(kingSquare);
      console.log(attackingSquare, kingSquare);
    });

    gameClient.on("castle", (move) => {
      console.log("A castle has occured!");
      console.log(move);
    });

    gameClient.on("enPassant", (move) => {
      console.log("An en Passant has occured!");
      console.log(move);
    });

    gameClient.on("promote", (square) => {
      console.log("A Pawn has been promoted!");
      console.log(square);
    });

    gameClient.on("move", (move) => {
      console.log("A piece was moved!");
      if (gameClient.getStatus().isStalemate) {
        // endGame();
        setIsStaleMate(true);
        console.log("The game has ended in a Stale mate!");
      } else if (gameClient.getStatus().isRepetition) {
        // endGame();
        setIsRepitition(true);
        console.log("The game has ended in a 3 fold repetition!");
      }
      map_tile_data_to_jsx();
      setHistory(() => {
        const newHistory = gameClient.game.moveHistory;
        set_last_move(newHistory[newHistory.length - 1]);
        return newHistory;
      });
    });

    gameClient.on("capture", (move) => {
      console.log("A piece has been captured!");
      console.log(move);
    });

    gameClient.on("checkmate", ({ attackingSquare, kingSquare }) => {
      console.log("The game has ended due to checkmate!");
      setKingOnCheck(() => kingSquare);
      setIsCheckMate(true);
      console.log(kingSquare);
      // endGame();
    });
  }, [game_id, history]);

  function map_tile_data_to_jsx(): void {
    const tilesDiv = gameClient.game.board.squares.map(
      (tile: Square, i): JSX.Element => {
        let possibleMoves: Square[] = [];
        gameClient.validMoves.map((move) => {
          if (tile.file === move.src.file && tile.rank === move.src.rank)
            if (possibleMoves !== undefined) {
              possibleMoves = [...move.squares, ...possibleMoves];
            } else {
              possibleMoves = move.squares;
            }
        });

        return (
          <Tile
            key={i}
            style={{
              transform:
                player_side === "white"
                  ? "rotate(180deg) rotateY(180deg)"
                  : "rotate(0deg)",
            }}
            tile={tile}
            moved_last={false}
            on_check={false}
            show_move={false}
          />
        );
      }
    );

    set_tiles_as_jsx(tilesDiv);
  }

  const next_turn = () => {
    return player_side === "white" ? "black" : "white";
  };

  const updateGameData = () => {
    setHistory(() => gameClient.game.moveHistory);
  };

  const updateView = () => {
    updateGameData();
    set_last_move(() => history[history.length - 1]);
  };

  const boardStyle: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",

    transform: player_side === "white" ? "rotate(180deg) rotateY(180deg)" : "",
  };

  const retrieveStoredIndex = () => {
    setMoveIndex(storeIndex);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 50px",
          width: "100%",
        }}
      >
        <h6>game_id: {game_id}</h6>
        <h6>My side:{player_side}</h6>
        <h6>turn:{turn_to_play}</h6>
      </div>

      <TileDataContext.Provider
        value={{
          lastMove: last_move,
          kingOnCheck: gameClient.isCheck ? kingOnCheck : undefined,
          selectedTile: selected_tile,
          playerSide: player_side,
        }}
      >
        <div>
          <button>first move</button>

          <button>previous move</button>

          <button
            onClick={() => {
              setPlayButton((prevValue) => !prevValue);
              retrieveStoredIndex();
            }}
          >
            {playButton ? "pause game" : "start game!"}
          </button>

          <button
            onClick={() => {
              setMoveIndex(storeIndex + 1);
              setPlayButton((prevValue) => !prevValue);
            }}
          >
            next move
          </button>

          <button>last move</button>

          {/* <button onClick={endGame}>End Game</button> */}
        </div>
        <div style={boardStyle}>{tiles_as_jsx}</div>
      </TileDataContext.Provider>
    </div>
  );
};

export default Board;
