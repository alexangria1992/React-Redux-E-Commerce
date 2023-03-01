import React from "react";
import Sidebar from "../components/Sidebar";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import Topbar from "../components/Topbar";
import useSearch from "../hooks/useSearch";
import Products from "../components/Products";
import SearchProvider from "../state/search-context";

const Search = () => {
  const [products, setFilter] = useSearch();

  // console.log(products);

  return (
    <>
      <HeaderBanner />
      <SearchProvider>
        <div className="search">
          <div className="sidebar">
            <Sidebar setFilter={setFilter} />
          </div>

          <div className="topbar">
            <Topbar setFilter={setFilter} />
          </div>

          <div className="results">
            <Products products={products} />
          </div>
        </div>
      </SearchProvider>
    </>
  );
};

export default Search;
