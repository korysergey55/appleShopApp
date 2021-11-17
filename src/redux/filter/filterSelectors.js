// import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = (state) => state.filter.filter;

export const getProductsFilterSelector = (state, category = "phones") =>
 state.products.items[category].filter((product) =>
  product?.name.toLowerCase().includes(state.filter?.filter.toLowerCase())
 );


//  export const getProductsSelector = (state, category) =>
//   state.products.items[category];

// export const getfilteredProductSelector = createSelector(
//  [getProductsSelector, filterSelector],
//  (products, filterValue) =>
//   products?.items.phones.filter((product) =>
//    product.name?.toLowerCase().includes(filterValue.toLowerCase())
//   )
// );
