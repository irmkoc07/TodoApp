import React, { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (newTodo) => {
    console.log(newTodo);
    setTodos((prev) => [...prev, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo) =>todo.id !==id));
  };


  const updateTodo = (id, updatedText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo,
      ),
    );
  };


  return (
    <TodoContext.Provider value={{ todoInput, setTodoInput, todos, addTodo,deleteTodo,updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;