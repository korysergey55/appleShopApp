import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  registerUserAction,
  registerUserActionError,
  loginUserAction,
  loginUserActionError,
  logoutUserAction,
  subscribeFormAction,
  subscribeFormActionError,
  contactFormAction,
  contactFormActionError
} from "./authActions";

const registerReducer = createReducer(null, {
  [registerUserAction]: (state, action) => action.payload,
});

const tokenReducer = createReducer(null, {
  [loginUserAction]: (state, action) => action.payload,
  [logoutUserAction]: (state, action) => null,
});

const userReducer = createReducer(null, {
  [loginUserAction]: (state, action) => action.payload,
  [logoutUserAction]: (state, action) => null,
});

const subscribeReducer = createReducer(null, {
  [subscribeFormAction]: (state, action) => action.payload,
});

const contactFormReducer = createReducer(null, {
  [contactFormAction]: (state, action) => action.payload,
});

const errorReducer = createReducer(null, {
  [registerUserActionError]: (state, action) => action.payload,
  [loginUserActionError]: (state, action) => action.payload,
  [logoutUserAction]: (state, action) => action.payload,
  [subscribeFormActionError]: (state, action) => action.payload,
  [contactFormActionError]: (state, action) => action.payload,
});

const authReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  registration: registerReducer,
  subscribeForm: subscribeReducer,
  contactForm: contactFormReducer,
  error: errorReducer,
});

export default authReducer;
