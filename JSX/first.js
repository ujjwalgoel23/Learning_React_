import React from "react";
import ReactDOM from "react-dom/client";


// //JSX: stands for javascript XML
// //iss code ko hm XML me bhe likh skte haii:
// // const element2=React.createElement("h1",{className:"second",id:"id",style:{fontSize:"50px"}},"hello world");

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(element2);

// //XML me aase likhnge:->(aab se aase he likhne)->    
// const element0=<h1>hello world</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(element0);

//  // craeting multiplel element in 'root' div using jsx
//  //using <div>method=>
//       const element=( <div>
//                     <h1>hello</h1>
//                     <h1>world</h1>
//                     </div>
//       )        
// //without using div=>
//      const element1=( <>
//                     <h1>hello</h1>
//                      <h1>world</h1>
//                     </>
//       )
          
// REACT COMPONENT=>
   //1. function based component=>
          function greet(){
               return <h1>hello world</h1>
          }
     const element=greet();
     const root=ReactDOM.createRoot(document.getElementById("root"));
     // root.render(element);  //or
     root.render(greet());
  
