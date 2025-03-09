import styles from "./CustomBtn.module.css"

function CustomBtn() {
  const btnName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return(
    <div  className={styles.btnContainer}>
        {btnName.map((buttonName)=> (<button className={styles.btn}>{buttonName}</button>))}
    </div>
  )
}

export default CustomBtn;
