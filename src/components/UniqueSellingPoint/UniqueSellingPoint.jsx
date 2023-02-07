import React from "react";
import bannerImg from "./img.jpg";

const UniqueSellingPoint = () => {
  return (
    <div className=" bg-orange-600 pt-20 mb-20">
      <div className=" mx-auto flex flex-col md:flex-row bg-pink-300 items-center pt-20  pb-16">
        <div className="mr-4 mb-4 md:mb-0 ">
          <img
            src={bannerImg}
            alt="Tooth brush and a paste laying on top of a green leaf"
          />
        </div>
        <div className="bg-yellow-300">
          <h2 className="font-krona text-3xl mb-4">
            Clean code that you deserve
          </h2>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint,
            esse quia officiis eaque
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint,
            esse quia officiis eaque atque, rerum repellat, quidem recusandae
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniqueSellingPoint;
