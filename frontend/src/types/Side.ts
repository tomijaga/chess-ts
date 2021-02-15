import { clone } from "utils/Object";
import { fillArray } from "utils/Array";
import { IDesignPieces } from "./Design";
import { Bishop, King, Knight, Pawn, Piece, Queen, Rook } from "./Pieces";

export class SideClass {
  pawns: Pawn[] = [];
  knights: Knight[] = [];
  king: King;
  queen: Queen;
  bishops: Bishop[] = [];
  rooks: Rook[] = [];
  capturedPieces: String[] = [];
  onCheck: boolean = false;

  constructor(design: IDesignPieces, side: number) {
    let side_string: string = "white";

    if (side === 1) {
      side_string = "black";
    }
    if (side_string === "white") {
      this.king = new King(design["white"], "white");
      this.queen = new Queen(design["white"], "white");
      this.pawns[0] = new Pawn(design["white"], "white");
      this.pawns[1] = new Pawn(design["white"], "white");
      this.pawns[2] = new Pawn(design["white"], "white");
      this.pawns[3] = new Pawn(design["white"], "white");
      this.pawns[4] = new Pawn(design["white"], "white");
      this.pawns[5] = new Pawn(design["white"], "white");
      this.pawns[6] = new Pawn(design["white"], "white");
      this.pawns[7] = new Pawn(design["white"], "white");

      this.knights = fillArray<Pawn>(new Knight(design["white"], "white"), 2);
      this.rooks = fillArray<Pawn>(new Rook(design["white"], "white"), 2);
      this.bishops = fillArray<Pawn>(new Bishop(design["white"], "white"), 2);
    } else {
      this.king = new King(design["black"], "black");
      this.queen = new Queen(design["black"], "black");
      this.pawns[0] = new Pawn(design["black"], "black");
      this.pawns[1] = new Pawn(design["black"], "black");
      this.pawns[2] = new Pawn(design["black"], "black");
      this.pawns[3] = new Pawn(design["black"], "black");
      this.pawns[4] = new Pawn(design["black"], "black");
      this.pawns[5] = new Pawn(design["black"], "black");
      this.pawns[6] = new Pawn(design["black"], "black");
      this.pawns[7] = new Pawn(design["black"], "black");
      this.knights = fillArray<Pawn>(new Knight(design["black"], "black"), 2);
      this.rooks = fillArray<Pawn>(new Rook(design["black"], "black"), 2);
      this.bishops = fillArray<Pawn>(new Bishop(design["black"], "black"), 2);
    }
  }

  capture = (piece: String) => {
    this.capturedPieces.push(piece);
  };

  getPieces = (): Piece[] => {
    return [
      this.king,
      this.queen,
      ...this.bishops,
      ...this.knights,
      ...this.pawns,
      ...this.rooks,
    ];
  };
}

export enum SideEnum {
  white,
  black,
}

export const maskSideInEnum = (side: string) =>
  side === "white"
    ? 0
    : side === "black"
    ? 1
    : () => {
        throw new Error('Expecting "white" or "black" ');
      };
