import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        background: "#1E2343",
        height: "200px",
        width: "73vw",
        margin: "10px",
        borderRadius: "19px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={seconds}
        colors={["#FF6A6A"]}
      >
        {({ remainingTime }) => {
          if (remainingTime === 0) {
            setIsPlaying(false);
            // alert("Time is up!");
            return (
              <div style={{ color: "white", fontSize: "30px" }}>
                Time is up!
              </div>
            );
          } else {
            return (
              <>
                <div style={{ color: "white", fontSize: "30px" }}>
                  {Math.floor(remainingTime / 3600)} :
                </div>{" "}
                {/* 1 hour = 3600 seconds */}{" "}
                {/* 3661 secodonds = 1 hour 1 minute 1 second */}
                <div style={{ color: "white", fontSize: "30px" }}>
                  {" "}
                  {Math.floor((remainingTime % 3600) / 60)} :
                </div>
                <div style={{ color: "white", fontSize: "30px" }}>
                  {remainingTime % 60}{" "}
                </div>
              </>
            );
          }
        }}
      </CountdownCircleTimer>
      <div style={{ display: "flex",position:"relative",}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#949494", fontSize: "26px" }}>Seconds</p>
          <button onClick={() => setSeconds((prev) => prev + 1)}>
            + Second
          </button>
          <button
            onClick={() => {
              if (seconds > 0) {
                setSeconds((prev) => prev - 1);
              }
            }}
          >
            - Second
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#949494", fontSize: "26px" }}>Minutes</p>
          <button onClick={() => setSeconds((prev) => prev + 60)}>
            + Minute
          </button>
          <button
            onClick={() => {
              if (seconds >= 60) {
                setSeconds((prev) => prev - 60);
              }
            }}
          >
            - Minute
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#949494", fontSize: "26px" }}>Hours</p>
          <button onClick={() => setSeconds((prev) => prev + 3600)}>
            + Hour
          </button>
          <button
            onClick={() => {
              if (seconds >= 3600) {
                setSeconds((prev) => prev - 3600);
              }
            }}
          >
            - Hour
          </button>
        </div>
      </div>

      <div>
        <button disabled={isPlaying} onClick={() => setIsPlaying(true)}>
          Play
        </button>
      </div>
    </div>
  );
}
