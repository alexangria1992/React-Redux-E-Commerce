import React from "react";
import InformationCircle from "../../Icons/InformationCircle";

const BenefitsItem = ({ item }) => {
  return (
    <div className="flex  bg-violet-300 flex-1">
      <div className="mr-4">
        <InformationCircle />
      </div>
      <div className="p-4 bg-green-300">
        <h5 className="font-krona text-sm">{item.title}</h5>
        <p className="text-xs">{item.text}</p>
      </div>
    </div>
  );
};

export default BenefitsItem;
