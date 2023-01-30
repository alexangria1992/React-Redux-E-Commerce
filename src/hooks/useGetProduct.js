import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
//"http://makeup-api.herokuapp.com/api/v1/products/114.json";

const useGetProducts = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);

  const getSingleProduct = useCallback(() => {
    axios.get(`${BASE_URL}/${id}.json`).then((response) => {
      setSingleProduct(response.data);
      // console.log("in getSingleProduct");
    });
  }, [id]);

  useEffect(() => {
    if (!singleProduct) {
      getSingleProduct();
    }
  }, [singleProduct, getSingleProduct]);

  return {
    getSingleProduct,
    singleProduct,
  };
};

export default useGetProducts;
