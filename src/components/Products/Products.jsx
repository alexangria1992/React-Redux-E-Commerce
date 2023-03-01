import React from "react";
import ProductCard from "../ProductCard";
import Loader from "../Loader";

const Products = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.length === 0 ? (
        <Loader classes="my-4" />
      ) : (
        <>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
