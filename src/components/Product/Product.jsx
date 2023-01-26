import React from "react";
import { Link } from "react-router-dom";

// TODO Create a product page
const Product = ({ id, name, brand, imgUrl, price }) => (
  <Link
    className="flex flex-col  align-center rounded-md  mr-6 mb-6 px-4 py-6 hover:shadow-xl transform hover:scale-105 transition delay-50 duration-300 ease-in-out"
    to={`/product/${id}`}
  >
    <img
      width="120"
      src={`https://${imgUrl}`}
      alt={name}
      className="mx-auto mb-6"
    />

    <p className="text-yellow font-krona text-sm lowercase"> {name}</p>
    <p className="mb-4"> {brand}</p>
    <div className="relative">
      <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>

      <p className="font-krona text-md pt-2 ml-3">{price} &#36;</p>
    </div>
  </Link>
);

export default Product;
