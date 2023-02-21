import React from "react";
import useGetRecommendedProducts from "../../hooks/useGetRecommendedProducts";
import ProductCard from "../ProductCard";
import SectionTitle from "../SectionTitle";
import Loader from "../Loader";

const RecommendedProducts = ({ product }) => {
  const products = useGetRecommendedProducts(product);

  return (
    <>
      {/* TODO: Handle loading state */}
      <SectionTitle text=" For you" />
      {products.length === 0 ? (
        <Loader classes="my-4" />
      ) : (
        <div className="flex flex-wrap justify-center">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              brand={item.brand}
              imgUrl={item.api_featured_image}
              price={item.price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RecommendedProducts;
