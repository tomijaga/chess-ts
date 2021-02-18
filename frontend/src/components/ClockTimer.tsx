import React, { FC, useState, useEffect } from "react";

const ClockTimer: FC<{
  player_side: string;
  turn_to_play: string;
  onTimeUp(winningSide: string): void;
}> = ({ turn_to_play, player_side, onTimeUp, children }) => {
  const [startTime, setStartTime] = useState(60 * 10);
  const [player_1_time, set_player_1_time] = useState(startTime);
  const [player_2_time, set_player_2_time] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (player_side !== "") {
        const calculateTime = (winingSide: string) => (prevTime: number) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            onTimeUp(winingSide);
          }
          return prevTime - 1;
        };

        if (turn_to_play === "white") {
          set_player_1_time(calculateTime("white"));
        } else if (turn_to_play === "black") {
          set_player_2_time(calculateTime("black"));
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [turn_to_play, player_side]);

  const timer = (time: string) => (
    <div
      style={{
        width: "100px",
        background: "rgba(0,0,0, 0.2)",
        borderRadius: "5px",
        fontSize: "20px",
        padding: "5px",
      }}
    >
      {time}
    </div>
  );

  const convertToTime = (timestamp: number) => {
    const seconds = timestamp % 60;
    const minutes = ((timestamp / 60) | 0) % 60;

    return minutes + ":" + (seconds <= 0 ? "0" + seconds : seconds);
  };

  const orientTimer = () => {
    if (player_side === "white") {
      return (
        <>
          {timer(convertToTime(player_2_time))}
          {children}
          {timer(convertToTime(player_1_time))}
        </>
      );
    } else {
      return (
        <>
          {timer(convertToTime(player_1_time))}
          {children}
          {timer(convertToTime(player_2_time))}
        </>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {orientTimer()}
    </div>
  );
};

export default ClockTimer;
