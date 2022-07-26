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

  ADD_PRODUCT_CART_REQUEST: "ADD_PRODUCT_CART_REQUEST",
  ADD_PRODUCT_CART_SUCCESS: "ADD_PRODUCT_CART_SUCCESS",
  ADD_PRODUCT_CART_FAILURE: "ADD_PRODUCT_CART_FAILURE",

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
export const getProducts = (prod) => (dispatch) => {
  dispatch(getProductsRequest());
  axios({
    method: "GET",
    url: `https://bellroy-backend.herokuapp.com/products/${prod}`,
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

export const addProductCartRequest = () => ({
  type: actionsTypes.ADD_PRODUCT_CART_REQUEST,
});

export const addProductCartSuccess = (payload) => ({
  type: actionsTypes.ADD_PRODUCT_CART_SUCCESS,
  payload,
});

export const addProductCartFailure = (payload) => ({
  type: actionsTypes.ADD_PRODUCT_CART_FAILURE,
  payload,
});

export const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());
  axios.post("/cart", product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err.data)));
};

//
export const fetchCartRequest = (payload) => ({
  type: actionsTypes.FETCH_CART_REQUEST,
  payload,
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
  dispatch(fetchCartRequest());
  axios.get("/cart")
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};