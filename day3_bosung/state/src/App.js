import { useState } from "react";
import Parent from "./component/Parent";
// import HomePage from "./components/HomePage";


// Link con của BrowserRouer
function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
      // tăng count lên 1 
      setCount(count + 1);
  }
  const handleDecrease = () => {
    if(count <= 0){
      return;
    }
    // tăng count lên 1 
    setCount(count - 1);
}
  return (
    <div className="container"> 
      {/* <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button> */}
      <Parent data={{count, setCount, handleIncrease, handleDecrease}}/>
    </div>
  );
}

export default App;
