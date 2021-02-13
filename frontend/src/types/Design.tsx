export interface IDesignPieces {
  ["black"]: ISidePieces;
  ["white"]: ISidePieces;
}

export interface ISidePieces {
  bishop: JSX.Element;
  king: JSX.Element;
  queen: JSX.Element;
  knight: JSX.Element;
  pawn: JSX.Element;
  rook: JSX.Element;
}
