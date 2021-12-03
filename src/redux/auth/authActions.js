import { createAction } from "@reduxjs/toolkit";

export const registerUserAction = createAction("auth/registerUserAction");
export const loginUserAction = createAction("auth/loginUserAction");
export const logoutUserAction = createAction("auth/logoutUserAction");

export const registerUserActionError = createAction( "auth/registerUserActionError");
export const loginUserActionError = createAction("auth/loginUserActionError");
export const logoutUserActionError = createAction("auth/logoutUserActionError");
