// import { useState } from "react";
import { useRef, useContext } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { TodoItemContext } from "../store/todo-item-context";

function AddTodo() {
  const todoNameElement = useRef();
  const todoDueElement = useRef();

  //using context 
  const { addNewItem } = useContext(TodoItemContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); // to prevent default action of Form
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDueElement.current.value;
    const formattedDueDate = formatDateToIndianStyle(todoDueDate);
    todoNameElement.current.value = "";
    todoDueElement.current.value = "";
    addNewItem(todoName, formattedDueDate);
  };

  // Function to convert date to Indian style (DD-MM-YYYY) using toLocaleDateString()
  const formatDateToIndianStyle = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const indianDate = date.toLocaleDateString("en-IN", options); // 'en-IN' locale for Indian format
    return indianDate;
  };

  // function to get today's date , so that we can use it to prevent date input before today's date
  function getTodayDate() {
    const today = new Date(); // Get current date
    const year = today.getFullYear(); // Get full year
    const month = ("0" + (today.getMonth() + 1)).slice(-2); // Get month, ensuring two digits
    const day = ("0" + today.getDate()).slice(-2); // Get day, ensuring two digits

    return `${year}-${month}-${day}`; // Return formatted date as string
  }

  const todayDate = getTodayDate();

  return (
    <div className="container text-center">
      <form className="row custom-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // onChange={handleNameChange}
            // value={todoName}
            placeholder="Enter Todo"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueElement}
            // onChange={handleDueDateChange}
            // value={todoDueDate}
            min={todayDate}
          />
        </div>
        <div className="col-2">
          <button
            // type="submit"
            className="btn btn-success custom-btn"
          >
            <BiMessageAltAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
