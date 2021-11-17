import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("@products/setFilter");
const setFilterError = createAction("@products/setFilterError");

export { setFilter, setFilterError };
