import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./Products/reducer";

const rootReducer = combineReducers({
  productData: ProductReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
