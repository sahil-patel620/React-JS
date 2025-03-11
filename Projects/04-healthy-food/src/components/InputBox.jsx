import styles from "./InputBox.module.css";
function InputBox({handleKeyDown}) {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here "
      className={styles.inputStyle}
      onKeyDown={handleKeyDown}
    />
  );
}

export default InputBox;
