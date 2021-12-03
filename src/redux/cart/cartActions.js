import { createAction } from "@reduxjs/toolkit";

const addToCartAction = createAction("cart/addToCartAction");
const removeFromCartAction = createAction("cart/removeFromCartAction");
const remuveAllFromCartAction = createAction("cart/remuveAllFromCartAction");
const createOrderAction = createAction("cart/createOrderAction");

const setError = createAction("cart/setError");

export {
  addToCartAction,
  removeFromCartAction,
  remuveAllFromCartAction,
  createOrderAction,
  setError,
};
