import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  subscribeFormAction,
  subscribeFormActionError,
  contactFormAction,
  contactFormActionError
} from "./userFormActions";

const subscribeFormReducer = createReducer(null, {
  [subscribeFormAction]: (state, action) => action.payload,
});

const contactFormReducer = createReducer(null, {
  [contactFormAction]: (state, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [subscribeFormActionError]: (state, action) => action.payload,
  [contactFormActionError]: (state, action) => action.payload,
});

const FormsReducer = combineReducers({
  subscribeForm: subscribeFormReducer,
  contactForm: contactFormReducer,
  error: errorReducer,
});

export default FormsReducer;
