import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux";
import { setModalAntAction,  setModalAntErrorAction } from './antModalActions'


const antModalReducer = createReducer(false, {
  [setModalAntAction]: (state, action) => !state,
})

const antModalError = createReducer(null, {
  [setModalAntErrorAction]: (state, action) => action.payload,
})

const antModal = combineReducers({
  modal: antModalReducer,
  modalError: antModalError,
})
export default antModal

