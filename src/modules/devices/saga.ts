import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import { getAllDevices, createDevice, deleteDevice, getDeviceApi, updateDeviceApi } from '../../api/devicesApi';
import { ApiResponse } from '../../api/types';
import {
  CREATE_DEVICE_REQUEST,
  DELETE_DEVICE_REQUEST,
  GET_DEVICE_REQUEST,
  GET_DEVICES_REQUEST,
  GET_MY_DEVICES_REQUEST,
  UPDATE_DEVICE_REQUEST,
} from './actionTypes';
import {
  createDeviceFailure,
  createDeviceSuccess,
  deleteDeviceFailure,
  deleteDeviceSuccess,
  getDeviceFailure,
  getDevicesFailure,
  getDevicesSuccess,
  getDeviceSuccess,
  getMyDevicesFailure,
  getMyDevicesSuccess,
  invalidateDevices,
  updateDeviceSuccess,
} from './actions';
import { getUsername } from '../users/selectors';
import {
  CreateDeviceRequest,
  DeleteDeviceRequest,
  Device,
  DevicesWithCount,
  GetDeviceRequest,
  GetDevicesRequest,
  GetMyDevicesRequest,
  UpdateDeviceRequest,
} from './types';
import { getUsersDevicesApi } from '../../api/usersApi';
import { setSnackbarTypeError, setSnackbarTypeSuccess } from '../app/actions';
import { t } from '@lingui/macro';
import { BackendCodes } from '../../consts/codes';
import { getCurrentLocation } from '../router/selectors';
import { push } from 'connected-react-router';
import { matchPath } from 'react-router';
import { Paths } from '../../consts/paths';

export function* getDevicesSaga({ limit, offset }: GetDevicesRequest) {
  try {
    const response: ApiResponse<DevicesWithCount> = yield call(getAllDevices, limit, offset);
    yield put(getDevicesSuccess(response.data));
  } catch (error) {
    yield put(getDevicesFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load devices`));
  }
}

export function* createDeviceSaga({ name, description }: CreateDeviceRequest) {
  try {
    const username: string = yield select(getUsername);
    yield call(createDevice, name, description, username);
    yield put(createDeviceSuccess());
    yield put(setSnackbarTypeSuccess(t`Device was created`));
  } catch (error) {
    yield put(createDeviceFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Device could not be created`));
  }
}

export function* deleteDeviceSaga({ id }: DeleteDeviceRequest) {
  try {
    yield call(deleteDevice, id);
    const location: string = yield select(getCurrentLocation);
    const match = matchPath(location, {
      path: Paths.DeviceProfile,
      exact: true,
      strict: false,
    });
    if (match) {
      yield put(push(Paths.Devices));
    }
    yield put(deleteDeviceSuccess());
    yield put(setSnackbarTypeSuccess(t`Device was deleted`));
  } catch (error) {
    yield put(deleteDeviceFailure({ error: error.message }));
    if (error?.response?.data?.code === BackendCodes.DeviceWithActiveReservations) {
      yield put(setSnackbarTypeError(t`Device could not be deleted. You have some created or active reservations for this device`));
    } else {
      yield put(setSnackbarTypeError(t`Device could not be deleted`));
    }
  }
}

export function* getMyDevicesSaga({ limit, offset }: GetMyDevicesRequest) {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<DevicesWithCount> = yield call(getUsersDevicesApi, username, limit, offset);
    yield put(getMyDevicesSuccess(response.data));
  } catch (error) {
    yield put(getMyDevicesFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load devices`));
  }
}

export function* getDeviceSaga({ id }: GetDeviceRequest) {
  try {
    const response: ApiResponse<Device> = yield call(getDeviceApi, id);
    yield put(getDeviceSuccess(response.data));
  } catch (error) {
    yield put(getDeviceFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load device`));
  }
}

export function* updateDeviceSaga({ id, name, description }: UpdateDeviceRequest) {
  try {
    yield call(updateDeviceApi, id, name, description);
    yield put(updateDeviceSuccess());
    yield put(invalidateDevices());
  } catch (error) {
    yield put(getDeviceFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not update device`));
  }
}

export default function* () {
  yield all([
    takeEvery(GET_DEVICES_REQUEST, getDevicesSaga),
    takeEvery(CREATE_DEVICE_REQUEST, createDeviceSaga),
    takeEvery(DELETE_DEVICE_REQUEST, deleteDeviceSaga),
    takeEvery(GET_MY_DEVICES_REQUEST, getMyDevicesSaga),
    takeEvery(GET_DEVICE_REQUEST, getDeviceSaga),
    takeEvery(UPDATE_DEVICE_REQUEST, updateDeviceSaga),
  ]);
}
