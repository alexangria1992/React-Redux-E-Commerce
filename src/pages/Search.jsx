import React from "react";
import HeaderBanner from "../components/HeaderBanner/HeaderBanner";
import Search from "../components/Search/Search";

import SearchProvider from "../state/search-context";

const SearchPage = () => {
  return (
    <>
      <HeaderBanner />
      <SearchProvider>
        <Search />
      </SearchProvider>
    </>
  );
};

export default SearchPage;
