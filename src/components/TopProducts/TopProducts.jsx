import React from "react";
import SectionTitle from "../SectionTitle";
import ButtonLink from "../ButtonLink";
import SecondaryBanner from "../SecondaryBanner/SecondaryBanner";

const TopProducts = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex bg-blue-200 items-center justify-between">
          <SectionTitle text="Top Products" />
          <ButtonLink path="/about" text="see more" />
        </div>
        <div className="h-80 bg-orange-400"></div>
      </div>
      <SecondaryBanner />
    </div>
  );
};

export default TopProducts;
