import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";

const Search = () => {
  return (
    <>
      <HeaderBanner />
      <div className="search">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="topbar">topbar</div>

        <div className="results">results</div>
      </div>
    </>
  );
};

export default Search;
