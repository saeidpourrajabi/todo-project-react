import AddNewTodo from "./components/AddNewTodo";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";



function App() {
  return (
    <div>
      <div className="grid grid-cols-2  bg-slate-100 p-4 ">
        <Header/>
        <AddNewTodo/>
        <ListTodo/>
      </div>
    </div>
  );
}

export default App;
