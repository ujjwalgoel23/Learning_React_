import React from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    let count=0;
   return (<div className="first">
    <h1> count is :{count} </h1>
    <button>Increment</button>
    <button>Decrement</button>
  </div>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);
