import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "./features/counter/counterSlice";


function App(){
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return(
    <>
      <h1>Counter Readux toolkit</h1>

      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
 )
}

export default App;