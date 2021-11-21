import { createAction } from "@reduxjs/toolkit";

const addToCartAction = createAction("cart/addToCartAction");
const removeFromCartAction = createAction("cart/removeFromCartAction");
const createOrderAction = createAction("cart/createOrderAction");
const remuveAllFromCartAction = createAction("cart/remuveAllFromCartAction");

const setError = createAction("cart/setError");

export {
  addToCartAction,
  removeFromCartAction,
  createOrderAction,
  remuveAllFromCartAction,
  setError,
};
