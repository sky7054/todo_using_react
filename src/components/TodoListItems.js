import React from "react";

const TodoListItems = ({ items, setItems }) => {

    const deleteTask =({id})=>{
       setItems(items.filter((item)=> item.id !== id))
    }

    return(
        <div>
          {items.map((item) => {
           return <li className ="list-item" key={item.id}>
                <input 
                type="text" 
                className="list" 
                value={item.title} 
                onChange={(e)=>{e.preventDefault()}}
                 />
                 <button className="button-complete task-button" >
                    <i className="fa fa-check-circle"></i>
                 </button>

                 <button className="button-edit task-button">
                 <i className="fa-solid fa-pen-to-square"></i>
                 </button>

                 <button className="button-edit task-button" onClick={()=>deleteTask(item)}>
                 <i className="fa-solid fa-trash-can"></i>
                 </button>
            </li>
            })
        }
        </div>
       
    );
};

export default TodoListItems;