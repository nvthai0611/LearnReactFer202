import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./provider/Context";
import HomePage from "./components/HomePage";
import GradeDetail from "./components/GradeDetail";
import ListStudent from "./components/ListStudent";
import SearchName from "./components/SearchName";
import SearchNavbar from "./components/SearchNavbar";
import Count from "./components/Counter/Count";

function App() {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <h1 style={{ textAlign: "center" }}>Student management</h1>
        <div className="col-md-12">
          <SearchName />
        </div>
        <div className="col-md-3">
          <SearchNavbar />
        </div>
        <div className="col-md-9">
           <Routes>
              <Route path="/" element={<ListStudent/>}/>
              <Route path="/student" element={<ListStudent/>}/>
              <Route path="/student/:stdId" element={<GradeDetail/>}/>
           </Routes>
        </div>
      </div>
      <hr></hr>
      <h4 style={{ textAlign: "center" }}>Copyright : He******</h4> */}
      <Count/>
    </div>
  );
}

export default App;
