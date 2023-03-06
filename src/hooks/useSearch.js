import { useEffect } from "react";
import { setProducts } from "../state/actionCreators";
import axios from "axios";
import { useSearchState } from "../state/search-context";
// import { PRODUCT_TAGS } from "../constants/tags";
const BASE_URL = "https://makeup-api.herokuapp.com/api/v1/products";

//TODO "UI To-do list"
// 1. When the user navigates to the product and then goes back,
//pre-selected filters should be remembered

//2. Sorting should have a seperate dropdown -- DONE

//3. create the tags 'dropdown" with checkboxes to be able to select more than one tag

//4.implement a pagination (along with the per page filter)
const useSearch = () => {
  const [state, dispatch] = useSearchState();

  const getProducts = () => {
    dispatch(setProducts([]));
    // console.log({ params });
    const params = {
      product_type: state.filters.product_type,
      brand: state.filters.brand,
    };

    axios
      .get(`${BASE_URL}.json`, {
        params,
      })
      .then(({ data }) => {
        dispatch(setProducts(data));
        // console.log({ data });
        // setProducts(data);
      });
  };

  // TODO: extend this function with setting the filter in the state
  //TODO save filtered products to the state--save applied filters as well

  // const setFilter = (type, value) => {
  //   console.log("setFilter", { type, value });

  //   const params = {
  //     [type]: value === "all" ? null : value,
  //   };
  //   setFilterState({ type, value });
  //   // console.log({ type, value });
  //   getProducts(params);
  // };

  useEffect(() => {
    getProducts();
  }, [state.filters]);
};

export default useSearch;
