import React from "react";

const TodoListItems = ({ items, setItems,  setEditTodo }) => {

    const checkTask = (item) =>{
        setItems(
           items.map((element)=>{
            if(element.id === item.id){
                return {...element, completed: !element.completed}
            }
            else{
                return element;
            }
           })
        );
    };


    
    const deleteTask =({ id })=>{
       setItems(items.filter((item)=> item.id !== id))
       alert("your task successfully deleted");
    };

    const editTask = ({ id })=>{
       
        const task =  items.find((item)=> {
            return item.id === id;
        });
        setEditTodo(task);

    };

    return(
        <div>
          {items.map((item) => {
             return <li className ="list-item" key={item.id}>
                <input 
                type="text" 
                className={`list ${item.completed ? "complete" : ""}`}
                value={item.title} 
                onChange={(e)=>{e.preventDefault()}}
                 />
                 <button className="button-complete task-button" onClick={() => checkTask(item)} >
                    <i className="fa fa-check-circle"></i>
                 </button>

                 <button className="button-edit task-button" onClick={()=> editTask(item)}>
                 <i className="fa-solid fa-pen-to-square"></i>
                 </button>

                 <button className="button-edit task-button" onClick={()=> deleteTask(item)}>
                 <i className="fa-solid fa-trash-can"></i>
                 </button>
            </li>
            })
        }
        </div>
       
    );
};

export default TodoListItems;