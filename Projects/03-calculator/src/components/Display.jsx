import styles from "./Display.module.css";
function Display({displayValue}){
    return(
        <input type="text" className={styles.inBox} value={displayValue} readOnly/>
    )
}

export default Display;