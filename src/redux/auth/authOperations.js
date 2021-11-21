import {
  registrationUserApi,
  loginUserApi,
  logoutApi,
} from "../../services/authApi";
import {
  registerUserAction,
  registerUserActionError,
  loginUserAction,
  loginUserActionError,
  logoutUserAction,
  logoutUserActionError,
} from "./authActions";

import { logout } from '../../utils/Firebase/firebase'

export const registrationUserOperation =
  (InputFormState, history) => async (dispatch) => {
    try {
      const response = await registrationUserApi(InputFormState);
      dispatch(registerUserAction(response.data));
      history.push("/login");
    } catch (error) {
      dispatch(registerUserActionError(error.message));

    }
  };

export const loginUserOperation =
  (InputFormState, history) => async (dispatch) => {
    try {
      const response = await loginUserApi(InputFormState);
      dispatch(loginUserAction(response.data));
      history.push("/shop");

    } catch (error) {
      dispatch(loginUserActionError(error.message));

    }
  };

export const logoutUserOperation = () => async (dispatch) => {
  try {
    await logout();
    dispatch(logoutUserAction());
    history.push('/login')

  } catch (error) {
    dispatch(logoutUserActionError(error.message));
  }
};
