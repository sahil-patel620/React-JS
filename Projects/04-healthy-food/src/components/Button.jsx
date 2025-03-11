import styles from "./Button.module.css";

function Button({handleOnClick}){
    
    return <button className={styles.btn} onClick={handleOnClick}>Buy</button>
}

export default Button;