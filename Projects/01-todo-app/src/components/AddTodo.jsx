import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    const formattedDueDate = formatDateToIndianStyle(todoDueDate);
    onNewItem(todoName, formattedDueDate);
    setTodoName("");
    setTodoDueDate("");
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
      <div className="row custom-row">
        <div className="col-6">
          <input
            type="text"
            onChange={handleNameChange}
            value={todoName}
            placeholder="Enter Todo"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDueDateChange}
            value={todoDueDate}
            min={todayDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success custom-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
