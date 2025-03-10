import styles from "./InputBox.module.css";
function InputBox() {
  function handleOnChange(event) {
    console.log(event.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Enter any items "
      className={styles.inputStyle}
      onChange={(event) => handleOnChange(event)}
    />
  );
}

export default InputBox;
