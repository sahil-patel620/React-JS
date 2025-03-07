import "bootstrap/dist/css/bootstrap.min.css"
import Map from "./components/Map"
import ConditionRendering from "./components/ConditionalRendering"


function App() {
  return (
    <>
    <h1>Fragments</h1>
    <p>a fragment is a way to group multiple elements without adding extra nodes to the DOM. It's particularly useful when you need to return multiple elements from a component but don't want to wrap them in an unnecessary parent element like a div, which could affect your layout or styling.</p>
    <h4>Healthy Foods</h4>
    <ul className="list-group">
      <li className="list-group-item">Dal</li>
      <li className="list-group-item">Vegetables</li>
      <li className="list-group-item">Fruits</li>
      <li className="list-group-item">Roti</li>
      <li className="list-group-item">salad</li>
      <li className="list-group-item">Milk</li>
    </ul>

    <Map/>
    <ConditionRendering />
    </>
  )
}

export default App
