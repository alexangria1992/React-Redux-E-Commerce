import React, { useLayoutEffect } from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductPreview from "../components/ProductPreview";
import ProductTitle from "../components/ProductTitle";
import RecommendedProducts from "../components/RecommendedProducts";
import { useLocation } from "react-router-dom";
import Benefits from "../components/Benefits/Benefits";

const Product = () => {
  const location = useLocation();
  const { singleProduct } = useGetProduct();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!singleProduct) return <p>Loading...</p>;

  return (
    <div className="mt-20 container mx-auto  ">
      <ProductTitle
        name={singleProduct.name}
        type={singleProduct.product_type.replace(/_/g, " ")}
      />
      {/* TODO: check if columns make sense for a better img display */}

      <ProductPreview
        name={singleProduct.name}
        img={singleProduct.api_featured_image}
        type={singleProduct.product_type}
        category={singleProduct.category}
        price={singleProduct.price}
        description={singleProduct.description}
      />

      {/* FOR YOU PRODUCTS */}
      <Benefits />

      <RecommendedProducts product={singleProduct} />
      {/* <div className="flex flex-wrap justify-center">
        {singleProduct.recommended ? (
          singleProduct.recommended.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imgUrl={product.api_featured_image}
              price={product.price}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </div>
  );
};

export default Product;
