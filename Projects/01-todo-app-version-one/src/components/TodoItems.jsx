import TodoItem from "./TodoItem";

function TodoItems({ todoItems  }) {
  return (
    <>
      {todoItems.map((item ,idx) => (
        <TodoItem  key={idx} name={item.name} date={item.date}></TodoItem>
      ))}
    </>
  );
}

export default TodoItems;
