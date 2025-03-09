import "bootstrap/dist/css/bootstrap.min.css"
import Display from "./components/Display";
import CustomBtn from "./components/CustomBtn";
import styles from "./App.module.css";
function App() {
  return (
   <div className={styles.calculatorBox}>
    <Display></Display>
    <CustomBtn></CustomBtn>
   </div>
  )
}

export default App
