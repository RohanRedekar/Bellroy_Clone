import { actionsTypes } from "./action";
const initState = {
  loading: false,
  products: [],
  error: "",
  product: {},
  cart: [],
};

export const ProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // GET_PRODUCTS
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
    // CHANGE_COLOUR
    case actionsTypes.CHANGE_COLOUR:
      return {
        ...state,
        products: state.products.map((p, i) =>
          i === payload.index1
            ? { ...p, selectedColour: payload.color, imgIndex: payload.index2 }
            : p
        ),
      };
    // PICK_SELECTED_PRODUCT
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
    //FETCH_CART
    case actionsTypes.FETCH_CART_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case actionsTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        error: "",
        cart: payload,
        loading: false,
      };
    case actionsTypes.FETCH_CART_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
