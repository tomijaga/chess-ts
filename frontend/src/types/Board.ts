import {
  collapseTextChangeRangesAcrossMultipleVersions,
  VoidExpression,
} from "typescript";
import { IDesignPieces } from "./Design";
import { Piece } from "./Pieces";
import { SideEnum, SideClass } from "./Side";
import { clone } from "utils/Object";
import { Move, Square } from "chess";

export interface ITilePosition {
  row: number;
  column: number;
}

export interface SelectedTile {
  position: ITilePosition;
  possible_moves: ITilePosition[];
}

export interface IMovePiece {
  prev: ITilePosition;
  next: ITilePosition;
}

export class TileClass {
  piece?: Piece;
  variant: number;

  constructor(variant: number) {
    this.variant = variant;
  }
}

export interface TileData {
  lastMove: Move | undefined;
  kingOnCheck?: Square;
  selectedTile?: Square;
  playerSide: string;
}

const nodeEnvState = (dev: any, prod: any) => {
  if (process.env.NODE_ENV === "development") {
    return dev;
  } else {
    return prod;
  }
};

export interface BoardSides {
  white: SideClass;
  black: SideClass;
}

export class BoardClass {
  player_side: String = "white";
  sides: BoardSides;
  moves: IMovePiece[] = [];
  tiles: TileClass[][] = [];
  onCheck: boolean = false;

  constructor(design: IDesignPieces) {
    this.sides = {
      white: new SideClass(design, SideEnum.white),
      black: new SideClass(design, SideEnum.black),
    };

    for (let row_index = 0; row_index < 8; row_index++) {
      let index_on_row: number = 0;
      const row: TileClass[] = [];

      const row_is_odd: boolean = row_index % 2 === 1;

      while (index_on_row < 8) {
        const index_is_even = index_on_row % 2 === 0;
        let variant: number = 1;

        if (row_is_odd) {
          if (index_is_even) {
            variant = 2;
          }
        } else {
          if (!index_is_even) {
            variant = 2;
          }
        }

        row.push(new TileClass(variant));
        index_on_row++;
      }

      this.tiles.push(row);
    }
    console.log("Called Constructor");
    this.newGame();
  }

  setSide = (side: String) => {
    this.player_side = nodeEnvState("white", side);
  };

  movePiece = (prev: ITilePosition, next: ITilePosition) => {
    if (!this.position_is_out_of_bounds(next)) {
      let prev_tile = this.tiles[prev.column][prev.row];
      let next_tile = this.tiles[next.column][next.row];
      console.log({ next_tile, prev_tile });

      if (prev_tile.piece) {
        //Castling
        // if(prev_tile.piece.type==="king" && !prev_tile.piece.hasMoved){
        //   const next_column_change = prev_tile.piece.side ==="white"?2:-2;
        //   if(next.column === prev.column + next_column_change){
        //     const column_change_till_edge = prev_tile.piece.side ==="white"?3:-3;

        //     const edge_tile = this.tiles[prev.column+column_change_till_edge][prev.row];
        //     if(edge_tile.piece && edge_tile.piece.type==="rook" && !edge_tile.piece.hasMoved){

        //       return;
        //     }
        //   }

        // }

        //set Piece hasMove to true
        if (!prev_tile.piece.hasMoved) prev_tile.piece.hasMoved = true;

        //capture Piece
        if (next_tile.piece && prev_tile.piece.side !== next_tile.piece.side) {
          switch (prev_tile.piece.side) {
            case "white":
              this.sides["white"].capture(next_tile.piece.type);

              break;
            case "black":
              this.sides["black"].capture(next_tile.piece.type);
              break;

            default:
              throw new Error("@movePiece. prev_tile's side does not exist ");
          }
        }

        //move piece
        next_tile.piece = prev_tile.piece;
        next_tile.piece.location = next;
        prev_tile.piece = undefined;
        const move: IMovePiece = { prev, next };
        this.moves.push(move);

        //are the kings on check?
        this.sides.black.onCheck = this.is_on_check("black");
        this.sides.white.onCheck = this.is_on_check("white");

        return move;
      } else {
        throw new Error("There was no Piece on Previous Tile");
      }
    } else {
      throw new Error("Next Position Out of Bounds");
    }
  };

  private clearTiles = () => {
    this.traverse_tiles((tile) => {
      tile.piece = undefined;
    });
  };

  newGame = () => {
    this.clearTiles();

    this.tiles[0][0].piece = this.sides.white.rooks[0];
    this.sides.white.rooks[0].location = { column: 0, row: 0 };
    this.tiles[1][0].piece = this.sides.white.knights[0];
    this.sides.white.knights[0].location = { column: 1, row: 0 };
    this.tiles[2][0].piece = this.sides.white.bishops[0];
    this.sides.white.bishops[0].location = { column: 2, row: 0 };
    this.tiles[3][0].piece = this.sides.white.queen;
    this.sides.white.queen.location = { column: 3, row: 0 };
    this.tiles[4][0].piece = this.sides.white.king;
    this.sides.white.king.location = { column: 4, row: 0 };
    this.tiles[5][0].piece = this.sides.white.bishops[1];
    this.sides.white.bishops[1].location = { column: 5, row: 0 };
    this.tiles[6][0].piece = this.sides.white.knights[1];
    this.sides.white.knights[1].location = { column: 6, row: 0 };
    this.tiles[7][0].piece = this.sides.white.rooks[1];
    this.sides.white.rooks[1].location = { column: 7, row: 0 };

    this.tiles[0][7].piece = this.sides.black.rooks[0];
    this.sides.black.rooks[0].location = { column: 0, row: 7 };
    this.tiles[1][7].piece = this.sides.black.knights[0];
    this.sides.black.knights[0].location = { column: 1, row: 7 };
    this.tiles[2][7].piece = this.sides.black.bishops[0];
    this.sides.black.bishops[0].location = { column: 2, row: 7 };
    this.tiles[3][7].piece = this.sides.black.queen;
    this.sides.black.queen.location = { column: 3, row: 7 };
    this.tiles[4][7].piece = this.sides.black.king;
    this.sides.black.king.location = { column: 4, row: 7 };
    this.tiles[5][7].piece = this.sides.black.bishops[1];
    this.sides.black.bishops[1].location = { column: 5, row: 7 };
    this.tiles[6][7].piece = this.sides.black.knights[1];
    this.sides.black.knights[1].location = { column: 6, row: 7 };
    this.tiles[7][7].piece = this.sides.black.rooks[1];
    this.sides.black.rooks[1].location = { column: 7, row: 7 };

    this.set_pawns();
  };

  private is_on_check = (side: string): boolean => {
    switch (side) {
      case "white":
        if (this.sides.white.king.location) {
          const {
            column: kings_column,
            row: kings_row,
          } = this.sides.white.king.location;

          const pieces = this.sides.black.getPieces();

          for (let i = 0; i < pieces.length; ++i) {
            const piece = pieces[i];
            if (piece.location) {
              const possible_moves = this.possible_moves_from_tile(
                piece.location
              );

              for (let j = 0; j < possible_moves.length; ++j) {
                const move = possible_moves[j];
                if (move.column === kings_column && move.row === kings_row)
                  return true;
              }
            }
          }
        }

        break;
      case "black":
        if (this.sides.black.king.location) {
          const {
            column: kings_column,
            row: kings_row,
          } = this.sides.black.king.location;

          const pieces = this.sides.white.getPieces();
          for (let i = 0; i < pieces.length; ++i) {
            const piece = pieces[i];

            if (piece.location) {
              const possible_moves = this.possible_moves_from_tile(
                piece.location
              );

              for (let j = 0; j < possible_moves.length; ++j) {
                const move = possible_moves[j];
                if (move.column === kings_column && move.row === kings_row)
                  return true;
              }
            }
          }
        }
        break;
      default:
        throw Error('parameter side should be either "white" or "black"');
    }
    return false;
  };

  private set_pawns = () => {
    for (let index = 0; index < 8; ++index) {
      this.tiles[index][1].piece = this.sides.white.pawns[index];
      this.sides.white.pawns[index].location = { column: index, row: 1 };

      this.tiles[index][6].piece = this.sides.black.pawns[index];
      this.sides.black.pawns[index].location = { column: index, row: 6 };
    }
  };

  possible_moves_from_tile = (tile_position: ITilePosition) => {
    const { column, row } = tile_position;

    const tile = this.tiles[column][row];

    let possible_moves: ITilePosition[] = [];

    if (tile.piece) {
      possible_moves = this.map_piece_to_move(tile_position, tile.piece);
    }

    return possible_moves;
  };

  private traverse_tiles = (action: (tile: TileClass) => void) => {
    for (let row = 0; row < 8; ++row) {
      let column: number = 0;

      while (column < 8) {
        action(this.tiles[column++][row]);
      }
    }
  };

  valid_moves_if_on_check = () => {
    const { column: k_column, row: k_row }: ITilePosition = this.sides[
      "white"
    ].king.location;
    const kingsMoves = this.possible_moves_from_tile(
      this.tiles[k_column][k_row]
    );
  };

  private map_piece_to_move = (
    tile_position: ITilePosition,
    piece: Piece
  ): ITilePosition[] => {
    const { row, column } = tile_position;
    const { side, type } = piece;

    let movablePositions: ITilePosition[] = [];

    switch (type) {
      case "bishop":
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, -1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, -1),
        ];
        break;

      case "pawn":
        if (true) {
          //diagonals
          let ld = {} as ITilePosition;
          ld.column = side === "white" ? 1 : -1;
          ld.row = side === "white" ? 1 : -1;
          if (
            !this.position_is_out_of_bounds({
              column: column + ld.column,
              row: row + ld.row,
            }) &&
            this.tiles[column + ld.column][row + ld.row].piece !== undefined
          ) {
            if (
              this.tiles[column + ld.column][row + ld.row].piece?.side !== side
            ) {
              movablePositions = [
                ...movablePositions,
                ...this.linear_scan(tile_position, side, 1, 1),
              ];
            }
          }
          if (
            !this.position_is_out_of_bounds({
              column: column - ld.column,
              row: row + ld.row,
            }) &&
            this.tiles[column - ld.column][row + ld.row].piece !== undefined
          ) {
            if (
              this.tiles[column - ld.column][row + ld.row].piece?.side !== side
            ) {
              movablePositions = [
                ...movablePositions,
                ...this.linear_scan(tile_position, side, -1, 1),
              ];
            }
          }
        }

        if (!piece.hasMoved) {
          // console.log(piece.hasMoved);

          movablePositions = [
            ...movablePositions,
            ...this.linear_recursive_scan(tile_position, side, 0, 1, 2),
          ];
        } else {
          movablePositions = [
            ...movablePositions,
            ...this.linear_recursive_scan(tile_position, side, 0, 1, 1),
          ];
        }
        break;

      case "queen":
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, 0),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, 0),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 0, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 0, -1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, -1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, -1),
        ];
        break;

      case "rook":
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 1, 0),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, -1, 0),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 0, 1),
        ];
        movablePositions = [
          ...movablePositions,
          ...this.linear_recursive_scan(tile_position, side, 0, -1),
        ];
        break;

      case "knight":
        movablePositions = [
          ...movablePositions,
          ...this.radial_scan(tile_position, side, 2, 1),
        ];
        break;

      case "king":
        movablePositions = [
          ...movablePositions,
          ...this.radial_scan(tile_position, side, 1, 1),
          ...this.radial_scan(tile_position, side, 1, 0),
        ];

        if (!piece.hasMoved) {
          const column_change = side === "white" ? 2 : -2;

          if (
            !this.position_is_out_of_bounds({
              row,
              column: column + column_change,
            }) &&
            this.tiles[column + column_change][row].piece === undefined
          ) {
            movablePositions = [
              ...movablePositions,
              ...this.linear_scan(tile_position, side, 2, 0),
            ];
          }
        }
        break;

      default:
        break;
    }
    return movablePositions;
  };

  private linear_recursive_scan = (
    tile_position: ITilePosition,
    side: string,
    column_change: number,
    row_change: number,
    limit: number = Infinity,
    count: number = 0
  ): ITilePosition[] => {
    count++;
    const { column, row } = tile_position;

    const new_column =
      side === "white"
        ? column + column_change * count
        : column - column_change * count;
    const new_row =
      side === "white" ? row + row_change * count : row - row_change * count;

    const newPosition: ITilePosition = { column: new_column, row: new_row };
    const is_out_of_bounds = this.position_is_out_of_bounds(newPosition);

    let positions: ITilePosition[] = [];

    if (!is_out_of_bounds) {
      let tile = this.tiles[column][row];
      let next_tile = this.tiles[newPosition.column][newPosition.row];

      if (count <= limit) {
        if (next_tile.piece === undefined) {
          positions = [
            newPosition,
            ...this.linear_recursive_scan(
              tile_position,
              side,
              column_change,
              row_change,
              limit,
              count
            ),
          ];
        } else if (tile.piece?.side !== next_tile.piece.side) {
          if (tile.piece?.type === "pawn") {
            return positions;
          } else {
            positions = [
              newPosition,
              ...this.linear_recursive_scan(
                tile_position,
                side,
                column_change,
                row_change,
                count,
                count
              ),
            ];
          }
        }
      }
    }

    return positions;
  };

  private linear_scan = (
    { column, row }: ITilePosition,
    side: string,
    column_change: number,
    row_change: number
  ) => {
    let positions: ITilePosition[] = [];

    const new_column =
      side === "white" ? column + column_change : column - column_change;
    const new_row = side === "white" ? row + row_change : row - row_change;

    const newPosition: ITilePosition = { column: new_column, row: new_row };

    const is_out_of_bounds = this.position_is_out_of_bounds(newPosition);

    if (!is_out_of_bounds) {
      let tile = this.tiles[column][row];
      let next_tile = this.tiles[newPosition.column][newPosition.row];

      if (next_tile.piece === undefined) {
        positions = [...positions, newPosition];
      } else if (tile.piece?.side !== next_tile.piece.side) {
        positions = [...positions, newPosition];
      }
    }

    return positions;
  };

  private radial_scan = (
    tile_position: ITilePosition,
    side: string,
    column_change: number,
    row_change: number
  ): ITilePosition[] => {
    return [
      ...this.linear_scan(tile_position, side, column_change, row_change),
      ...this.linear_scan(tile_position, side, -column_change, -row_change),
      ...this.linear_scan(tile_position, side, column_change, -row_change),
      ...this.linear_scan(tile_position, side, -column_change, row_change),
      ...this.linear_scan(tile_position, side, row_change, column_change),
      ...this.linear_scan(tile_position, side, -row_change, -column_change),
      ...this.linear_scan(tile_position, side, row_change, -column_change),
      ...this.linear_scan(tile_position, side, -row_change, column_change),
    ];
  };

  private position_is_out_of_bounds = ({
    column,
    row,
  }: ITilePosition): boolean => {
    if (column >= 8 || column < 0) {
      return true;
    } else if (row >= 8 || row < 0) {
      return true;
    } else {
      return false;
    }
  };
}
