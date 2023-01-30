import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
//"http://makeup-api.herokuapp.com/api/v1/products/114.json";

const useGetTopProducts = () => {
  const [products, setProducts] = useState([]);

  const getTopProducts = () => {
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then((response) => setProducts(response.data));
  };

  useEffect(() => {
    getTopProducts();
  }, []);

  return products;
};

export default useGetTopProducts;
