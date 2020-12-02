import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
import products from "./products";
import productsReducer from "./api";

export default combineReducers({ products, productsReducer });
