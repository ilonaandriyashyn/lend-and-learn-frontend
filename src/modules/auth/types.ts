import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './actionTypes';

export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

interface LoginActionRequest {
  type: typeof LOGIN_REQUEST;
}

export interface LoginSuccessPayload {
  accessToken: string;
}

interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginSuccessPayload;
}

export interface LoginFailurePayload {
  error: string;
}

interface LoginActionFailure {
  type: typeof LOGIN_FAILURE;
  payload: LoginFailurePayload;
}

interface LogoutActionRequest {
  type: typeof LOGOUT_REQUEST;
}

interface LogoutActionSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthActionTypes = LoginActionRequest | LoginActionSuccess | LoginActionFailure | LogoutActionRequest | LogoutActionSuccess;
