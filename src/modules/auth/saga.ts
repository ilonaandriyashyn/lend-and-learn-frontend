import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { loginFailure, loginSuccess, logoutSuccess } from './actions';
import { Auth, loginRequest } from '../../api/authApi';
import { ApiResponse } from '../../api/types';
import { getCurrentLocationParamCode } from '../router/selectors';
import { clearCurrentUser, saveCurrentUser } from '../users/actions';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from './actionTypes';
import { LocalStorageKeys } from '../../consts/localStorageKeys';
import { setSnackbarTypeError } from '../app/actions';
import { t } from '@lingui/macro';

export function* login() {
  try {
    const code: string = yield select(getCurrentLocationParamCode);
    const response: ApiResponse<Auth> = yield call(loginRequest, code);
    yield put(loginSuccess({ accessToken: response.data?.accessToken }));
    localStorage.setItem(LocalStorageKeys.AccessToken, response.data?.accessToken);
    localStorage.setItem(LocalStorageKeys.IsLoggedIn, 'true');
    yield put(saveCurrentUser(response.data?.user));
    localStorage.setItem(LocalStorageKeys.User, JSON.stringify(response.data?.user));
  } catch (error) {
    yield put(loginFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not login`));
  }
}

export function* logout() {
  try {
    localStorage.clear();
    yield put(logoutSuccess());
    yield put(clearCurrentUser());
  } catch (error) {
    yield put(setSnackbarTypeError(t`Could not logout`));
  }
}

export default function* () {
  yield all([takeEvery(LOGIN_REQUEST, login), takeEvery(LOGOUT_REQUEST, logout)]);
}
