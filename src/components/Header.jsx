function Header({ todos, sortBy, onSort }) {
  return (
    <div className="col-span-2 flex justify-around w-full p-6">
      <h1 className=" font-extrabold text-4xl">
        My Todo List ({todos.length})
      </h1>
      <select
        className=" w-40 rounded-lg p-2"
        name=""
        id=""
        value={sortBy}
        onChange={onSort}>
        <option value="latest">sort by latest</option>
        <option value="earliest">sort by earliest</option>
        <option value="compeleted">sort by completed</option>
      </select>
    </div>
  );
}

export default Header;
