import { useState } from "react";
import Container from "./components/Container";
import AppHeading from "./components/AppHeading";
import InputBox from "./components/InputBox";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) =>{
    if(event.key === "Enter" && event.target.value != ""  && event.target.value != " "){
        let newFoodItem = event.target.value;
        event.target.value ="";
        let newItems = [...foodItems, newFoodItem];
        setFoodItems(newItems);
    }
  }

 return (
  <>
  <Container>
    <AppHeading/>
    <InputBox handleKeyDown={onKeyDown}></InputBox>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
  </Container>
  </>
 )
}

export default App
