import { actionsTypes } from "./action";
const initState = {
  loading: false,
  products: [],
  error: "",
  product: {},
};

export const ProductReducer = (state = initState, { type, payload }) => {
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
        products: state.products.map((p, i) =>
          i === payload.index1
            ? { ...p, selectedColour: payload.color, imgIndex: payload.index2 }
            : p
        ),
      };
    case actionsTypes.PICK_SELECTED_PRODUCT_REUQEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionsTypes.PICK_SELECTED_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case actionsTypes.PICK_SELECTED_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
