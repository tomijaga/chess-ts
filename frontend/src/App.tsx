import React, { FC, useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "containers/Board";
import BotVBotBoard from "containers/BotVBotBoard";
import ReplayGameBoard from "containers/ReplayGameBoard";

import { classic } from "designs/pieces";
import { BoardClass } from "types/Board";

import { BoardContext } from "context/Board";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { Move } from "chess";

interface Game {
  _id: string;
  players: { white: string; black: string };
  moveHistory: Move[];
}

function App() {
  const [boardType, setBoardType] = useState("");

  const [games, setGames] = useState<Game[]>();

  const [selectedGame, setSelectedGame] = useState<Game>();

  useEffect(() => {
    const SERVER = "http://localhost:8080";
    axios.get(`${SERVER}/games`).then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
          <div>
            {" "}
            {games?.map((game: any) => {
              return (
                <>
                  {selectedGame !== undefined ? (
                    <ReplayGameBoard game={selectedGame} />
                  ) : (
                    <></>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: "10px",
                    }}
                  >
                    <div
                      style={{
                        margin: "5px",
                        borderRadius: "3px",
                        backgroundColor: "lightblue",
                        padding: "5px 10px",
                        cursor: "pointer",
                        fontSize: "small",
                        color: "black",
                      }}
                      onClick={() => {
                        console.log({ game });
                        setSelectedGame(game);
                      }}
                    >
                      Game ID: {game._id}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        {/* </BoardContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
