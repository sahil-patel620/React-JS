import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

  // useCallback freezes the function that's why count is stuck to 1
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>count is {count}</button>
      <br />
      <br />
      <ChildComponent
        buttonName="Click me"
        handleClick={handleClick}
      ></ChildComponent>
    </div>
  );
}

export default App;
