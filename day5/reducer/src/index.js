import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./provider/AppProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MemoCheck from "./Memo/MemoCheck";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppProvider>
      <MemoCheck />
    </AppProvider>
  </Router>
);
