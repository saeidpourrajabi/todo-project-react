function App() {
  return (
    <div>
      <div className="grid grid-cols-2  bg-slate-100 p-4 ">
        <div className="header col-span-2 flex justify-around w-full p-6">
          <h1 className=" font-extrabold text-4xl">My Todo List (2)</h1>
          <select className=" w-40 rounded-lg p-2" name="" id="">
            <option value="">sort by</option>
            <option value="">sort by</option>
            <option value="">sort by</option>
          </select>
        </div>
        <div className="add-new flex flex-col  col-span-1 bg-red-400 p-6 gap-2 h-auto">
          <h2 className=" text-xl font-medium">Add New Todo</h2>
          <input
            type="text"
            className=" p-2 w-full rounded-md"
            placeholder="New Title ..."
          />
          <input
            type="text"
            className=" p-2 w-full rounded-md"
            placeholder="New Description ..."
          />
          <button className="w-full bg-blue-500 rounded-lg p-4">
            Add To List
          </button>
        </div>
        <div className="list col-span-1 p-6 flex flex-col gap-y-4">
          <div className="list-header flex justify-around py-6">
            <p>All</p>
            <p>Complited</p>
            <p>Open</p>
          </div>
          <div className="list-todo bg-white rounded-lg p-6 w-full">
            <div className=" flex justify-between border-b">
              <div className="flex flex-col flex-wrap">
                <p className=" font-medium">title</p>
                <p className="text-sm">desc</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span>🗑️</span>
                <input type="checkbox" />
              </div>
            </div>
            <p className="text-sm text-gray-400">date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
