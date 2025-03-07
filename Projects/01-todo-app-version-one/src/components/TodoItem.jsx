function TodoItem({ name, date }) {
  return (
    <div className="container ">
      <div className="row custom-row">
        <div className="col-6 items-container" >{name}</div>
        <div className="col-4 items-container">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
