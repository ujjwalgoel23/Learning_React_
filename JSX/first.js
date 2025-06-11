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
          
// // REACT COMPONENT=>
//    //1. function based component=>
//           function greet(){
//                return <h1>hello world</h1>
//           }
//      const element=greet();
//      const root=ReactDOM.createRoot(document.getElementById("root"));
//      // root.render(element);  //or
//      root.render(greet());
  
// element aase access kr skte ahai JSX meh=.
//   function Greet(){
//      return <h1>Ram ram bhaiya ji</h1>
//   };

//   const element1=greet();
//  const root1=ReactDOM.createRoot(document.getElementById('root'));
//      root1.render(element1);
     //another method to call greet() in JSX=>
       //   const element2=<greet/>;// here the function is not call actually , JSX said that the first letter of the word is always capital 

     function Greet(props){
          return props.name; 
     }
         const element2=<Greet name="ujjwal" age="20"/>
          const root1=ReactDOM.createRoot(document.getElementById('root'));
          root1.render(element2);  

          