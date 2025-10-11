import React, { useState } from 'react'

const Todo = () => {
  const [task, setTask]= useState("");
  const [tasks, setTasks]= useState([
    "Play games",
    "Learn React",
    "Learn JS"
  ]);

  const handleAdd = () =>{
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
    setTask("");
  };
  const handleremove = (i)=>{
    console.log(tasks.filter((task, j) => i!=j));
    setTasks(tasks.filter((task, j) => i!=j));
  }

  return (
    <>
    <div className='todo-app'>
        <input type="text" placeholder='What are you gonna do?' value={task} onChange={(e)=> setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {tasks.map((task,i) => {
            return(
            <li key ={i}>{task} <button className="delete-btn" onClick={() => handleremove(i)}>&#10005;</button></li>);
          })}
            
            
        </ul>
    </div>
    </>
    
  )
}

export default Todo