import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const Product = () => {
  const { id } = useParams();

  const { singleProduct, getSingleProduct } = useGetProducts();

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  if (!singleProduct) return <p>Loading...</p>;

  return (
    <div>
      {/* TITLE */}
      <p>{singleProduct.name}</p>
      <p>{singleProduct.product_type}</p>

      {/* IMG */}
      <img
        width="120"
        src={`https://${singleProduct.api_featured_image}`}
        alt={singleProduct.name}
      />
      {/* CATEGORY */}
      <p>{singleProduct.category}</p>
      {/* PRICE*/}
      <br />
      <p>{singleProduct.price}</p>

      {/* Description  */}
      <p>{singleProduct.description.replace(/<\/?[^>]+(>|$)/g, "")}></p>

      {/* FOR YOU PRODUCTS */}
    </div>
  );
};

export default Product;
