import {useContext, useState } from "react";
import Content from "./components/Content";
import MyContext from "./components/provider/Context";
import LearnUseEffect from "./components/LearnUseEffect";
// todo list
function App() {
  // Nhận giá trị từ provider
  const hello = "hello world";
  const {count, setCount}= useContext(MyContext);

  console.log(count);
  const handleIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div className="container-fluid">
      {/* {count}
      <hr></hr>
      <button onClick={handleIncrease}>tăng</button>
      <hr></hr>
      <Content hello={hello}/> */}
      <LearnUseEffect/>
    </div>
  );
}

export default App;
