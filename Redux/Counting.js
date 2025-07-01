import { useDispatch, useSelector } from "react-redux"; 
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting() {
  const counter = useSelector((state) => state.slice1.count); // ✅ fixed 'State'
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
}
