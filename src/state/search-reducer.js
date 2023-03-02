export const searchReducer = (state, { type, payload }) => {
  switch (type) {
    case "setProducts":
      return { ...state, products: payload };
    default:
      return state;
  }
};
