import { Route, Routes } from "react-router-dom";
import { Fragment, useContext, useReducer, useState } from "react";
import ListProducts from "./components/ListProducts";
import CartItem from "./components/CartItem";
import publicRouter from "./router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ListSanpham from "./components/ListSanpham";
import DefaultLayout from "./DefaultLayout/DefaultLayout";

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
    <div className="container">
      <div className="row">
        <Routes>
          {publicRouter.map((route) => {
            // Khi route.layout = null => <></> thay vì defaultLayout
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : DefaultLayout
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
