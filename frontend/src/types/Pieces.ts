import { ITilePosition } from "./Board";
import { ISidePieces } from "./Design";

export class Piece {
  icon: JSX.Element;
  type: string;
  side: string;
  hasMoved: boolean = false;
  location: ITilePosition | null = null;

  constructor(_icon: JSX.Element, type: string, side: string) {
    this.icon = _icon;
    this.type = type;
    this.side = side;
  }
}

export class Rook extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.rook, "rook", side);
  }
}

export class Bishop extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.bishop, "bishop", side);
  }
}

export class King extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.king, "king", side);
  }
}

export class Queen extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.queen, "queen", side);
  }
}

export class Knight extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.knight, "knight", side);
  }
}

export class Pawn extends Piece {
  constructor(design: ISidePieces, side: string) {
    super(design.pawn, "pawn", side);
  }
}
