import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { ApiResponse } from '../../api/types';
import { getUserApi, updateUserApi } from '../../api/usersApi';
import { GET_USER_REQUEST, UPDATE_CURRENT_USER_REQUEST } from './actionTypes';
import { GetUserRequest, User } from './types';
import { getUserFailure, getUserSuccess, updateCurrentUserFailure, updateCurrentUserSuccess } from './actions';
import { getUsername } from './selectors';
import { setSnackbarTypeError, setSnackbarTypeSuccess } from '../app/actions';
import { t } from '@lingui/macro';

export function* getUserSaga({ username }: GetUserRequest) {
  try {
    const response: ApiResponse<User> = yield call(getUserApi, username);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load user`));
  }
}

export function* updateCurrentUserSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<User> = yield call(updateUserApi, username);
    yield put(updateCurrentUserSuccess(response.data));
    yield put(setSnackbarTypeSuccess(t`User data were updated`));
  } catch (error) {
    yield put(updateCurrentUserFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not update data`));
  }
}

export default function* () {
  yield all([takeEvery(GET_USER_REQUEST, getUserSaga), takeEvery(UPDATE_CURRENT_USER_REQUEST, updateCurrentUserSaga)]);
}
