import { Square } from "chess";

export const possibleEnPassant = (from: Square, to: Square): boolean => {
  return from.piece.type === "pawn"
    ? from.rank + 1 === to.rank && from.file !== to.file
    : false;
};

export const possiblePromotion = (from: Square, to: Square): boolean => {
  return from.piece.type === "pawn" && (to.rank === 8 || to.rank === 1);
};

export const calculatePGN = (
  from: Square,
  to: Square,
  promotionTo?: string
) => {
  const castling =
    from.piece.type === "king" &&
    from.file === "e" &&
    (to.file === "g" || to.file === "c");

  if (castling) {
    return to.file === "g" ? "O-O" : "O-O-O";
  }

  const attackingPiece = possibleEnPassant(from, to) || to.piece !== null;
  return (
    from.piece.notation +
    (from.piece.type === "pawn" && attackingPiece ? from.file : "") +
    (attackingPiece ? "x" : "") +
    to.file +
    to.rank +
    (possiblePromotion(from, to) ? (promotionTo ? promotionTo : "") : "")
  );
};
