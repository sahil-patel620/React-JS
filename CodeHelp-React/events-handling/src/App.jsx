import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const randomRGB = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    return `rgb(${r},${g},${b})`;
  };

  const handleColorChange = (e) => {
    e.stopPropagation();
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = randomRGB();
  };

  return (
    <div
      className="container"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <button onClick={handleColorChange}>Change Color</button>
      <p>Clicks on page: {count} </p>
    </div>
  );
}

export default App;
