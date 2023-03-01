import React, { createContext } from "react";
import { initialSearchState } from "./search-state";

const searchStateContext = createContext("searchState");

const SearchProvider = ({ children }) => {
  return (
    <searchStateContext.Provider value={initialSearchState}>
      {children}
    </searchStateContext.Provider>
  );
};

export default SearchProvider;
