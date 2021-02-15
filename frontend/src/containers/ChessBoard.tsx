import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CSS from "csstype";
import chess from "chess";

const ChessBoard = () => {
  let status, move;
  let gameClient = chess.create({ PGN: true });

  status = gameClient.getStatus();

  console.log(status);
  //   move = gameClient.move("a4");

  //   console.log(move);

  status = gameClient.getStatus();

  console.log(status);

  let board = gameClient.game.board.squares;
  console.log({ board });

  let validMoves = gameClient.validMoves;
  console.log({ validMoves });

  const displayBoard = () => {};

  return (
    <div>
      <tr></tr>
    </div>
  );
};

export default ChessBoard;
