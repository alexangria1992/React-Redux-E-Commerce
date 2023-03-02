import React from "react";
import PriceRange from "../PriceRange";
import CategoriesBar from "../CategoriesBar";
// import { useSearchState } from "../../state/search-context";

const Sidebar = ({ setFilter }) => {
  // const [{ products }, dispatch] = useSearchState();
  // console.log({ products });

  // const update = () => {
  //   dispatch({
  //     type: "setProducts",
  //     payload: ["a", "b"],
  //   });
  // };

  return (
    <div className="pl-6">
      <PriceRange />
      {/* <button onClick={update}>Update</button> */}
      <div className="bg-gray-200 px-6 py-2 mb-4 text-sm ">
        <CategoriesBar setFilter={setFilter} />
      </div>
    </div>
  );
};

export default Sidebar;
