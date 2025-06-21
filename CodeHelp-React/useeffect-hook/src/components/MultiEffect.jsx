import React, { useEffect, useState } from "react";

const MultiEffect = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // side-effect logic will run when everytime count is changed
  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  // it will only run on !st render
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("set Interval started");
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      console.log("It's time to Stop");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Seconds:{seconds}</h1>
    </div>
  );
};

export default MultiEffect;
