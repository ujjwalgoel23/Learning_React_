import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice1";

const stores=configureStore({
    reducer:{
     slice1:CartReducer,
    }
})

export default stores;