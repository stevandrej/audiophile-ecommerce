import { combineReducers } from "redux";
import productsReducer from "./products";
import categoriesReducer from "./categories";
import cartReducer from "./cart";

export default combineReducers({ productsReducer, categoriesReducer, cartReducer });
