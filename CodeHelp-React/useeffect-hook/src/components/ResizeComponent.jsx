import React, { useEffect, useState } from "react";

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // it will run only on first render
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log("Event Listener Added");
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Event Listener removed");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>window width is: {windowWidth}px </h1>
    </div>
  );
};

export default ResizeComponent;
