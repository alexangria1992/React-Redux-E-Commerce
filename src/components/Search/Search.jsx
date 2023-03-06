import React from "react";
import Sidebar from "../Sidebar";
import Products from "../Products";
import useSearch from "../../hooks/useSearch";
import Loader from "../Loader";

const Search = () => {
  const { isLoading } = useSearch();
  return (
    <div className="search">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="results">
        {isLoading ? <Loader classes="my-4" /> : <Products />}
      </div>
    </div>
  );
};

export default Search;
