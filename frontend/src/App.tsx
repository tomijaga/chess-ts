import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "containers/Board";
import BotVBotBoard from "containers/BotVBotBoard";

import { classic } from "designs/pieces";
import { BoardClass } from "types/Board";

import { BoardContext } from "context/Board";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  const [boardType, setBoardType] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <button onClick={() => setBoardType("solo")}>Play Solo</button>
          <button onClick={() => setBoardType("online")}>Play Online</button>
          <button onClick={() => setBoardType("tournament")}>
            Play Tournament
          </button>
          <button onClick={() => setBoardType("botVbot")}>Bot Vs Bot</button>
          <button onClick={() => setBoardType("watch")}>Watch Game</button>
        </div>
        {/* <BoardContext.Provider> */}
        {boardType === "solo" ? (
          <div>Coming Soon!</div>
        ) : boardType === "botVbot" ? (
          <BotVBotBoard />
        ) : boardType === "online" ? (
          <Board />
        ) : boardType === "tournament" ? (
          <div>Coming Soon!</div>
        ) : boardType === "watch" ? (
          <div>Coming Soon!</div>
        ) : (
          <></>
        )}

        {/* </BoardContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
