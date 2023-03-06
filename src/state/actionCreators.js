import { SET_PRODUCTS, SET_FILTER } from "./actionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setFilter = ({ type, value }) => ({
  type: SET_FILTER,
  payload: { type, value },
});
