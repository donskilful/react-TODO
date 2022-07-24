import { useState } from "react";
import { TodoType } from "../types/TodoType";

const useTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    // let todoToEdit = todos.filter(todo => todo.id === id)[0]
    // todoToEdit.text = text
    // let newTodos = todos.map(todo => {
    //   if (todo.id === id) {
    //     return todoToEdit
    //   }
    //   return todo
    // })
    // setTodos(newTodos)

    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text,
          };
        }
        return todo;
      })
    );
  };

  return { todos, addTodo, toggleCompleted, deleteTodo, editTodo };
};

export default useTodo;
