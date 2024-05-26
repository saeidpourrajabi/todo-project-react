function ListTodo({ todos, onDelete, onComplited }) {
  const allTodos = todos.length;
  const completedTodos = todos.filter((t) => t.completed).length;
  const unCompletedTodos = allTodos - completedTodos;
  if (!allTodos) return <h2>No Todos has already been added.</h2>;
  return (
    <div>
      <div className=" flex justify-around py-6">
        <p>
          All <span className="bg-slate-500 rounded-full p-1">{allTodos}</span>
        </p>
        <p>
          Complited{" "}
          <span className="bg-slate-500 rounded-full p-1">
            {completedTodos}
          </span>
        </p>
        <p>
          Open{" "}
          <span className="bg-slate-500 rounded-full p-1">
            {unCompletedTodos}
          </span>
        </p>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onCompleted={onComplited}
        />
      ))}
    </div>
  );
}

export default ListTodo;

function TodoItem({ todo, onDelete, onCompleted }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="col-span-1 p-6 flex flex-col gap-y-4">
      <div className=" bg-white rounded-lg p-6 w-full">
        <div className=" flex justify-between border-b">
          <div className="flex flex-col flex-wrap">
            <p className=" font-medium">{todo.title}</p>
            <p className="text-sm">{todo.description}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="cursor-pointer" onClick={() => onDelete(todo.id)}>
              🗑️
            </span>
            <input
              id={todo.id}
              name={todo.id}
              value={todo.id}
              onChange={onCompleted}
              type="checkbox"
            />
          </div>
        </div>
        <p className="text-sm text-gray-400">
          {new Date(todo.createdAt).toLocaleDateString("en-US", options)}
        </p>
      </div>
    </div>
  );
}
