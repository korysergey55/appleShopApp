import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "redux";
import { setModalAntAction, setModalCloseAntAction, setModalAntError } from './antModalActions'


const antModalReducer = createReducer(false, {
  [setModalAntAction]: (state, action) => !state,
})

const antModalError = createReducer(null, {
  [setModalAntError]: (state, action) => action.payload,
})

const antModal = combineReducers({
  modal: antModalReducer,
  modalError: antModalError,
})
export default antModal

