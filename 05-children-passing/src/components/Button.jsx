import styles from "./Button.module.css";

function Button(){

    function handleOnClick(){
        console.log("item Bought");
    }
    return <button className={styles.btn} onClick={handleOnClick}>Buy</button>
}

export default Button;