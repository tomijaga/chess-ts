import React from "react";
import chess from "chess";

import Board from "components/Board";
import { GameClientContext } from "context/Board";

const DisabledBoard = () => {
  return (
    <GameClientContext.Provider value={chess.createSimple()}>
      <Board gameId="" playerSide="" disableBoard={true} />
    </GameClientContext.Provider>
  );
};

export default DisabledBoard;
