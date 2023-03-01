import React from "react";
import Dropdown from "../Dropdown";
import { BRANDS } from "../../constants/brands";
import { SORTING } from "../../constants/sorting";

const Topbar = ({ setFilter }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFilter(name, value);
  };
  return (
    <div className="flex space-x-4">
      <Dropdown
        type="brand"
        values={["All", ...BRANDS]}
        onChange={handleOnChange}
      />
      <Dropdown type="sort " values={SORTING} onChange={handleOnChange} />
    </div>
  );
};

export default Topbar;
