import React from "react";
import Price from "../Price";
import PropTypes from "prop-types";
import CartButton from "../CartButton";
import Image from "./Image";
import Info from "./Info";
import Description from "./Description";
import Title from "./Title";

const Product = ({ name, img, type, category, price, description }) => (
  <>
    <Title name={name} type={type} />
    <div className="flex lg:flex-row flex-col mb-20 items-center justify-center ">
      <Image name={name} img={img} type={type} />
      <div>
        <Info category={category} name={name} type={type} />

        <div className="flex my-10 justify-between">
          <Price price={price} isLarge />
          <CartButton />
        </div>

        <Description text={description} />
      </div>
    </div>
  </>
);

export default Product;

Product.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
