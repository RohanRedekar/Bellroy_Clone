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
};

// Actions
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

export const changeColour = (payload) => ({
  type: actionsTypes.CHANGE_COLOUR,
  payload,
});

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

// Data fetching and dispatching actions
export const getProducts = (prod) => (dispatch) => {
  dispatch(getProductsRequest());
  axios({
    method: "GET",
    url: `https://bellroy-backend.herokuapp.com/products/category/${prod}`,
  })
    .then((data) => {
      prod === "Wallets"
        ? dispatch(getProductsSuccess(data.data.wallets))
        : prod === "Bags"
        ? dispatch(getProductsSuccess(data.data.bags))
        : prod === "Accessories"
        ? dispatch(getProductsSuccess(data.data.accessories))
        : prod === "Tech"
        ? dispatch(getProductsSuccess(data.data.tech))
        : prod === "Travel"
        ? dispatch(getProductsSuccess(data.data.travel))
        : dispatch(getProductsFailure("No data Found"));
    })
    .catch((err) => dispatch(getProductsFailure(err)));
};

export const getSelectedProduct = (category, title) => (dispatch) => {
  dispatch(pickSelectedProductRequest());
  axios({
    method: "GET",
    url: `https://bellroy-backend.herokuapp.com/product/${category}/${title}`,
  })
    .then((data) => dispatch(pickSelectedProductSuccess(data.data[0])))
    .catch((err) => dispatch(pickSelectedProductFailure(err)));
};
