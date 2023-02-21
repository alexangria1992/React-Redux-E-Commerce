import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

const PRODUCTS_COUNT = 4;

const getRandomIndex = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomProducts = (randomIndex, data) => {
  let i = randomIndex;
  const products = [];

  for (let index = 0; index < PRODUCTS_COUNT; index++) {
    products.push(data[i]);
    i++;
  }

  return products;
};

const useGetRecommendedProducts = (product) => {
  //   console.log({ product });
  const [products, setProducts] = useState([]);

  const getRecommendedProducts = useCallback(() => {
    setProducts([]);
    // TODO randomize random chunk of products
    const key = product.product_type ? "product_type" : "brand";
    const value = product.product_type ? product.product_type : product.brand;

    // console.log("######");
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          [key]: value,
        },
      })
      .then((response) => {
        const { data } = response;
        console.log(data.length);
        if (data.length > PRODUCTS_COUNT) {
          const index = getRandomIndex(data.length - PRODUCTS_COUNT);
          const randomProducts = getRandomProducts(index, data);

          setProducts(randomProducts);
          return;
        }
        setProducts(data);
      });
  }, [product]);

  useEffect(() => {
    if (!product) return;

    getRecommendedProducts();
  }, [product, getRecommendedProducts]);

  return products;
};

export default useGetRecommendedProducts;
