import { useState } from "react";
import './style.css';
 
export default function Todo() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
   
    function handleAddItem() {
        if (input.trim() !== "") {
            setItems([...items, input.trim()]);
            setInput("");
        }
    }

    function clearAll() {
        setItems([]);
    }

   function removeItem(indexToRemove) {
  const updatedItems = items.filter((item, index) => index !== indexToRemove);
  setItems(updatedItems);
}


    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            
            <div className="input-container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add Task"/>
                <button onClick={ ()=>{handleAddItem()}}>Add</button>
            </div>
            
            <div className="todo-items">
                {items.map((item,index) => (
                    <div key={index} className="todo-item">
                        <div className="item-text">{item}</div> 
                        <button className="clear-btn1">Edit</button>
                         <button className="clear-btn1" onClick={() => removeItem(index)}>Remove</button>
                    </div>
                ))}
            </div>
            
            
            <div className="footer">
                <div className="task-count">You have {items.length} pending tasks</div>
                <button className="clear-btn" onClick={clearAll}>Clear All</button>
            </div>
        </div>
    );
}




