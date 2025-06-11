import React from "react";
import ReactDOM from "react-dom/client";

function Card(props){
    return (
       <div style={{border:"2px solid black",padding:"2px"}}>
        <img src="https://factori.com/assets/img/tshirt1.jpeg" height="200px" width="200px"/>
          <div style={{textAlign:"center"}}>
            <h2>{props.cloth}</h2>
            <h1>{props.offer}</h1>
            <h1>Shop Now</h1>
          </div>
       </div>
    )   
};

const arr=[{cloth:"Skirt",offer:"60-80%off"},{cloth:"Jeans",offer:"70-80%off"},{cloth:"Kurta",offer:"40-80%off"},{cloth:"Pant",offer:"10-80%off"},{cloth:"Shoes",offer:"30-80%off"},{cloth:"Casual",offer:"30-50%off"},{cloth:"T-shirt",offer:"30-70%off"},{cloth:"Pant",offer:"20-60%off"}]

function App(){
    return (
   <div style={{ display:"flex", gap:"10px" , flexWrap:"wrap"}}>
  
     {
      arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
     }
   </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

