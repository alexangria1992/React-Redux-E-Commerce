import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
//"http://makeup-api.herokuapp.com/api/v1/products/114.json";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  const getTopProducts = () => {
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then((response) => setProducts(response.data));
  };

  const getSingleProduct = (id) => {
    axios
      .get(`${BASE_URL}/${id}.json`)
      .then((response) => setSingleProduct(response.data));
  };

  return {
    products,
    getTopProducts,
    getSingleProduct,
    singleProduct,
  };
};

export default useGetProducts;
