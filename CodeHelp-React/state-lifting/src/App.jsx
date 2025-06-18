import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="card-container">
      <Card  label ="1st:" text={text} setText={setText}></Card>
      <Card  label ="2nd:" text={text} setText={setText}></Card>
    </div>
  );
}

export default App;
