import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";

const reducers = combineReducers({
  allproducts: ProductReducer,
});

export default reducers;
