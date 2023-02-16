function Main({ todoList, deleteTodo, updStatusTodo }) {
  return (
    <main className="py-5">
      <ul className="list-group">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span className={todo.status ? "text-decoration-line-through" : ""}>
              {todo.title}
            </span>
            <div>
              <button
                onClick={() => deleteTodo(todo.id)}
                type="button"
                className="btn btn-danger mx-2"
              >
                Delete
              </button>
              <button
                onClick={() => updStatusTodo(todo.id)}
                type="button"
                className="btn btn-success"
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
export { Main };
