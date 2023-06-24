import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoFrom = ({input,setInput,items,setItems}) => {
   
    const inputChange = (e) => {
        setInput(e.target.value);
    }

    const formSumbit = (e) =>{
        e.preventDefault();
        if(!input){
          alert("please write your task ");
        }
        else{
          setItems([...items,{id:uuidv4(),title:input,completed:false}]);
          setInput("");
          alert("your task successfully added");
        }
       
    }

  return (
    <form onSubmit={formSumbit}>
        <input 
        type="text" 
        placeholder='Whats your task today?' 
        className='task-input'
        value={input}
        onChange={inputChange}
        

        />
        <button className='button-add' title='add items'>Add</button>
    </form>
  )
}

export default TodoFrom;
