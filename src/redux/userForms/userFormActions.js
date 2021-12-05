import { createAction } from "@reduxjs/toolkit";

export const subscribeFormAction = createAction("forms/subscribeFormAction");
export const contactFormAction = createAction("forms/contactFormAction");

export const subscribeFormActionError = createAction("forms/subscribeFormActionError");
export const contactFormActionError = createAction("forms/contactFormActionError");
