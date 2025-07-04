import React from "react";
import ReactDOM from "react-dom/client";
import Todo from "./todo";


function App(){
    return(
        <>
        <Todo/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);