import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
// import { useState } from "react";
import TodoItemContextProvider from "./store/todo-item-context";

function App() {
  return (
    <TodoItemContextProvider>
      <center>
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
