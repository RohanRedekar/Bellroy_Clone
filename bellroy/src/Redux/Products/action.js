import axios from "axios";

// ActionTypes
export const actionsTypes = {
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_FAILURE: "GET_PRODUCTS_FAILURE",
  CHANGE_COLOUR: "CHANGE_COLOUR",
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

// Data fetching and dispatching actions
// export const getProducts = (prod) => (dispatch) => {
//   dispatch(getProductsRequest());
//   axios({
//     method: "GET",
//     url: `https://bellroy-backend.herokuapp.com/${prod}`,
//   })
//     .then((data) => dispatch(getProductsSuccess(data.data.wallet)))
//     .catch((err) => dispatch(getProductsFailure(err)));
// };

export const getProducts = (prod) => (dispatch) => {
  dispatch(getProductsRequest());
  axios({
    method: "GET",
    url: `http://localhost:8080/products`,
  })
    .then((data) => dispatch(getProductsSuccess(data.data)))
    .catch((err) => dispatch(getProductsFailure(err)));
};

