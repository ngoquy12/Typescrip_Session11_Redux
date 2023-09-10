import { combineReducers } from "redux";
import { count } from "./count";
import { random } from "./random";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";
export const reducer = combineReducers({
  count,
  random,
  listProduct,
  listCart,
});
