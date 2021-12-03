import { createAction } from "@reduxjs/toolkit";

export const allProductsAction = createAction("@products/allProductsAction");
export const setProductWithIdAction = createAction("@products/setProductWithIdAction");

export const setPhonesAction = createAction("@products/setPhonesAction");
export const setLaptopsAction = createAction("@products/setLaptopsAction");
export const setIpadsAction = createAction("@products/setIpadsAction");
export const setWatchesAction = createAction("@products/setWatchesAction");
export const setAirPodsAction = createAction("@products/setAirPodsAction");

export const setError = createAction("@products/setError");
export const setLoaderAction = createAction("@products/setLoaderAction");
 