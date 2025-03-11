import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick}) {
  return (
    <>
      {todoItems.map((item ,idx) => (
        <TodoItem  key={idx} name={item.name} date={item.date} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </>
  );
}

export default TodoItems;
