import { Route, Routes } from "react-router-dom";
import {useContext} from 'react';
import AppContext from "./provider/Context";
import HomePage from "./components/HomePage";

function App() {
  
  return (
    <div className="container-fluid">
            <HomePage/>
            <hr></hr>
        <h4 style={{textAlign: 'center'}}>Copyright : He******</h4>
    </div>
  );
}

export default App;
