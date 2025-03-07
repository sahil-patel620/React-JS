import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", date: "07/03/2025" },
    { name: "Go to College", date: "07/03/2025" },
    { name: "Like my video", date: "Abhi kr do bhai" },
  ];

  return (
    <center>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} ></TodoItems>
    </center>
  );
}

export default App;
