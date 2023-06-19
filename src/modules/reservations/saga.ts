import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import {
  APPROVE_RESERVATION_REQUEST,
  CANCEL_RESERVATION_REQUEST,
  CREATE_RESERVATION_REQUEST,
  FINISH_RESERVATION_REQUEST,
  GET_INCOME_CREATED_RESERVATIONS_REQUEST,
  GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
  GET_OUTCOME_CREATED_RESERVATIONS_REQUEST,
  GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
} from './actionTypes';
import {
  approveReservationFailure,
  approveReservationSuccess,
  cancelReservationFailure,
  cancelReservationSuccess,
  createReservationFailure,
  createReservationSuccess,
  finishReservationFailure,
  finishReservationSuccess,
  getIncomeCreatedReservationsFailure,
  getIncomeCreatedReservationsSuccess,
  getIncomeInProgressReservationsFailure,
  getIncomeInProgressReservationsSuccess,
  getOutcomeCreatedReservationsFailure,
  getOutcomeCreatedReservationsSuccess,
  getOutcomeInProgressReservationsFailure,
  getOutcomeInProgressReservationsSuccess,
} from './actions';
import {
  ApproveReservationRequest,
  CancelReservationRequest,
  CreateReservationRequest,
  FinishReservationRequest,
  Reservation,
} from './types';
import {
  approveReservationApi,
  cancelReservationApi,
  createReservationApi,
  finishReservationApi,
  getUsersIncomeCreatedReservationsApi,
  getUsersIncomeInProgressReservationsApi,
} from '../../api/reservationsApi';
import { getUsername } from '../users/selectors';
import { ApiResponse } from '../../api/types';
import { getUsersReservationsCreatedApi, getUsersReservationsInProgressApi } from '../../api/usersApi';
import { setSnackbarTypeError, setSnackbarTypeSuccess } from '../app/actions';
import { t } from '@lingui/macro';
import { invalidateDevices } from '../devices/actions';

export function* createReservationSaga({ dateStart, dateEnd, deviceId }: CreateReservationRequest) {
  try {
    yield call(createReservationApi, dateStart, dateEnd, deviceId);
    yield put(createReservationSuccess());
    yield put(invalidateDevices());
    yield put(setSnackbarTypeSuccess(t`Reservation was created`));
  } catch (error) {
    yield put(createReservationFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not create reservation`));
  }
}

export function* getIncomeCreatedReservationsSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<Reservation[]> = yield call(getUsersIncomeCreatedReservationsApi, username);
    yield put(getIncomeCreatedReservationsSuccess(response.data));
  } catch (error) {
    yield put(getIncomeCreatedReservationsFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load reservations`));
  }
}

export function* getIncomeInProgressReservationsSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<Reservation[]> = yield call(getUsersIncomeInProgressReservationsApi, username);
    yield put(getIncomeInProgressReservationsSuccess(response.data));
  } catch (error) {
    yield put(getIncomeInProgressReservationsFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load reservations`));
  }
}

export function* approveReservationSaga({ id }: ApproveReservationRequest) {
  try {
    yield call(approveReservationApi, id);
    yield put(approveReservationSuccess());
    yield put(setSnackbarTypeSuccess(t`Reservation was approved`));
  } catch (error) {
    yield put(approveReservationFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Reservation could not be approved`));
  }
}

export function* cancelReservationSaga({ id }: CancelReservationRequest) {
  try {
    yield call(cancelReservationApi, id);
    yield put(cancelReservationSuccess());
    yield put(setSnackbarTypeSuccess(t`Reservation was canceled`));
  } catch (error) {
    yield put(cancelReservationFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Reservation could not be canceled`));
  }
}

export function* finishReservationSaga({ id }: FinishReservationRequest) {
  try {
    yield call(finishReservationApi, id);
    yield put(finishReservationSuccess());
    yield put(setSnackbarTypeSuccess(t`Reservation was finished`));
  } catch (error) {
    yield put(finishReservationFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Reservation could not be finished`));
  }
}

export function* getOutcomeCreatedReservationsSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<Reservation[]> = yield call(getUsersReservationsCreatedApi, username);
    yield put(getOutcomeCreatedReservationsSuccess(response.data));
  } catch (error) {
    yield put(getOutcomeCreatedReservationsFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load reservations`));
  }
}

export function* getOutcomeInProgressReservationsSaga() {
  try {
    const username: string = yield select(getUsername);
    const response: ApiResponse<Reservation[]> = yield call(getUsersReservationsInProgressApi, username);
    yield put(getOutcomeInProgressReservationsSuccess(response.data));
  } catch (error) {
    yield put(getOutcomeInProgressReservationsFailure({ error: error.message }));
    yield put(setSnackbarTypeError(t`Could not load reservations`));
  }
}

export default function* () {
  yield all([
    takeEvery(CREATE_RESERVATION_REQUEST, createReservationSaga),
    takeEvery(GET_INCOME_CREATED_RESERVATIONS_REQUEST, getIncomeCreatedReservationsSaga),
    takeEvery(GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST, getIncomeInProgressReservationsSaga),
    takeEvery(APPROVE_RESERVATION_REQUEST, approveReservationSaga),
    takeEvery(CANCEL_RESERVATION_REQUEST, cancelReservationSaga),
    takeEvery(FINISH_RESERVATION_REQUEST, finishReservationSaga),
    takeEvery(GET_OUTCOME_CREATED_RESERVATIONS_REQUEST, getOutcomeCreatedReservationsSaga),
    takeEvery(GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST, getOutcomeInProgressReservationsSaga),
  ]);
}
