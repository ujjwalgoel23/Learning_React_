import React from "react";
import ReactDOM from "react-dom/client";
import Counting from './Counting'; 
import { Provider } from "react-redux";
import stores from "./Stores";
import CustomCounter from "./CustomCounter";

function App(){
    return (
        <Provider store={stores}>
             <Counting/>
             <br></br>
             <br></br>
             <br></br>
             <CustomCounter/>
        </Provider>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

