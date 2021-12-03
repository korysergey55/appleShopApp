import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  allProductsAction,
  setPhonesAction,
  setLaptopsAction,
  setIpadsAction,
  setWatchesAction,
  setAirPodsAction,
  setProductWithIdAction,
  setError,
  setLoaderAction,
} from "./productsActions";

import { cloneDeep } from "lodash";
import { laptopsJSON, phonesJSON, ipadsJSON } from '../../sourses/data/products.js'
const laptops = cloneDeep(laptopsJSON)
const phones = cloneDeep(phonesJSON)
const ipads = cloneDeep(ipadsJSON)
const allProducts = [...laptops, ...phones, ...ipads,]

const allProductsReducer = createReducer([...allProducts],
  { [allProductsAction]: (state, action) => (state) }
);

const productItemsReducer = createReducer(
  { phones: [...phones], laptops: [...laptops], ipads: [...ipads], appleWatches: [], airPods: [] },
  {
    [setPhonesAction]: (state, action) => ({ ...state, phones: [...action.payload] }),
    [setLaptopsAction]: (state, action) => ({ ...state, laptops: [...action.payload] }),
    [setIpadsAction]: (state, action) => ({ ...state, ipads: [...action.payload] }),
    [setWatchesAction]: (state, action) => ({ ...state, appleWatches: [...action.payload] }),
    [setAirPodsAction]: (state, action) => ({ ...state, airPods: [...action.payload] }),
  }
);

const productWithIdReducer = createReducer([],
  { [setProductWithIdAction]: (state, action) => ({ ...action.payload }) }
);

const productsErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
});

const productsLoaderReducer = createReducer(false, {
  [setLoaderAction]: (state) => !state,
});

const ProductsReducer = combineReducers({
  allItems: allProductsReducer,
  items: productItemsReducer,
  productWithId: productWithIdReducer,
  error: productsErrorReducer,
  loader: productsLoaderReducer,
});

export default ProductsReducer;