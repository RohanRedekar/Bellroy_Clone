import { actionsTypes } from "./action";
const initState = {
  loading: false,
  products: [],
  error: "",
};

export const ProductReducer = (state = initState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case actionsTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionsTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        products: payload,
      };
    case actionsTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actionsTypes.CHANGE_COLOUR:
      return {
        ...state,
        loading: false,
        error: "",
        products: [
          ...state.productData.products,
          (state.productData.products[payload.index1].selectedColour =
            payload.color),
          (state.productData.products[payload.index1].imgIndex =
            payload.index2),
        ],
      };
    default:
      return state;
  }
};
