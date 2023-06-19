import { AuthActionTypes, AuthState } from './types';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';
import { LocalStorageKeys } from '../../consts/localStorageKeys';

const initialState: AuthState = {
  accessToken: localStorage.getItem(LocalStorageKeys.AccessToken) || null,
  isLoading: false,
  error: null,
  isLoggedIn: Boolean(localStorage.getItem(LocalStorageKeys.IsLoggedIn)) || false,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...initialState,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        accessToken: action.payload.accessToken,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        accessToken: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
