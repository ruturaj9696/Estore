import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allproducts: ProductReducer,
  product: SelectedProductReducer,
});

export default reducers;
