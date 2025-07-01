 import {useState} from "react";
 import {useDispatch} from "react-redux";
 import {Decrement,Increment,CustomIncreaser} from "./Slicer1";


export default function CustomCounter(){

const [number,setNumber]=useState("");
const dispatch=useDispatch();

  function handleClick(){
    dispatchEvent(CustomIncreaser(Number(number)));
    setNumber("");
  }
  return (
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>;
    <button onClick={handleClick}>Submit</button>
    </>
  )
}