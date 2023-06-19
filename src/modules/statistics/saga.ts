import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { ApiResponse } from '../../api/types';
import { GET_MY_DEVICES_STATISTICS_REQUEST } from './actionTypes';
import { getMyDevicesStatisticsFailure, getMyDevicesStatisticsSuccess } from './actions';
import { getUsername } from '../users/selectors';
import { MyDevicesStatistics } from './types';
import { getUsersDevicesStatisticsApi } from '../../api/usersApi';
import { setSnackbarTypeError } from '../app/actions';
import { t } from '@lingui/macro';

export function* getMyDevicesStatisticsSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<MyDevicesStatistics> = yield call(getUsersDevicesStatisticsApi, username);
    yield put(getMyDevicesStatisticsSuccess(response.data));
  } catch (error) {
    yield put(getMyDevicesStatisticsFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load statistics`));
  }
}

export default function* () {
  yield all([takeEvery(GET_MY_DEVICES_STATISTICS_REQUEST, getMyDevicesStatisticsSaga)]);
}
