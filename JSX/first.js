import React from "react";
import ReactDOM from "react-dom/client";


//JSX: stands for javascript XML
//iss code ko hm XML me bhe likh skte haii:
// const element2=React.createElement("h1",{className:"second",id:"id",style:{fontSize:"50px"}},"hello world");

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element2);

//XML me aase likhnge:->
const element=<h1>hello world</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(element);

 