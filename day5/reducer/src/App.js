import { Route, Routes } from "react-router-dom";
import {useContext, useReducer, useState} from 'react';
import ListProducts from "./components/ListProducts";
import CartItem from "./components/CartItem";

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
  // const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div className="container-fluid">
      <ListProducts/>
      <hr></hr>
      <CartItem/>
    </div>
  );
}

export default App;
