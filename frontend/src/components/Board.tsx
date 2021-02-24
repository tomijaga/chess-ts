import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CSS from "csstype";

import ClockTimer from "components/ClockTimer";
import Tile from "components/Tile";

import {
  BoardClass,
  IMovePiece,
  ITilePosition,
  SelectedTile,
  TileClass,
  TileData,
} from "types/Board";

import {
  GameClientContext,
  SocketIOContext,
  TileDataContext,
} from "context/Board";
import chess, { Move, Square, GameStatus, PlayedMove, Piece } from "chess";

import { GameResults, PlayedMoveMove, PlayerSides, Side } from "types/Board";
import { maskSideInEnum, SideEnum } from "types/Side";
import { classic, classic_outlined } from "designs/pieces";

import { calculatePGN, possiblePromotion } from "utils/Chess";
import { BoardContext } from "context/Board";

const nodeEnvState = (dev: any, prod: any) => {
  if (process.env.NODE_ENV === "development") {
    return dev;
  } else {
    return prod;
  }
};

const Board: FC<{
  gameId: string;
  playerSide: string;
  type?: string;
  undo?(): void;
  onGameEnd?(results: GameResults): void;
  clockTimer?: number;
  disableBoard?: boolean;
}> = ({ gameId, playerSide, onGameEnd, clockTimer, disableBoard = false }) => {
  const [game_id, set_game_id] = useState(gameId);
  const [disable_pieces, set_disable_pieces] = useState(disableBoard);
  const [player_side, set_player_side] = useState<Side>(
    nodeEnvState("", playerSide)
  );
  const [tiles_as_jsx, set_tiles_as_jsx] = useState<JSX.Element[]>();
  const [selected_tile, set_selected_tile] = useState<Square>();
  const [turn_to_play, set_turn_to_play] = useState<Side>("white");
  const [last_move, set_last_move] = useState<PlayedMoveMove>();
  const [movesToDisplay, setMovesToDisplay] = useState<Square[]>();
  const [history, setHistory] = useState<PlayedMove[]>([]);
  const [kingOnCheck, setKingOnCheck] = useState<Square>();
  const [promotion, setPromotion] = useState("Q");
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameResults, setGameResults] = useState<{
    winingSide: string;
    endedBy: string;
  }>();

  const gameClient = useContext(GameClientContext);
  const socket = useContext(SocketIOContext);

  const gameOver = (endedBy: string, winingSide: Side) => {
    set_disable_pieces(() => true);
    setIsGameOver(() => true);
    const results: GameResults = { endedBy, winingSide };
    setGameResults(results);
    console.log(results);
    if (onGameEnd) {
      onGameEnd(results);
    }
  };

  const undo = () => {
    console.log(gameClient.game.moveHistory);

    if (history.length > 0) {
      const tempMoves = history;
      console.log(tempMoves);

      const lastMove = tempMoves[tempMoves.length - 1];

      lastMove.undo();
      tempMoves.pop();
      setHistory(tempMoves);

      console.log({ history: gameClient.game.moveHistory });
      console.log({ notatedMoves: gameClient.getStatus().notatedMoves });
    }
  };

  useEffect(() => {
    map_tile_data_to_jsx();
  }, [
    selected_tile,
    player_side,
    turn_to_play,
    last_move,
    movesToDisplay,
    kingOnCheck,
    history,
    disable_pieces,
  ]);

  useEffect(() => {
    if (gameClient) {
      gameClient.on("check", ({ attackingSquare, kingSquare }) => {
        console.log("The King is under attack!");
        setKingOnCheck(kingSquare);
        console.log(attackingSquare, kingSquare);
      });

      gameClient.on("castle", (move) => {
        console.log("A castle has occured!");
        console.log(move);
      });

      gameClient.on("enPassant", (move) => {
        console.log("An en Passant has occured!");
        console.log(move);
      });

      gameClient.on("promote", (square) => {
        console.log("A Pawn has been promoted!");
        console.log(square);
      });

      gameClient.on("capture", (move) => {
        console.log("A piece has been captured!");
        console.log(move);
      });

      gameClient.on("move", (move) => {
        setHistory((prev) => [...prev, move]);
        set_turn_to_play(next_turn());
        map_tile_data_to_jsx();
      });

      gameClient.on("checkmate", ({ attackingSquare, kingSquare }) => {
        console.log("The game has ended due to checkmate!");
        setKingOnCheck(() => kingSquare);
        gameOver("Check Mate", turn_to_play);
        console.log(kingSquare);
      });
    }
  }, []);

  function map_tile_data_to_jsx(): void {
    const tilesDiv = gameClient.game.board.squares.map(
      (tile: Square, i): JSX.Element => {
        let possibleMoves: Square[] = [];
        gameClient.validMoves.map((move) => {
          if (tile.file === move.src.file && tile.rank === move.src.rank)
            if (possibleMoves !== undefined) {
              possibleMoves = [...move.squares, ...possibleMoves];
            } else {
              possibleMoves = move.squares;
            }
        });

        let showPossibleMoveOnThisTile: boolean = false;
        movesToDisplay?.map((move) => {
          if (move.file === tile.file && move.rank === tile.rank) {
            showPossibleMoveOnThisTile = true;
          }
        });

        return (
          <Tile
            key={i}
            style={{
              transform:
                player_side === "white"
                  ? "rotate(180deg) rotateY(180deg)"
                  : "rotate(0deg)",
            }}
            tile={tile}
            moved_last={false}
            on_check={false}
            show_move={showPossibleMoveOnThisTile}
            onClick={(event: MouseEvent) => {
              if (disable_pieces) return;

              if (showPossibleMoveOnThisTile) {
                // const pgn = calculatePGN(selected_tile, tile, promotion);
                const moves = gameClient.getStatus().notatedMoves;
                const pgn = Object.keys(moves).find((key) => {
                  const { dest, src } = moves[key];
                  return (
                    dest.file === tile.file &&
                    dest.rank === tile.rank &&
                    src.file === selected_tile.file &&
                    src.rank === selected_tile.rank
                  );
                });

                const move = gameClient.move(pgn);
                setHistory((prev) => [...prev, move]);
                console.log(move);

                if (socket) {
                  socket.emit("send-move", game_id, move.move, next_turn());
                }

                setMovesToDisplay([]);
                set_turn_to_play(next_turn());
                set_selected_tile(undefined);
                updateView();
                // console.log(gameClient.getStatus().notatedMoves);
              } else if (possibleMoves.length > 0) {
                if (
                  tile.piece !== undefined &&
                  nodeEnvState("", tile.piece.side.name) ===
                    nodeEnvState("", player_side)
                ) {
                  set_selected_tile(tile);
                  setMovesToDisplay(possibleMoves);
                }
              }
            }}
          />
        );
      }
    );

    set_tiles_as_jsx(tilesDiv);
  }

  const next_turn = () => {
    return history.length % 2 === 0 ? "white" : "black";
  };

  const updateView = () => {
    if (history.length > 0) {
      const lastMove = history[history.length - 1].move;

      set_last_move(lastMove);
    }
  };

  const boardStyle: CSS.Properties = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    transform: player_side === "white" ? "rotate(180deg) rotateY(180deg)" : "",
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 50px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <h6>game_id: {game_id}</h6>
        <h6>My side:{player_side}</h6>
        <h6>turn:{turn_to_play}</h6>
        <button onClick={() => undo()}>Undo</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "right",
        }}
      >
        <TileDataContext.Provider
          value={{
            lastMove: last_move,
            kingOnCheck: gameClient.isCheck ? kingOnCheck : undefined,
            selectedTile: selected_tile,
            playerSide: player_side,
          }}
        >
          <ClockTimer
            onTimeUp={(winingSide: Side) => {
              gameOver("Time Up", winingSide);
            }}
            player_side={player_side}
            turn_to_play={turn_to_play}
          >
            <div style={boardStyle}>{tiles_as_jsx}</div>
          </ClockTimer>
        </TileDataContext.Provider>
      </div>
    </div>
  );
};

export default Board;
