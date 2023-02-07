import React from "react";
import BenefitsItem from "../BenefitsItem";

const benefits = [
  {
    title: "Delivery",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In accusantium non laboriosam cupiditate   .",
  },
  {
    title: "Products",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.    .",
  },
  {
    title: "Payments",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In accusantium non laboriosam cupiditate   .",
  },
];
const Benefits = () => {
  return (
    <div
      className="flex container flex-col md:flex-row mx-auto mb-20 space-y-8 
    md:space-y-0 md:space-x-8 sm:w-3/4  md:w-full"
    >
      {benefits.map((item) => (
        <BenefitsItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Benefits;
