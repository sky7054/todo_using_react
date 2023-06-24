import Header from "./components/Header.js";
import TodoFrom from "./components/TodoFrom.js";
import TodoListItems from "./components/TodoListItems.js";
import './App.css';
import { useState } from "react";


const App = () => {

  const [input,setInput] = useState();
  const [items,setItems] = useState([]);

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
        />
      </div>
      <div>
        <TodoListItems items ={items} setItems ={setItems} />
      </div>
      </div>
     
    </div>
  );
}

export default App;
