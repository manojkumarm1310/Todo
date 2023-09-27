import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todolist()
{
  const [inputText,setInputText]=useState("");
  const [newList,setNewList]=useState([]);
  function handleChange(event)
  {
    const newInput=event.target.value;
    setInputText(newInput);
  }
  function handleClick()
  {
    setNewList(prev=>{
      return [...prev,inputText];
    })
    setInputText(""); 
  }
  function deleteItem(id)
  {
   setNewList(newList.filter((newList,index)=>{return index!==id}))
  }  

  return (<div className="Container">
              <div className="inputBox">
                <input className="text" type="text" placeholder="Task"  onChange={handleChange} />
                <button className="addButton" type="submit" onClick={handleClick}>Add</button>
              </div>
                  {newList.map((todoitems,index)=>(<TodoItem id={index} key={index}  text={todoitems} onChecked={deleteItem}/>))}
          </div>)
}