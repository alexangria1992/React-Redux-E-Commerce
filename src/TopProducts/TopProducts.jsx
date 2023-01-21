import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import SectionTitle from "../SectionTitle";

const TopProducts = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex bg-blue-200 items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink path="/about" text="see more" />
        </div>
        <div className="h-80 bg-orange-400"></div>
      </div>
    </>
  );
};

export default TopProducts;
