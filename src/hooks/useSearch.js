import axios from "axios";
import { useEffect, useState } from "react";
// import { PRODUCT_TAGS } from "../constants/tags";
const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
//"http://makeup-api.herokuapp.com/api/v1/products/114.json";

//TODO
// 1. When the user navigates to the product and then goes back,
//pre-selected filters should be remembered

//2. Sorting should have a seperate dropdown

//3. create the tags 'dropdown" with checkboxes to be able to select more than one tag

//4.implement a pagination (along with the per page filter)
const useSearch = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (params) => {
    setProducts([])
    // console.log({ params });
    axios
      .get(`${BASE_URL}.json`, {
        params,
      })
      .then(({ data }) => {
        // console.log({ data });
        setProducts(data);
      });
  };

  const setFilter = (type, value) => {
    const params = {
      [type]: value,
    };
    // console.log({ type, value });
    getProducts(params);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [products, setFilter];
};

export default useSearch;
