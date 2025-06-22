import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside Expensive Task");

    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <div>Count: {count}</div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <div>Double:{doubleValue}</div>
    </div>
  );
}

export default App;
