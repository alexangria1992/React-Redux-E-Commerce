import React, { useLayoutEffect } from "react";
import useGetProduct from "../hooks/useGetProduct";
import ProductPrice from "../components/ProductPrice";
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
    <div className="mt-20 container mx-auto ">
      <ProductTitle
        name={singleProduct.name}
        type={singleProduct.product_type.replace(/_/g, " ")}
      />
      {/* TODO: check if columns make sense for a better img display */}

      {/* TODO: split to smaller components */}

      {/* IMG */}
      <div className="flex mb-20 ">
        <div className=" flex  items-center justify-center w-screen p-10">
          <img
            src={`https://${singleProduct.api_featured_image}`}
            alt={singleProduct.name}
          />
        </div>

        <div>
          <p className="text-yellow text-sm font-krona">
            {singleProduct.product_type.replace(/_/g, " ")}
          </p>

          <h1 className="font-krona text-base ">{singleProduct.name}</h1>
          {/* <p>{singleProduct.category}</p> */}
          {/* PRICE*/}
          <div className="flex my-10 justify-between">
            <ProductPrice price={singleProduct.price} isLarge />

            <button className="inline-block py-3  bg-yellow rounded-full font-bold font-krona text-xs px-6">
              add to basket
            </button>
          </div>
          {/* Description  */}
          <p>{singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "")}></p>
        </div>
      </div>

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
