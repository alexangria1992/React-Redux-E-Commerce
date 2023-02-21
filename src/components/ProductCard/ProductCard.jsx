import React from "react";
import { Link } from "react-router-dom";
import Price from "../Price";

const ProductCard = ({ id, name, brand, imgUrl, price }) => (
  <Link
    className="flex flex-col  align-center rounded-md  mr-6 mb-6 px-4 py-6 hover:shadow-xl transform hover:scale-105 transition delay-50 duration-300 ease-in-out"
    to={`/product/${id}`}
  >
    <div className="flex flex-1 flex-col justify-center mb-4">
      <img width="120" src={imgUrl} alt={name} className="mx-auto " />
    </div>
    <div>
      <p className="text-yellow font-krona text-sm lowercase">
        {" "}
        {name.replace(/^(.{12}[^\s]*).*/, "$1")}
      </p>
      <p className="mb-4"> {brand}</p>
      <Price price={price} />
    </div>
  </Link>
);

export default ProductCard;
