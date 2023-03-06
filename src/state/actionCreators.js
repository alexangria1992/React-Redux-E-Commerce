import { SET_PRODUCTS, SET_FILTER } from "./actionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  payload: { name, value },
});
