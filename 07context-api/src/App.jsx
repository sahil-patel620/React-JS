import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemContext } from "./store/todo-item-context";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDueDate },
    ]);
  };

  const itemDeleteButton = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName); // new object without Todo of "todoItemName" will be created  or (delete todo of name same as "todoItemName")
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemContext.Provider
      value={{ todoItems, addNewItem, itemDeleteButton }}
    >
      <center>
        <AppName />
        <AddTodo />
        <WelcomeMessage/>
        <TodoItems />
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
