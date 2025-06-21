import React, { useEffect, useState } from "react";

const TimerComponent = () => {
  const [second, setSecond] = useState(0);

  // it will run only on first render
  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log("setInterval Executed");
      setSecond((second) => second + 1);
    }, 1000);
    return () => {
        console.log("its time to stop")
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Seconds: {second}</h1>
    </div>
  );
};

export default TimerComponent;
