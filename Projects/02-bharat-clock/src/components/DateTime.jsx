import { useEffect } from "react";
import { useState } from "react";

function DateTime() {
  const [time, setTime] = useState(new Date());

  // useEffect with Cleanup
  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Interval Cleared");
    };
  }, []);

  let options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  return (
    <>
      <p className="lead">Current Time:- {time.toLocaleTimeString()}</p>
      <p className="lead">Date :- {time.toLocaleDateString("en-IN", options)}</p>
    </>
  );
}

export default DateTime;
