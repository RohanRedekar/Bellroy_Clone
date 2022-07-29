import axios from "axios";

// ActionTypes
export const actionsTypes = {
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",

  CHANGE_COLOUR: "CHANGE_COLOUR",

  PICK_SELECTED_PRODUCT_REUQEST: "PICK_SELECTED_PRODUCT_REUQEST",
  PICK_SELECTED_PRODUCT_SUCCESS: "PICK_SELECTED_PRODUCT_SUCCESS",
  PICK_SELECTED_PRODUCT_FAILURE: "PICK_SELECTED_PRODUCT_FAILURE",

  FETCH_CART_REQUEST: "FETCH_CART_REQUEST",
  FETCH_CART_SUCCESS: "FETCH_CART_SUCCESS",
  FETCH_CART_FAILURE: "FETCH_CART_FAILURE",
};

/* ***** Actions ***** */
// get Products
export const getProductsRequest = () => ({
  type: actionsTypes.GET_PRODUCTS_REQUEST,
});

export const getProductsSuccess = (payload) => ({
  type: actionsTypes.GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFailure = (payload) => ({
  type: actionsTypes.GET_PRODUCTS_FAILURE,
  payload,
});

// change Colour
export const changeColour = (payload) => ({
  type: actionsTypes.CHANGE_COLOUR,
  payload,
});

// Data fetching and dispatching actions
export const getProducts = (prod, colors) => (dispatch) => {
  dispatch(getProductsRequest());
  axios({
    method: "GET",
    url: `https://bellroy-backend.herokuapp.com/products/${prod}`,
    params: {
      filter: colors
    },
  })
    .then((data) => dispatch(getProductsSuccess(data.data.products)))
    .catch((err) => dispatch(getProductsFailure(err)));
};

// pick Selected Product
export const pickSelectedProductRequest = (payload) => ({
  type: actionsTypes.PICK_SELECTED_PRODUCT_REUQEST,
  payload,
});

export const pickSelectedProductSuccess = (payload) => ({
  type: actionsTypes.PICK_SELECTED_PRODUCT_SUCCESS,
  payload,
});

export const pickSelectedProductFailure = (payload) => ({
  type: actionsTypes.PICK_SELECTED_PRODUCT_FAILURE,
  payload,
});

export const getSelectedProduct = (title) => (dispatch) => {
  dispatch(pickSelectedProductRequest());
  axios({
    method: "GET",
    url: `https://bellroy-backend.herokuapp.com/product/${title}`,
  })
    .then((data) => dispatch(pickSelectedProductSuccess(data.data[0])))
    .catch((err) => dispatch(pickSelectedProductFailure(err)));
};

//fetching Cart
export const fetchCartRequest = () => ({
  type: actionsTypes.FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (payload) => ({
  type: actionsTypes.FETCH_CART_SUCCESS,
  payload,
});

export const fetchCartFailure = (payload) => ({
  type: actionsTypes.FETCH_CART_FAILURE,
  payload,
});

export const fetchCart = (payload) => (dispatch) => {
  axios({
    mathod: "GET",
    url: "https://bellroy-backend.herokuapp.com/fetchCart",
    // url: "http://localhost:3001/fetchCart",
    params: {
      payload: payload,
    },
  })
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};
