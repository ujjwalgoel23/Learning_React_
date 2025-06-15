import React ,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client";

// background color changer
function Main(){
    const [color,setColor]=useState("black");
     
    //useEffect hook=>
        useEffect(()=>{
           document.body.style.backgroundColor=color;
        },[color]);
    
   return (
    <>
     <h1>Background Color Changer</h1>
     <div className="but">
        <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}> Red</button>
        <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button style={{backgroundColor:"orange"}}  onClick={()=>setColor("orange")}>Orange</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button style={{backgroundColor:"blue"}} onClick={ ()=>setColor("blue")}>Blue</button>
     </div>
    </>
   );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>); 