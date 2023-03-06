import React from "react";
import bannerImg from "./banner.png";

const HeaderBanner = () => {
  return (
    <div className="mx-6 mb-4 ">
      <div className="  flex justify-between items-center  md:px-20 bg-green w-full   ">
        <div>
          <h3 className="font-krona mb-4 text-white text-sm">
            Be Natural, <br /> be smart, <br /> be you <br />
          </h3>
        </div>
        <div className="ml-4">
          <img
            src={bannerImg}
            width="100"
            alt="Tooth brush and a paste laying on top of a green leaf"
            className="py-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
