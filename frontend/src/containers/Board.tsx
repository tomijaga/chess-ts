import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CSS from "csstype";

import ClockTimer from "components/ClockTimer";
import Tile from "components/Tile";

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

const board = new BoardClass(classic);

const socket = io();

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

board.setSide(nodeEnvState("white", ""));

let gameClient = chess.create({ PGN: true });

const Board = () => {
  const [game_id, set_game_id] = useState("");
  const [disable_pieces, set_disable_pieces] = useState(false);
  const [player_side, set_player_side] = useState(nodeEnvState("white", ""));
  const [tiles_as_jsx, set_tiles_as_jsx] = useState<JSX.Element[]>();
  const [selected_tile, set_selected_tile] = useState<Square>();
  const [turn_to_play, set_turn_to_play] = useState(nodeEnvState("white", ""));
  const [last_move, set_last_move] = useState<Move>();
  const [movesToDisplay, setMovesToDisplay] = useState<Square[]>();
  const [history, setHistory] = useState(gameClient.game.moveHistory);
  const [kingOnCheck, setKingOnCheck] = useState<Square>();
  const [promotion, setPromotion] = useState("Q");
  const [isCheckMate, setIsCheckMate] = useState(false);
  const [isStaleMate, setIsStaleMate] = useState(false);
  const [isRepitition, setIsRepitition] = useState(false);

  useEffect(() => {
    socket.on("game-id", (id: string) => {
      set_game_id(id);
      console.log({ game_id: id });
    });

    socket.on("sides", (sides: PlayerSides) => {
      if (sides.white === socket.id) {
        set_player_side("white");
      } else {
        set_player_side("black");
      }

      updateView();
      console.log(socket.id, sides);
    });

    socket.on("move", (move: Move) => {
      gameClient.move(move.algebraic);
      nodeEnvState("", set_turn_to_play(player_side));

      console.log({ socketIOSentMove: move });
      updateView();
    });
  }, []);

  useEffect(() => {
    map_tile_data_to_jsx();
  }, [
    selected_tile,
    player_side,
    turn_to_play,
    last_move,
    movesToDisplay,
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

    // gameClient.on("move", (move) => {
    //   console.log("A piece was moved!");
    //   console.log({ game_id });
    //   // console.log(move);
    // });

    gameClient.on("capture", (move) => {
      console.log("A piece has been captured!");
      console.log(move);
    });

    gameClient.on("checkmate", ({ attackingSquare, kingSquare }) => {
      console.log("The game has ended due to checkmate!");
      setKingOnCheck(() => kingSquare);
      setIsCheckMate(true);
      console.log(kingSquare);
    });
  }, [game_id]);

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

        let showPossibleMoveOnThisTile: boolean = false;
        movesToDisplay?.map((move) => {
          if (move.file === tile.file && move.rank === tile.rank) {
            showPossibleMoveOnThisTile = true;
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
            show_move={showPossibleMoveOnThisTile}
            onClick={(event: MouseEvent) => {
              if (disable_pieces) return;

              if (showPossibleMoveOnThisTile) {
                // if (possiblePromotion(selected_tile, tile)) {
                //   setPromotion(() => {
                //     const promoteTo = prompt(
                //       "what do you want to promote to: (Q, N, R, B)"
                //     );
                //     console.log({ promoteTo });
                //     return "B";
                //   });
                //   console.log({ promotion });
                // }

                // const pgn = calculatePGN(selected_tile, tile, promotion);
                const moves = gameClient.getStatus().notatedMoves;
                const pgn = Object.keys(moves).find((key) => {
                  const { dest, src } = moves[key];
                  return (
                    dest.file === tile.file &&
                    dest.rank === tile.rank &&
                    src.file === selected_tile.file &&
                    src.rank === selected_tile.rank
                  );
                });

                const { move } = gameClient.move(pgn);
                console.log(move);
                socket.emit("send-move", game_id, move, "white");
                setMovesToDisplay([]);
                set_turn_to_play(next_turn());
                nodeEnvState("", set_turn_to_play(next_turn()));
                set_selected_tile(undefined);
                updateView();
                // console.log(gameClient.getStatus().notatedMoves);
              } else if (possibleMoves.length > 0) {
                if (
                  tile.piece !== undefined &&
                  nodeEnvState("", tile.piece.side.name) ===
                    nodeEnvState("", player_side)
                ) {
                  set_selected_tile(tile);
                  setMovesToDisplay(possibleMoves);
                }
              }
            }}
          />
        );
      }
    );

    set_tiles_as_jsx(tilesDiv);
  }

  const next_turn = () => {
    return turn_to_play === "white" ? "black" : "white";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "right",
        }}
      >
        <TileDataContext.Provider
          value={{
            lastMove: last_move,
            kingOnCheck: gameClient.isCheck ? kingOnCheck : undefined,
            selectedTile: selected_tile,
            playerSide: player_side,
          }}
        >
          <ClockTimer turn_to_play={turn_to_play}>
            <div style={boardStyle}>{tiles_as_jsx}</div>
          </ClockTimer>
        </TileDataContext.Provider>
      </div>
    </div>
  );
};

export default Board;
