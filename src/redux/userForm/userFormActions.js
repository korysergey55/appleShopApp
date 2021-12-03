import { createAction } from "@reduxjs/toolkit";

export const subscribeFormAction = createAction("auth/subscribeFormAction");
export const contactFormAction = createAction("auth/contactFormAction");

export const subscribeFormActionError = createAction("auth/subscribeFormActionError");
export const contactFormActionError = createAction("auth/contactFormActionError");
