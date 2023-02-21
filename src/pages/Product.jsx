import React, { useLayoutEffect } from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductPreview from "../components/Product";
import RecommendedProducts from "../components/RecommendedProducts";
import { useLocation } from "react-router-dom";
import Benefits from "../components/Benefits/Benefits";
import Loader from "../components/Loader";

const Product = () => {
  const location = useLocation();
  const { singleProduct, isLoading } = useGetProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <div className="mt-20 container mx-auto  ">
      {isLoading ? (
        <Loader classes="h-screen" />
      ) : (
        <ProductPreview
          name={singleProduct.name}
          img={singleProduct.api_featured_image}
          type={singleProduct.product_type}
          category={singleProduct.category}
          price={singleProduct.price}
          description={singleProduct.description}
        />
      )}
      <Benefits />
      <RecommendedProducts product={singleProduct} />
    </div>
  );
};

export default Product;
