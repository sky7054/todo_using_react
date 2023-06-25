import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoFrom = ({ input, setInput, items, setItems, editTodo, setEditTodo}) => {

  const updateItem = (title, id, completed) =>{
    setItems(items.map((item) =>  {
      return item.id === id ? {title, id, completed} : item
         }))  
    
    setEditTodo("");

  };

  useEffect(() => {
        if(editTodo){
          setInput(editTodo.title);
        }
        else{
          setInput("")
        }
  }, [setInput,editTodo]);
   
    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const formSumbit = (e) =>{
        e.preventDefault();

        e.preventDefault();
        if(!input){
          alert("please write your task ");
          return;
        }
        else{
          setItems([...items,{id:uuidv4(),title:input,completed:false}]);
          setInput("");
          alert("your task successfully added");
        }
       

        if(!editTodo){
          setItems([...items,{id:uuidv4(),title:input, completed:false}]);
          setInput("");
        }
        else{
          updateItem(input, editTodo.id, editTodo.completed);
        }
       
    }

  return (
    <form onSubmit={formSumbit}>
        <input 
        type="text" 
        placeholder='What is the task today?' 
        className='task-input'
        value={input}
        onChange={inputChange}
        />
        <button className='button-add' title='add items' type = "submit" >{editTodo ? "Ok" : "Add" }</button>
    </form>
  )
}

export default TodoFrom;
