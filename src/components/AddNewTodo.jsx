import { useState } from "react";

function AddNewTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newTodo = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  col-span-1 p-6 gap-2 h-auto">
      <h2 className=" text-xl font-medium">Add New Todo</h2>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className=" p-2 w-full rounded-md"
        placeholder="New Title ..."
      />
      <input
        value={description}
        onChange={handleDescription}
        type="text"
        className=" p-2 w-full rounded-md"
        placeholder="New Description ..."
      />
      <button type="submit" className="w-full bg-blue-500 rounded-lg p-4">
        Add To List
      </button>
    </form>
  );
}

export default AddNewTodo;
