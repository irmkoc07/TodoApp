import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 mt-10">
          <h1 className="text-center text-3xl font-bold mb-6">Todo App</h1>

          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;