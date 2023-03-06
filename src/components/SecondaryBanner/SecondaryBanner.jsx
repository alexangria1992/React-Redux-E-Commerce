import React from "react";
import bannerImg from "./banner.png";
import ButtonLink from "../ButtonLink";
import "./SecondaryBanner.css";

const SecondaryBanner = () => {
  return (
    <div className="banner__secondary container flex justify-between items-center mx-auto px-20  w-full md:px-20  ">
      <div>
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
