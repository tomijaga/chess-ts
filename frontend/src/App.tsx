import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "containers/Board";
import ChessBoard from "containers/ChessBoard";

import { classic } from "designs/pieces";
import { BoardClass } from "types/Board";

import { BoardContext } from "context/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BoardContext.Provider> */}
        <Board />
        <ChessBoard />
        {/* </BoardContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
