


function ListTodo() {
  return (
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
  )
}

export default ListTodo