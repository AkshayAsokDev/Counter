import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App" 
    style={{
      padding : "10px"
    }}
    >
      <h1>Counter App</h1>
      <p>{`Count: ${count}`}</p>
      <button style={{ padding : '5px', margin : "3px"}} onClick={() => {
        setCount(count+1);
      }} >Increment</button>
      <button style={{ padding : '5px', margin : "3px"}} onClick={() => {
        setCount(count-1);
      }} >Decrement</button>
    </div>
  );
}

export default App;
