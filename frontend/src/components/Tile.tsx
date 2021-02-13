import React, { CSSProperties, FC, MouseEvent, useContext } from "react";
import CSS from "csstype";
import clsx from "clsx";

import "./Tile.css";
import { ITilePosition, TileClass } from "../types/Board";
import { BoardContext } from "context/Board";

const Tile: FC<{
  tile: TileClass;
  onClick: (event: MouseEvent) => void;
  on_check: boolean;
  moved_last: boolean;
  show_move: boolean;
  tile_position: ITilePosition;
  style: CSSProperties;
}> = ({
  show_move,
  tile: { variant, piece },
  tile_position: { row, column },
  onClick,
  on_check,
  moved_last,
  style,
  children,
}) => {
  const board = useContext(BoardContext);

  return (
    <>
      <div
        onClick={onClick}
        className={clsx(
          "tile",
          on_check && "--on-check",
          moved_last && "--moved-last",
          !on_check && ((variant === 1 && "--variant1") || "--variant2")
        )}
        style={{
          height: "100%",
          width: "100%",
          fontSize: "small",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
      >
        {piece?.icon ? piece.icon : <></>}
        {show_move === true ? (
          <div
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              top: "40%",
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "50%",
            }}
          ></div>
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
