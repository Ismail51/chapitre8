import { useState } from "react";

function App() {
  var [Count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{Count}</h2>
      <button onClick={()=>{setCount(Count+1)}}>+</button>
      <button onClick={()=>{setCount(Count-1)}}>-</button>
    </div>
  );
}

export default App;
