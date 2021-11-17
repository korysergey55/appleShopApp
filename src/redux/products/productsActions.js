import { createAction } from "@reduxjs/toolkit";

const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");
const setIpads = createAction("@products/getIpad");
const setAppleWatches = createAction("@products/getAppleWatch");
const setAirPods = createAction("@products/getAirPods");
const setProductWithId = createAction("@products/setproductWithId");

const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");
const setLoader = createAction("@products/getPhones");


export {
 setPhones,
 setLaptops,
 setIpads,
 setAppleWatches,
 setAirPods,
 setProductWithId,
 setError,
 resetError,
 setLoader,
};
