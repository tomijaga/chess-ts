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
} from "types/Board";

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

 
  const nodeEnvState=(dev:any, prod:any)=>{
    if(process.env.NODE_ENV==="development"){
     return dev;
    }else{
      return prod;
    }
  }

  board.setSide(nodeEnvState("white", ""));

const Board = () => {
  // const board = useContext(BoardContext);
  
  const [game_id, set_game_id] = useState("");
  const [disable_pieces, set_disable_pieces] = useState(false);
  const [player_side, set_player_side] = useState(nodeEnvState("white", ""));
  const [tiles_data, set_tiles_data] = useState<TileClass[][]>(board.tiles);
  const [tiles_jsx, set_tiles_jsx] = useState<JSX.Element[][]>();
  const [selected_tile, set_selected_tile] = useState({} as SelectedTile);
  const [turn_to_play, set_turn_to_play] = useState(nodeEnvState("white", ""));
  const [black_king_on_check, set_black_king_on_check] = useState(false);
  const [white_king_on_check, set_white_king_on_check] = useState(false);
  const [last_move, set_last_move] = useState<IMovePiece | undefined>();


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

    if (board.sides.black.onCheck) console.log("KING IS ON CHECK");
    set_black_king_on_check(board.sides.black.onCheck);

    set_white_king_on_check(board.sides.white.onCheck);
  }, [
    tiles_data,
    selected_tile,
    black_king_on_check,
    white_king_on_check,
    player_side,
    turn_to_play,
    last_move,
  ]);

  function map_tile_data_to_jsx(): void {
    const tilesDiv = tiles_data.map(
      (tiles_column: any, column: number): JSX.Element[] => {
        return tiles_column.map(
          (tile: TileClass, row: number): JSX.Element => {
            let show_move: boolean = false;
            if (selected_tile.possible_moves) {
              selected_tile.possible_moves.map((position) => {
                if (position.column === column && position.row === row) {
                  show_move = true;
                }
              });
            }

            const tile_position = { row, column };

            const validate_king_is_on_check = () => {
              const { column: white_kings_column, row: white_kings_row } = board
                .sides.white.king.location as ITilePosition;
              const { column: black_kings_column, row: black_kings_row } = board
                .sides.black.king.location as ITilePosition;

              const current_tile_is_white_king =
                white_kings_column === column && white_kings_row === row;
              const current_tile_is_black_king =
                black_kings_column === column && black_kings_row === row;

              return (
                (black_king_on_check && current_tile_is_black_king) ||
                (white_king_on_check && current_tile_is_white_king)
              );
            };

            const validate_last_move = () => {
              if (last_move !== undefined) {
                const { prev, next } = last_move;
                const current_tile_is_prev_move =
                  prev.column === column && prev.row === row;
                const current_tile_is_next_move =
                  next.column === column && next.row === row;

                return current_tile_is_prev_move || current_tile_is_next_move;
              }
              return false;
            };

            return (
              <Tile
                key={row + 1 + (column + 1) * 8}
                style={{
                  transform:
                    player_side === "white"
                      ? "rotate(90deg)"
                      : "rotate(270deg)",
                }}
                tile={tile}
                moved_last={validate_last_move()}
                on_check={validate_king_is_on_check()}
                show_move={show_move}
                tile_position={tile_position}
                onClick={(event: MouseEvent) => {
                  if (disable_pieces) return;
                  if (tile.piece && nodeEnvState(true,  tile.piece.side === player_side)) {
                    const moves = board.possible_moves_from_tile({
                      row,
                      column,
                    });
                    set_selected_tile(() => ({
                      position: tile_position,
                      possible_moves: moves,
                    }));
                  }

                  if (show_move && nodeEnvState(true, turn_to_play === player_side) ) {
                    const new_move = board.movePiece(
                      selected_tile.position,
                      tile_position
                    );
                    socket.emit("send-move", game_id, new_move, next_turn());
                    set_turn_to_play(next_turn());
                    updateView();
                    set_selected_tile(() => ({
                      position: selected_tile.position,
                      possible_moves: [],
                    }));
                  }
                }}
              />
            );
          }
        );
      }
    );

    set_tiles_jsx(tilesDiv);
  }

  const next_turn = () => {
    return player_side === "white" ? "black" : "white";
  };

  const updateView = () => {
    set_last_move(board.moves[board.moves.length - 1]);
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
     <div>
     <button onClick={()=>board.newGame()}> new game</button>
     </div>
      <div style={boardStyle}>{tiles_jsx}</div>
    </div>
  );
};

export default Board;
