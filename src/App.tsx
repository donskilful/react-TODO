import React, { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import useTodo from "./hooks/useTodo";

function App() {
  const [todoInput, setTodoInput] = useState<string>("");
  const { todos, addTodo, deleteTodo, toggleCompleted } = useTodo();

  const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.currentTarget.value);
  };

  const addTodoItem = (e: FormEvent) => {
    e.preventDefault();
    addTodo({
      id: Math.random(),
      completed: false,
      createdAt: new Date(),
      text: todoInput,
    });
  };

  return (
    <div className="app">
      <form onSubmit={addTodoItem}>
        <input
          type="text"
          id="todoInput"
          value={todoInput}
          onChange={handleTodoInputChange}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.completed ? {
              textDecoration: "line-through",
            } : {}}
          >
            {todo.text}
            <button onClick={() => toggleCompleted(todo.id)}>
              Toggle Completed
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

