import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";


function App() {
  const [todoItems, setTodoItems] = useState([
  ]);

  const handleNewItem = (itemName, itemDueDate) => { 
    setTodoItems((currValue) =>[...currValue, { name: itemName, date: itemDueDate }]);
  };

  const handleDeleteButton = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item)=> item.name != todoItemName); // new object without Todo of "todoItemName" will be created  or (delete todo of name same as "todoItemName")
    setTodoItems(newTodoItems);
  }
  
  return (
    <center>
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteButton}></TodoItems>
    </center>
  );
}

export default App;
