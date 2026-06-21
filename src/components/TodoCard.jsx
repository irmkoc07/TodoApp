import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCard = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

const handleCancel=()=>{
  setEditId(null);
  setEditText("");
};

const handleUpdate = () => {
  if (!editText.trim()) return;

  updateTodo(todo.id, editText);

  setEditId(null);
  setEditText("");
};

 return (
  <div className="bg-blue-100 hover:bg-blue-300/70 rounded-xl px-5 py-4 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02] border border-blue-200">
    {editId !== todo.id ? (
      <>
        <p className="text-xl font-bold w-fit border-b-2 max-w-full wrap-break-word">
          {todo.text}
        </p>
        <div className="flex justify-end gap-4 my-2">
          <button
            className="px-4 py-1 bg-yellow-400 font-bold rounded text-md hover:bg-yellow-600 hover:text-white transition-colors duration-500 shadow-md shadow-white hover:shadow-black"
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
          <button
            className="px-4 py-1 bg-red-400 font-bold rounded text-md hover:bg-red-600 hover:text-white transition-colors duration-500 shadow-md shadow-white hover:shadow-black"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </>
    ) : (
      <>
<input
  type="text"
  value={editText}
  className="border-b bg-white px-3 py-1 text-lg rounded w-full focus:ring-2 focus:ring-black outline-none"
  onChange={(e) => setEditText(e.target.value)}
/>
        <div className="flex justify-end gap-4 my-2">
          <button
            className="px-4 py-1 bg-yellow-400 font-bold rounded text-md hover:bg-yellow-600 hover:text-white transition-colors duration-500 shadow-md shadow-white hover:shadow-black"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="px-4 py-1 bg-gray-700 font-bold rounded text-md hover:bg-gray-700 hover:text-white transition-colors duration-500 shadow-md shadow-white hover:shadow-black"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </> 
    )}
  </div>
);}

export default TodoCard;