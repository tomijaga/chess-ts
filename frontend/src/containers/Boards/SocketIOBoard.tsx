import React, { FC, useContext, useEffect, useState } from "react";
import chess, { Move, Square, GameStatus, PlayedMove, Piece } from "chess";

import Board from "components/Board";
import { GameClientContext, SocketIOContext } from "context/Board";
import { PlayerSides } from "types/Board";

const gameClient = chess.create({ PGN: true });

const SocketIOBoard: FC<{
  gameId: string;
  playerSide: string;
  opponent: string;
  username: string;
}> = (props) => {
  useEffect(() => {
    console.log("initialising Game...");
    startGame();

    console.log(props);
  }, []);

  const socket = useContext(SocketIOContext);

  const startGame = () => {
    socket.on("move", (move: Move, turn: string) => {
      console.log("socketIOSentMove", move);
      console.log("algebraic", move.algebraic);
      gameClient.move(move.algebraic);
    });
  };

  return (
    <GameClientContext.Provider value={gameClient}>
      <Board {...props} />
    </GameClientContext.Provider>
  );
};

export default SocketIOBoard;
