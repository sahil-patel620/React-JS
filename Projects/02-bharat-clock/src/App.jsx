import ClockHeading from "./components/ClockHeading";
import Para from "./components/Paragraph";
import DateTime from "./components/DateTime";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  return (
    <div className="container">
      <ClockHeading />
      <Para />
      <DateTime />
    </div>
  );
}

export default App;
