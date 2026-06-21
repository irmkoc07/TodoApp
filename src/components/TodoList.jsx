import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="my-10 flex flex-col gap-10 max-w-md md:max-w-lg mx-auto">
      {todos.length === 0 && (
        <p className="text-center text-gray-500">
          No todos yet. Add one!
        </p>
      )}

      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      }
    </div>
  );
};

export default TodoList;