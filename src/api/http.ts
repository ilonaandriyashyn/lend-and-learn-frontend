import axios from 'axios';
import { API_URL } from '../consts/server';
import { getToken, isLoggedIn } from '../modules/auth/selectors';
import { Store } from 'redux';
import { logoutRequest } from '../modules/auth/actions';
import { setSnackbarTypeError } from '../modules/app/actions';
import { t } from '@lingui/macro';

const http = axios.create({
  baseURL: API_URL,
});

export const setInterceptors = (store: Store) => {
  http.interceptors.request.use((config) => {
    const state = store.getState();
    const accessToken: string | null = getToken(state);
    const isUserLoggedIn: boolean = isLoggedIn(state);
    if (isUserLoggedIn && accessToken) {
      config.headers = { 'x-api-key': accessToken };
    }
    return config;
  });

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      return new Promise(() => {
        const state = store.getState();
        const isUserLoggedIn: boolean = isLoggedIn(state);
        if (error.response && error.response.status === 401 && isUserLoggedIn) {
          store.dispatch(logoutRequest());
          store.dispatch(setSnackbarTypeError(t`You've been logged out due to unauthorized request`));
        } else {
          throw error;
        }
      });
    },
  );
};

export default http;
