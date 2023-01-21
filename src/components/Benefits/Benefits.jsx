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
    <div className="flex container  mx-auto mb-6">
      {benefits.map((item) => (
        <BenefitsItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Benefits;
