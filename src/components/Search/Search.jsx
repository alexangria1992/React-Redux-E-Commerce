import React from "react";
import Sidebar from "../Sidebar";
import Products from "../Products";
// import useSearch from "../../hooks/useSearch";

const Search = () => {
  return (
    <div className="search">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="results">
        <Products />
      </div>
    </div>
  );
};

export default Search;
