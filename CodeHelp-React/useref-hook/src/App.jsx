import "./App.css";
import StopWatch from "./components/StopWatch";
import UseRefTesting from "./components/UseRefTesting";

function App() {
  return (
    <div>
      <UseRefTesting></UseRefTesting>
      <hr />
      <h1>StopWatch</h1>
      <StopWatch></StopWatch>
    </div>
  );
}

export default App;
