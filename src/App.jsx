import { useState } from "react";
import AddNewTodo from "./components/AddNewTodo";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id);
    setTodos(filteredTodos);
  };

  const handleComplitedTodo = (e) => {
    const todoIdc = Number(e.target.value);
    const newTodos = todos.map((t) =>
      t.id === todoIdc ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
  };

  let sortedTodos = todos;
  if (sortBy === "earliest")
    sortedTodos = [...todos].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy === "latest")
    sortedTodos = [...todos].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "compeleted")
    sortedTodos = [...todos].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div>
      <div className="grid grid-cols-2  bg-slate-100 p-4 ">
        <Header
          todos={todos}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
        <AddNewTodo setTodos={setTodos} />
        <ListTodo
          todos={sortedTodos}
          onDelete={handleDeleteTodo}
          onComplited={handleComplitedTodo}
        />
      </div>
    </div>
  );
}

export default App;
