import React from "react";
import PriceRange from "../PriceRange";
import CategoriesBar from "../CategoriesBar";
import Dropdown from "../Dropdown";
import { BRANDS } from "../../constants/brands";
// import { useSearchState } from "../../state/search-context";
import { setFilter } from "../../state/actionCreators";
import { useSearchState } from "../../state/search-context";

const Sidebar = () => {
  const [, dispatch] = useSearchState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFilter(name, value);
  };
  return (
    <div className="pl-6">
      <PriceRange />
      <Dropdown
        type="brand"
        values={["all", ...BRANDS]}
        onChange={handleOnChange}
      />
      {/* <button onClick={update}>Update</button> */}
      <div className="bg-gray-200 px-6 py-2 mb-4 text-sm ">
        <CategoriesBar setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Sidebar;
