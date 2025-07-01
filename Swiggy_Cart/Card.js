import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems=[
    {id:1,food:'pizza' ,Price:"200"},
    {id:2,food:'coke' ,Price:"2100"},
    {id:3,food:'gol-gappe' ,Price:"100"},
    {id:4,food:'vadapav' ,Price:"300"},
    {id:5,food:'french-fries' ,Price:"800"},
    {id:6,food:'momos' ,Price:"60"},
    {id:7,food:'burger' ,Price:"900"},
    {id:8,food:'idli' ,Price:"2400"},
    {id:9,food:'dosa' ,Price:"2900"},
    {id:10,food:'poha' ,Price:"5200"}

];

export default function Card(){
 
    
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
        {foodItems.map((value)=>{
            return(
                <div key={value.id}>
                   <FoodCart value={value}/>
                </div>
            )
        })}
        </div>
    )
}