import React , {useState} from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    // let count=0;
    let [count,setCount]=useState(0); 

function incrementnumber(){
     count=count+1;
     setCount(count);
   //  document.querySelector('h1').innerHTML=`count is ${count}`;//DOM ko manipulate kr rha hai
//react kehta hai ki tumhe khud se DOM manipulate nhi krnaa
// react optimise way me DOM ko manipulate krta hai isliye hm ye kaam react ko sopp dete hai

}

function decrementnumber(){
     count=count-1;
      setCount(count);
   //  document.querySelector('h1').innerHTML=`count is ${count}`;//DOM ko manipulate kr rha hai
     
}

   return (<div className="first">
    <h1> count is :{count} </h1>
    <button onClick={incrementnumber}>Increment {count}</button>
    <button onClick={decrementnumber}>Decrement {count}</button>
  </div>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);
