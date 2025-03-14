import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoItemContext } from "../store/todo-item-context";

const WelcomeMessage = () => {

  const {todoItems} = useContext(TodoItemContext)
  return todoItems.length === 0 && <h3 className={styles.welcome}>Enjoy Your Day</h3>;
};

export default WelcomeMessage;
