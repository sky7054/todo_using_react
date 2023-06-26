import Header from "./components/Header.js";
import TodoFrom from "./components/TodoFrom.js";
import TodoListItems from "./components/TodoListItems.js";
import './App.css';
import { useEffect, useState } from "react";


const App = () => {

  const initialState = JSON.parse(localStorage.getItem("items")) || [];
  const [input,setInput] = useState();
  const [items,setItems] = useState(initialState);
  const [editTodo,setEditTodo] = useState();


  useEffect(() =>{
    getTodoInfo();
   },[]);

   async function getTodoInfo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    setItems(json.slice(0,10));
   }

  useEffect(() =>{
    localStorage.setItem("items",JSON.stringify(items));
  },[items]) 
    

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
        <Header/>
        </div>
        <div>
        <TodoFrom
        input ={input}
        setInput ={setInput}
        items ={items}
        setItems = {setItems}
        editTodo ={editTodo} 
        setEditTodo ={setEditTodo}
        />
      </div>
      <div>
        <TodoListItems 
        items ={items} 
        setItems ={setItems} 
        setEditTodo ={setEditTodo}
        />
      </div>
      </div>
     
    </div>
  );
}

export default App;
