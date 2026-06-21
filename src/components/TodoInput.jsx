import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { todoInput, setTodoInput, addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todoInput);
    if (!todoInput.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todoInput,
    };

    addTodo(newTodo);
    setTodoInput("");
  };

  return (
    <form
      className="flex justify-center max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="border-b text-xl px-4 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500 mr-5 w-full"
        placeholder="Enter a Todo..."
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 text-xl"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;