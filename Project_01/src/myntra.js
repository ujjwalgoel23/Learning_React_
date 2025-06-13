import React ,{useState}  from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy";

function App(){
  let [A,setA]=useState(arr);

   function sortarray(){ 
   A.sort((a,b)=>a.price-b.price);
   setA([...A]);//duplicate array bnaya hai kyuki uska reference alag hoga
   }

   function priceabove499(){
   const B=arr.filter((value)=>value.price>499);
   setA(B);
   }


    return ( <>
      <Header/>
      <button onClick ={sortarray}>Sort by Price</button>
      <button onClick={priceabove499}>Price Above 499</button>
   <div className="middle" style={{ display:"flex", gap:"10px" , flexWrap:"wrap"}}>
     {
      A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
     }
   </div>
    <Footer/>
   </>
    )
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

