import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import Timerimg from "../asset/Timerimg.png";
import Timerimg2 from "../asset/Timerimg2.png";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
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
        <div style={{ margin: "10px", marginLeft: "50px" }}>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={seconds}
            colors={["#FF6A6A"]}
            // style={{ margin: '200px' }}
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
        </div>
        <div style={{ display: "flex" }}>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "absolute",
              left: "400px",
              margin: "20px",
            }}
          >
            <p style={{ color: "#949494", fontSize: "26px" }}>Seconds</p>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => setSeconds((prev) => prev + 1)}
            >
              <img src={Timerimg} />
            </button>
            <div style={{ marginLeft: "38px" }}>
              <div style={{ color: "white", fontSize: "30px" }}>
                {seconds % 60}
              </div>
            </div>

            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                if (seconds > 0) {
                  setSeconds((prev) => prev - 1);
                }
              }}
            >
              <img src={Timerimg2} />
            </button>
          </div>

          <p
            style={{
              fontSize: "50px",
              color: "white",
              position: "absolute",
              left: "550px",
              top: "540px",
            }}
          >
            :
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "absolute",
              left: "600px",
              margin: "20px",
            }}
          >
            <p style={{ color: "#949494", fontSize: "26px" }}>Minutes</p>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => setSeconds((prev) => prev + 60)}
            >
              <img src={Timerimg} />
            </button>
            <div style={{marginLeft: "37px" }}>
            <div style={{ color: "white", fontSize: "30px" }}>
              {Math.floor((seconds % 3600) / 60)}
            </div>
            </div>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                if (seconds >= 60) {
                  setSeconds((prev) => prev - 60);
                }
              }}
            >
              <img src={Timerimg2} />
            </button>
          </div>

          <p
            style={{
              fontSize: "50px",
              color: "white",
              position: "absolute",
              left: "750px",
              top: "540px",
            }}
          >
            :
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "absolute",
              left: "800px",
              margin: "20px",
            }}
          >
            <p style={{ color: "#949494", fontSize: "26px" }}>Hours</p>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => setSeconds((prev) => prev + 3600)}
            >
              <img src={Timerimg} />
            </button>
            <div style={{marginLeft: "26px"}}>
            <div style={{ color: "white", fontSize: "30px" }}>
                  {Math.floor(seconds / 3600)} 
                </div> 
                </div>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                if (seconds >= 3600) {
                  setSeconds((prev) => prev - 3600);
                }
              }}
            >
              <img src={Timerimg2} />
            </button>
          </div>

         
        </div>
      </div>

      <div style={{ position: "absolute", top: "650px", left: "450px" }}>
        <button
          style={{
            height: "40px",
            width: "400px",
            background: "#FF6A6A",
            borderRadius: "20px",
            border: "none",
          }}
          disabled={isPlaying}
          onClick={() => setIsPlaying(true)}
        >
          <span style={{ color: "white", fontSize: "20px" }}>Start</span>
        </button>
      </div>
    </div>
  );
}
