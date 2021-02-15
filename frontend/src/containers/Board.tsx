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
import chess, { Move, Square } from "chess";

import { maskSideInEnum, SideEnum } from "types/Side";
import { classic, classic_outlined } from "designs/pieces";

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
  // const board = useContext(BoardContext);

  const [game_id, set_game_id] = useState("");
  const [disable_pieces, set_disable_pieces] = useState(false);
  const [player_side, set_player_side] = useState(nodeEnvState("white", ""));
  const [tiles_data, set_tiles_data] = useState<TileClass[][]>(board.tiles);
  const [tiles_jsx, set_tiles_jsx] = useState<JSX.Element[]>();
  const [selected_tile, set_selected_tile] = useState({} as Square);
  const [turn_to_play, set_turn_to_play] = useState(nodeEnvState("white", ""));
  const [black_king_on_check, set_black_king_on_check] = useState(false);
  const [white_king_on_check, set_white_king_on_check] = useState(false);
  const [last_move, set_last_move] = useState<Move>();
  const [movesToDisplay, setMovesToDisplay] = useState<Square[]>();
  const [history, setHistory] = useState(gameClient.game.moveHistory);

  useEffect(() => {
    socket.on("game-id", (id: string) => {
      set_game_id(id);
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

    socket.on("move", ({ prev, next }: IMovePiece, turn: string) => {
      board.movePiece(prev, next);
      set_turn_to_play(turn);
      updateView();

      console.log({ turn });
    });
  }, []);

  useEffect(() => {
    map_tile_data_to_jsx();
  }, [
    tiles_data,
    selected_tile,
    black_king_on_check,
    white_king_on_check,
    player_side,
    turn_to_play,
    last_move,
    movesToDisplay,
    history,
  ]);

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
            console.log("this tile");
            showPossibleMoveOnThisTile = true;
          }
        });

        return (
          <Tile
            key={i}
            style={{
              transform:
                player_side === "white" ? "rotate(90deg)" : "rotate(270deg)",
            }}
            tile={tile}
            moved_last={false}
            on_check={false}
            show_move={showPossibleMoveOnThisTile}
            onClick={(event: MouseEvent) => {
              if (disable_pieces) return;

              if (showPossibleMoveOnThisTile) {
                const pgn =
                  selected_tile.piece.notation +
                  (selected_tile.piece.type === "pawn" && tile.piece !== null
                    ? selected_tile.file
                    : "") +
                  (tile.piece !== null ? "x" : "") +
                  tile.file +
                  tile.rank;
                console.log(pgn);

                gameClient.move(pgn);
                setMovesToDisplay([]);
                updateView();
              } else if (possibleMoves.length > 0) {
                set_selected_tile(tile);
                setMovesToDisplay(possibleMoves);
              }
            }}
          />
        );
      }
    );

    set_tiles_jsx(tilesDiv);
  }

  const next_turn = () => {
    return player_side === "white" ? "black" : "white";
  };

  const updateGameData = () => {
    setHistory(() => gameClient.game.moveHistory);
  };

  const updateView = () => {
    updateGameData();
    set_last_move(() => history[history.length]);
    set_tiles_data(() => board.tiles);
    console.log(board.tiles);
  };

  const boardStyle: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    transform: player_side === "white" ? "rotate(-90deg)" : "rotate(90deg)",
    minWidth: "350px",
    minHeight: "350px",
    width: "80vw",
    height: "80vw",
    maxWidth: "650px",
    maxHeight: "650px",
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
          lastMove: history.length > 0 ? history[history.length] : undefined,
        }}
      >
        <div style={boardStyle}>{tiles_jsx}</div>
      </TileDataContext.Provider>
    </div>
  );
};

export default Board;
