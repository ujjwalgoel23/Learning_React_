import React, { useState ,useMemo } from "react";
import ReactDOM from "react-dom/client";

function Fibonacci(n){
    if(n<=1)
        return n;
    return Fibonacci(n-1)+Fibonacci(n-2);
}  

function App(){
    const [count,setcount]=useState(0);
    const [number,setnumber]=useState("");

const result = useMemo(() =>Fibonacci(number) , [number]);

    return (
     <>
      <h1> Counter is :{count} </h1>
      <button onClick={()=>setcount(count+1)}> Increment</button>
      <button onClick={()=>setcount(count-1)}> Decrement</button>
      <div>
        <h2>Fibonacci Number is : {result}</h2>
        <input type="number" value ={number} onChange={(e)=>setnumber(e.target.value)} /> 
      </div>
     </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

