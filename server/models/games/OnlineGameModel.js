import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Rank = { type: Number, required: true, min: 1, max: 8 };

const File = {
  type: String,
  enum: ["a", "b", "c", "d", "e", "f", "g", "h"],
  required: true,
};

const Side = {
  name: { type: String, enum: ["white", "black"], required: true },
};

const Piece = {
  type: String,
  notation: String,
  moveCount: Number,
  side: Side,
};

const Square = {
  file: File,
  piece: Schema.Types.Mixed,
  rank: Rank,
};

const Move = {
  algebraic: { type: String, required: true },
  capturedPiece: Schema.Types.Mixed,
  hashCode: String,
  piece: Schema.Types.Mixed,
  promotion: Boolean,
  postSquare: Square,
  prevSquare: Square,
};

let onlineGameSchema = Schema({
  players: {
    white: String,
    black: String,
  },
  moveHistory: [Move],
});

export const OnlineGameModel = mongoose.model("online", onlineGameSchema);
