import { useEffect, useState } from "react";

import axios from "axios";
import { useSearchState } from "../state/search-context";
// import { PRODUCT_TAGS } from "../constants/tags";
const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";

//TODO
// 1. When the user navigates to the product and then goes back,
//pre-selected filters should be remembered

//2. Sorting should have a seperate dropdown

//3. create the tags 'dropdown" with checkboxes to be able to select more than one tag

//4.implement a pagination (along with the per page filter)
const useSearch = () => {
  const [state, dispatch] = useSearchState();
  const [products, setProducts] = useState([]);

  const getProducts = (params) => {
    dispatch({
      type: "setProducts",
      payload: [],
    });
    setProducts([]);
    // console.log({ params });
    axios
      .get(`${BASE_URL}.json`, {
        params,
      })
      .then(({ data }) => {
        dispatch({
          type: "setProducts",
          payload: data,
        });
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

  return { setFilter };
};

export default useSearch;
