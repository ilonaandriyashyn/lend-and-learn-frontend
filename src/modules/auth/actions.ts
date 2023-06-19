import { AuthActionTypes, LoginSuccessPayload, LoginFailurePayload } from './types';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

export const loginRequest = (): AuthActionTypes => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload: LoginSuccessPayload): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload: LoginFailurePayload): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logoutRequest = (): AuthActionTypes => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (): AuthActionTypes => ({
  type: LOGOUT_SUCCESS,
});
