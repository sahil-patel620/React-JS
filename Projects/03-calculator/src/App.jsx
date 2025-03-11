import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display";
import CustomBtn from "./components/CustomBtn";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) =>{
    if(buttonText === 'C'){
      setCalVal("");
    }else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
       const newCalVal = calVal + buttonText;
       setCalVal(newCalVal);
    }
  }
  return (
   <div className={styles.calculatorBox}>
    <Display displayValue={calVal}></Display>
    <CustomBtn onButtonClick={onButtonClick}></CustomBtn>
   </div>
  )
}

export default App;
