import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addToCartAction,
  removeFromCartAction,
  createOrderAction,
  remuveAllFromCartAction,
  setError,
} from "./cartActions";

const cartItemsReducer = createReducer([], {
  [addToCartAction]: (state, action) => [...state, action.payload],
  //  [state.items ? [...state.items?.filter((item) => item.id === action.payload.id)] : state, action.payload],
  // [...state, action.payload],
  [removeFromCartAction]: (state, action) => [
    ...state.filter((cartItem) => cartItem.id !== action.payload),
  ],
  [remuveAllFromCartAction]: () => [],
});

const cartOrderReducer = createReducer(false, {
  [createOrderAction]: (state, action) => action.payload,
});

const cartTotalPriceOrder = createReducer(false, {
  [createOrderAction]: (state, action) => action.payload
    .reduce((acc, product) => {
      acc += Number(product.price);
      return acc;
    }, 0)
});

const cartErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
});

const cartReducer = combineReducers({
  items: cartItemsReducer,
  order: cartOrderReducer,
  total: cartTotalPriceOrder,
  error: cartErrorReducer,
});

export default cartReducer;

// ==================== redux ==========================================

// import { combineReducers } from "redux";
// import {
//   ADDTOCART,
//   REMOVEFROMCARTBYID,
//   CREATEORDER,
//   SETERROR,
//   RESETERROR,
//   SETLOADER,
// } from "./cartActions";

// const cartItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADDTOCART:
//       return [...state, action.payload];
//     case REMOVEFROMCARTBYID:
//       return [...state.filter((cartItem) => cartItem.id !== action.payload)];
//     case CREATEORDER:
//       return [];
//     default:
//       return state;
//   }
// };

// const cartLoaderReducer = (state = false, action) => {
//   switch (action.type) {
//     case SETLOADER:
//       return !state;
//     default:
//       return state;
//   }
// };

// const cartErrorReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETERROR:
//       return action.payload;
//     case RESETERROR:
//       return "";
//     default:
//       return state;
//   }
// };

// const cartReducer = combineReducers({
//   items: cartItemsReducer,
//   loader: cartLoaderReducer,
//   error: cartErrorReducer,
// });

// export default cartReducer;
