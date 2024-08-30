import React from "react";
import { useContext } from "react";
import AppContext from "../provider/Context";
function SearchName() {
  const { searchName, setSearchName } = useContext(AppContext);

  return (
    <div style={{ textAlign: "center" }}>
      <input
         value={searchName || ''}
         onChange={(e) => setSearchName(e.target.value)}
         style={{ width: "80%", padding: "2px 5px" }}
            placeholder="Enter name search"
      />
    </div>
  );
}

export default SearchName;
