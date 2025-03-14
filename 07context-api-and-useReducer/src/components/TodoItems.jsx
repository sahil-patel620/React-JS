import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-item-context";

function TodoItems() {
  const {todoItems ,itemDeleteButton} = useContext(TodoItemContext);

  return (
    <>
      {todoItems.map((item ,idx) => (
        <TodoItem  key={idx} name={item.name} date={item.date} onDeleteClick={itemDeleteButton}></TodoItem>
      ))}
    </>
  );
}

export default TodoItems;
