import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from './components/Container'
import Button from "./components/Button";
import InputBox from "./components/InputBox";

function App() {
  
    function handleOnClick(){
        console.log("item Bought");
    }
  return (
    <>
    <Container>
    <h4>Healthy Foods</h4>
    <InputBox />
    <ul className="list-group">
      <li className="list-group-item">Dal <Button handleOnClick={handleOnClick} /></li>
      <li className="list-group-item">Vegetables <Button  handleOnClick={handleOnClick}/></li>
      <li className="list-group-item">Fruits <Button handleOnClick={handleOnClick} /></li>
      <li className="list-group-item">Roti <Button /></li>
      <li className="list-group-item">salad <Button /></li>
      <li className="list-group-item">Milk <Button /></li>
    </ul>
    </Container>

    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus laudantium provident consectetur itaque dolores minus. Facere beatae accusamus cum.</p>
    </Container>
    </>
  )
}

export default App;
