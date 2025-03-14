import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  itemDeleteButton: () => {},
});

// pure function for reducer
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const itemDeleteButton = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{ todoItems, addNewItem, itemDeleteButton }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
