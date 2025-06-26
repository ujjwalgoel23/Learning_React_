import React, { useState,useRef } from "react";
import ReactDOM from "react-dom/client";

function Stopwatch(){
    const [time,setTime]=useState(0);
    const [run,setrun]=useState(false);

  const intervalRef=useRef(null);
    function start(){
        if(!run){
        intervalRef.current= setInterval(() => {
            setTime(prevtime=>prevtime+1);
        }, 1000);
        setrun(true);
    }
    }

    function stop(){
        if(run){
     clearInterval(intervalRef.current);
     intervalRef.current=null;
     setrun(false);
    }
}

    function reset(){
      clearInterval(intervalRef.current);
     intervalRef.current=null;
     setTime(0);
    }
    return (
        <>
        <h1>Stowatch is: {time}</h1>
        <button onClick={start}>Start</button>
        
        <button onClick={stop}>Stop</button>
        
        <button onClick={reset}>Reset</button>
        
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>);
