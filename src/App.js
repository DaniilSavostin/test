import { useEffect, useState, useCallback } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { v4 as uuidv4 } from "uuid";
import { TODO_KEY_IN_LS } from "./Util/constants";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todosFromLS = localStorage.getItem(TODO_KEY_IN_LS);
    const preparedTodos = todosFromLS ? JSON.parse(todosFromLS) : [];

    if (preparedTodos.length) {
      setTodoList(preparedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY_IN_LS, JSON.stringify(todoList));
  }, [todoList]);

  const addToList = useCallback((title) => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      status: false,
    };
    return setTodoList((prev) => [...prev, newToDo]);
  }, []);

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updStatusTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            status: !todo.status,
          };
        return todo;
      })
    );
  };

  const deleteAllToDo = useCallback(() => {
    setTodoList([]);
  }, []);

  return (
    <div className="container py-5">
      <Header addToList={addToList} />
      <Main
        todoList={todoList}
        deleteTodo={deleteTodo}
        updStatusTodo={updStatusTodo}
      />
      <Footer deleteAllToDo={deleteAllToDo} />
    </div>
  );
}

export { App };
