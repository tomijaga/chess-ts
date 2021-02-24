import React, { CSSProperties, FC, MouseEvent, useContext } from "react";
import CSS from "csstype";
import clsx from "clsx";
import { Square } from "chess";

import "./Tile.css";
import { ITilePosition, TileClass } from "../types/Board";
import { TileDataContext } from "context/Board";

import { classic } from "designs/pieces";
import { possibleEnPassant } from "utils/Chess";

const PossibleMove: FC<{ capture?: boolean }> = ({ capture }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          background: capture ? "rgba(200, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.2)",
          borderRadius: "50%",
          position: "relative",
          left: "-50%",
        }}
      />
    </div>
  );
};

const Tile: FC<{
  tile: Square;
  onClick?: (event: MouseEvent) => void;
  on_check: boolean;
  moved_last: boolean;
  show_move: boolean;
  style: CSSProperties;
}> = ({ show_move, tile, onClick, on_check, moved_last, style, children }) => {
  const { lastMove, kingOnCheck, selectedTile, playerSide } = useContext(
    TileDataContext
  );

  const determineVariant = () => {
    const oddAlphabets = ["a", "c", "e", "g"];

    if (tile.rank % 2 == 1) {
      if (oddAlphabets.includes(tile.file)) {
        return "--variant1";
      } else {
        return "--variant2";
      }
    } else {
      if (oddAlphabets.includes(tile.file)) {
        return "--variant2";
      } else {
        return "--variant1";
      }
    }
  };

  const tilePiece = () => {
    if (tile.piece?.side.name === "white") {
      switch (tile.piece.type) {
        case "pawn":
          return classic.white.pawn;
        case "bishop":
          return classic.white.bishop;
        case "king":
          return classic.white.king;
        case "queen":
          return classic.white.queen;
        case "rook":
          return classic.white.rook;
        case "knight":
          return classic.white.knight;
      }
    } else if (tile.piece?.side.name === "black") {
      switch (tile.piece.type) {
        case "pawn":
          return classic.black.pawn;
        case "bishop":
          return classic.black.bishop;
        case "king":
          return classic.black.king;
        case "queen":
          return classic.black.queen;
        case "rook":
          return classic.black.rook;
        case "knight":
          return classic.black.knight;
      }
    }
  };

  if (lastMove !== undefined) {
    moved_last =
      (lastMove.prevSquare.file === tile.file &&
        lastMove.prevSquare.rank === tile.rank) ||
      (lastMove.postSquare.file === tile.file &&
        lastMove.postSquare.rank === tile.rank);
  }

  if (kingOnCheck !== undefined) {
    on_check = kingOnCheck.file === tile.file && kingOnCheck.rank === tile.rank;
  }

  const showEnPassant =
    selectedTile !== undefined && selectedTile.piece
      ? possibleEnPassant(selectedTile, tile)
      : false;

  return (
    <>
      <div
        onClick={onClick}
        className={clsx(
          "tile",
          on_check && "--on-check",
          moved_last && "--moved-last",
          !on_check && !moved_last && determineVariant()
        )}
        style={{
          fontSize: "small",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
      >
        {tilePiece()}

        {show_move === true ? (
          <PossibleMove capture={tile.piece !== null || showEnPassant} />
        ) : (
          <></>
        )}

        {tile.file === "a" ? (
          <div style={{ position: "absolute", top: "5px", left: "5px" }}>
            {tile.rank}
          </div>
        ) : (
          <></>
        )}

        {playerSide === "white" ? (
          tile.rank === 1 ? (
            <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
              {tile.file}
            </div>
          ) : (
            <></>
          )
        ) : tile.rank === 8 ? (
          <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>
            {tile.file}
          </div>
        ) : (
          <></>
        )}

        {/* <div style={{ position: "absolute", bottom: "0%", display: "flex" }}>
          {" "}
          <div>[{row}]</div>
          <div>[{column}]</div>
        </div> */}
      </div>
    </>
  );
};

export default Tile;
