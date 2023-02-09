import React from "react";
import PriceRange from "../PriceRange";
import CategoriesBar from "../CategoriesBar";

const Sidebar = () => {
  return (
    <div className="pl-6">
      <PriceRange />
      <div className="bg-gray-200 px-6 py-2 mb-4 text-sm ">
        <CategoriesBar />
      </div>
    </div>
  );
};

export default Sidebar;
