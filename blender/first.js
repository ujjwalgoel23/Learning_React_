
import React from "react";
import ReactDOM from "react-dom/client";


// const element=React.createElement("h1",{},"hello world");
// const root=ReactDOM.cre ateRoot(document.getElementById("root"));
// root.render(element);

// // creating  a element with id name and classname:-
// const element1=React.createElement("h1",{className:"first",id:"fid"},"hello world");
// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(element1);

// // //also apply css on it
// const element2=React.createElement("h1",{className:"second",id:"id",style:{fontSize:"50px"}},"hello world");
// const root2=ReactDOM.createRoot(document.getElementById("root"));
// root2.render(element2);

// jaise hmne yha pr 3 baar render kiye hai toh actually screen pr 3rd wala he show hoga kyuki render krne se phle voo saara data remove ho jata hai automatically
//agar ye tino data renderkrane hai ek sath he page me toh hm ek div bna kr or uss div ko root me render kra denge like this--->

const element=React.createElement("h1",{},"hello world");
const element1=React.createElement("h1",{className:"first",id:"fid"},"hello world");
const element2=React.createElement("h1",{className:"second",id:"id",style:{fontSize:"50px"}},"hello world");
const div1=React.createElement('div',{},[element,element1,element2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);

//YE CODE AAB KAAM NHI KREGA KYUKI HMNE HTML SE CDN LINKS HTAA DEYE toh aab hme module import krane pdnge
  