import React from "react";
import ProductPrice from "../ProductPrice";
import PropTypes from "prop-types";
import CartButton from "../CartButton";

const ProductPreview = ({ name, img, type, category, price, description }) => {
  const imgUrl = `https://${img}`;
  const formatType = type.replace(/_/g, " ");
  const formatDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="flex lg:flex-row flex-col mb-20 items-center justify-center ">
      <div className=" flex  items-center  justify-center w-3/4 sm:w-2/4 md:w-1/4 lg:w-full lg:mr-10">
        <img src={imgUrl} alt={name} />
      </div>

      <div>
        <p className="text-yellow text-sm font-krona">{formatType}</p>

        <h1 className="font-krona text-base ">{name}</h1>
        {/* <p>{singleProduct.category}</p> */}

        {/* PRICE*/}
        <div className="flex my-10 justify-between">
          <ProductPrice price={price} isLarge />
          <CartButton />
        </div>

        <p>{formatDescription}</p>
      </div>
    </div>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
