import React from "react";
import ButtonLink from "../../ButtonLink/ButtonLink";
import bannerImg from "./banner.png";
const SecondaryBanner = () => {
  return (
    <div className="container flex justify-between items-center mx-auto px-20 bg-blue-500 w-full  ">
      <div className=" bg-lime-200">
        <h3 className="font-krona mb-4">
          Be Natural, <br /> be smart, <br /> be you <br />
        </h3>
        <ButtonLink path="/about" text="see more" />
      </div>
      <div className="ml-4">
        <img
          src={bannerImg}
          width="200"
          alt="Tooth brush and a paste laying on top of a green leaf"
          className="py-8"
        />
      </div>
    </div>
  );
};

export default SecondaryBanner;
