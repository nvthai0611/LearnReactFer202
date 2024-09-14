import { Route, Routes } from "react-router-dom";
import { Fragment, useContext, useEffect, useReducer, useRef, useState } from "react";
import ListProducts from "./components/ListProducts";
import CartItem from "./components/CartItem";
import publicRouter from "./router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ListSanpham from "./components/ListSanpham";
import DefaultLayout from "./DefaultLayout/DefaultLayout";
import Count from "./Counter/Count";
// // Khai báo initState
// const initState = 0;

// // Khai báo action
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// // Khai báo reducer
// const reducer = (state, action) => {
//   console.log("reducer bắt đầu chạy");
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//       default:
//         throw new Error("Invalid action");
//   }
// }
function App() {
  const countRef = useRef(0);
  const inputRef = useRef(null);
  console.log(inputRef);
  const obj = {
    current: 0,
  };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // stale closure
  // useEffect(() => {
  //   setInterval(() => {
  //     // countRef.current = countRef.current + 1;
  //     // console.log(countRef.current);
  //     setCount(prev => prev + 1);
  //     console.log(count);
  //   }, 1000);
  // }, []);
  return (
    <div className="container">
      {/* <button onClick={handleClick}>Click</button> */}
      <input type="text" ref={inputRef}/>
    </div>
  );
}

export default App;
