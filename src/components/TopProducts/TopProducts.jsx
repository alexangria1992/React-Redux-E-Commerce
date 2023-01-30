import React from "react";
import SectionTitle from "../SectionTitle";
import ButtonLink from "../ButtonLink";
import SecondaryBanner from "../SecondaryBanner/SecondaryBanner";
import ProductCard from "../ProductCard";
import useGetTopProducts from "../../hooks/useGetTopProducts";

const TopProducts = () => {
  const products = useGetTopProducts();

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex bg-blue-200 items-center justify-between mb-6">
          <SectionTitle text="Top Products" />
          <ButtonLink isMain path="/about" text="see more" />
        </div>
        <div className=" bg-orange-400  flex flex-wrap justify-center">
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
        </div>
      </div>
      <SecondaryBanner />
    </div>
  );
};

export default TopProducts;
