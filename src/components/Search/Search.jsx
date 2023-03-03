import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Products from "../Products";
import useSearch from "../../hooks/useSearch";

const Search = () => {
  const { setFilter } = useSearch();

  return (
    <div className="search">
      <div className="sidebar">
        <Sidebar setFilter={setFilter} />
      </div>

      <div className="topbar">
        <Topbar setFilter={setFilter} />
      </div>

      <div className="results">
        <Products />
      </div>
    </div>
  );
};

export default Search;
