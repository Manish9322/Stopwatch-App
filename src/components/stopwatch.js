import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStopHandler = () => {
    setIsRunning((prev) => !prev);
  };

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  const hours = Math.floor(time / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor((time % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return (
    <>
      <div className="heading">
      <h1>Stopwatch App</h1>
      <p>Track your time effortlessly and achieve your goals.</p>
      </div>
      <div className="main-container">
        <div className="unit-container">
          <div className="unit-div">
            <h1>{hours}</h1>
          </div>
          <div className="colon"> : </div>
          <div className="unit-div">
            <h1>{minutes}</h1>
          </div>
          <div className="colon"> : </div>
          <div className="unit-div">
            <h1>{seconds}</h1>
          </div>
          <div className="colon"> : </div>
          <div className="unit-div">
            <h1>{milliseconds}</h1>
          </div>
        </div>
        <div className="buttons">
          <button onClick={startStopHandler} className="startButton">
            {isRunning ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </button>
          <button onClick={resetHandler}>
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
        </div>
      </div>

      <footer className="heading">
        <p>Designed and Developed By Manish Sonawane.</p>
      </footer>
    </>
  );
};

export default Stopwatch;
