import React, { useRef, useState } from "react";

const UseRefTesting = () => {
  const [count, setCount] = useState(0);

  let val = useRef(0); // persist value even after re-render
  let btnColor = useRef(null); // we can access other elemnts DOM using useRef

  function handleClick() {
    val.current = val.current + 1;
    console.log("val = " + val.current);
    setCount(count + 1);
    console.log("Re-render");
  }

  function handleColorChange() {
    btnColor.current.style.background = "red";
  }

  return (
    <div>
      <button ref={btnColor} onClick={handleClick}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={handleColorChange}>Change Increment Btn Color</button>
      <br />
      <p>Count: {count}</p>
    </div>
  );
};

export default UseRefTesting;
