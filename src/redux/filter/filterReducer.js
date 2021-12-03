import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setFilterAction, setFilterError } from "../../redux/filter/filterActions";

const filerReducer = createReducer("", {
  [setFilterAction]: (state, action) => action.payload,
});

const filerReducerError = createReducer("", {
 [setFilterError]: (state, action) => action.payload,
});

const FilterReducer = combineReducers({
 filter: filerReducer,
 filterError: filerReducerError,
});
export default FilterReducer;
