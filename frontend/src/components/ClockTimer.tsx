import React, { FC, useState, useEffect } from "react";

const ClockTimer: FC<{ turn_to_play: string }> = ({
  turn_to_play,
  children,
}) => {
  const [startTime, setStartTime] = useState(60 * 10);
  const [player_1_time, set_player_1_time] = useState(startTime);
  const [player_2_time, set_player_2_time] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (turn_to_play === "white") {
        set_player_1_time((prevTime) => prevTime - 1);
      } else {
        set_player_2_time((prevTime) => prevTime - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [turn_to_play]);

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

    return minutes + ":" + (seconds === 0 ? "00" : seconds);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {timer(convertToTime(player_1_time))}
      {children}
      {timer(convertToTime(player_2_time))}
    </div>
  );
};

export default ClockTimer;
