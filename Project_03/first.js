import React ,{useState ,useCallback, useEffect} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const [password,setpassword]=useState("");
    const [length,setlength]=useState(10);
    const [numberchanged , setnumberchanged]=useState(false);
    const [charchanged , setcharchanged]=useState(false);

    const generatepassword =useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberchanged) 
             str+="0123456789";
        if(charchanged) 
            str+="+-)(#!@~`&^%{}";

        let pass="";

        for(let i=0;i<length;i++){
            pass+= str[Math.floor(Math.random()*str.length)];
        }
        setpassword(pass);
    },[length,charchanged,numberchanged]);
    

     useEffect(()=>{
        generatepassword();
     },[length,numberchanged,charchanged]); //we can also pass " [generatedpassword]" in dependency array

    return (
        <>
        <h1> {password}</h1>
        <div className="second">
            <input type="range" min={5} max={35} value={length} onChange={(e)=>setlength(e.target.value)} ></input>
            <label> length({length})</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charchanged} onChange={()=>setcharchanged(!charchanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<PasswordGenerator/>); 