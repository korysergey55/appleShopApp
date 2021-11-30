import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  allProductsAction,
  setPhones,
  setLaptops,
  setIpads,
  setAppleWatches,
  setAirPods,
  setProductWithId,
  setError,
  resetError,
  setLoader,
} from "./productsActions";

import { cloneDeep } from "lodash";
import { laptopsJSON, phonesJSON, ipadsJSON } from '../../sourses/data/products.js'
const laptops = cloneDeep(laptopsJSON)
const phones = cloneDeep(phonesJSON)
const ipads = cloneDeep(ipadsJSON)
const allProducts = [...laptops, ...phones, ...ipads,]

const productItemsReducer = createReducer(
  { phones: [...phones], laptops: [...laptops], ipads: [...ipads], appleWatches: [], airPods: [] },
  {
    [setPhones]: (state, action) => ({ ...state, phones: [...action.payload] }),
    [setLaptops]: (state, action) => ({ ...state, laptops: [...action.payload] }),
    [setIpads]: (state, action) => ({ ...state, ipads: [...action.payload] }),
    [setAppleWatches]: (state, action) => ({ ...state, appleWatches: [...action.payload] }),
    [setAirPods]: (state, action) => ({ ...state, airPods: [...action.payload] }),
  }
);
const productWithIdReducer = createReducer([],
  { [setProductWithId]: (state, action) => ({ ...action.payload }) }
);
const allProductsReducer = createReducer([...allProducts],
  { [allProductsAction]: (state, action) => (state) }
);

const productsErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsReducer = combineReducers({
  allItems: allProductsReducer,
  items: productItemsReducer,
  productWithId: productWithIdReducer,
  error: productsErrorReducer,
  loader: productsLoaderReducer,
});

export default productsReducer;