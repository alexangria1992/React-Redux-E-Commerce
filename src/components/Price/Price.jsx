import React from "react";
import PropTypes from "prop-types";

const Price = ({ price, isLarge }) => {
  return (
    <div className="relative">
      <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>

      <p className={`font-krona text-${isLarge ? "lg" : "md"} pt-2 ml-4`}>
        {price} &#36;
      </p>
    </div>
  );
};

export default Price;

Price.propTypes = {
  price: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
};

Price.defaultProps = {
  price: PropTypes.string.isRequired,

  isLarge: false,
};
