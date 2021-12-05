import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  orderAction,
  orderActionError,
} from "./orderActions";

const orderReducer = createReducer(null, {
  [orderAction]: (state, action) => action.payload
});

const errorReducer = createReducer(null, {
  [orderActionError]: (state, action) => action.payload,

});

const OrderReducer = combineReducers({
  order: orderReducer,
  error: errorReducer,
});

export default OrderReducer;
