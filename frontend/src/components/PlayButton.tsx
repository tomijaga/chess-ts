import React from "react";

const PlayButton = () => {
  return (
    <div
      style={{
        background: "rgba(45, 150, 79, 1)",
        boxShadow: "0px 0px 200px 80px rgba(0,0,0, 0.6)",
        fontSize: "larger",
        fontWeight: "bold",
        color: "white",
        borderRadius: "5px",
        position: "relative",
        width: "200px",
        height: "auto",
        padding: "10px",
        top: "-50%",
        left: "-50%",
        cursor: "pointer",
      }}
      // onClick={() => {
      //   set_disable_pieces(false);
      //   startGame();
      //   set_turn_to_play("white");
      // }}
    ></div>
  );
};

export default PlayButton;
