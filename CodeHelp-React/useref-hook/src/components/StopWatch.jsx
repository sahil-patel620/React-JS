import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function handleStart() {
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(0);
  }

  return (
    <div>
      <h3>StopWatch: {time} seconds</h3>
      <br />
      <br />
      <button onClick={handleStart}>Start</button>
      <br />
      <br />
      <button onClick={handleStop}>Stop</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
