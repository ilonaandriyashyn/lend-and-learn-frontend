import {
  APPROVE_RESERVATION_FAILURE,
  APPROVE_RESERVATION_REQUEST,
  APPROVE_RESERVATION_SUCCESS,
  CANCEL_RESERVATION_FAILURE,
  CANCEL_RESERVATION_REQUEST,
  CANCEL_RESERVATION_SUCCESS,
  CREATE_RESERVATION_FAILURE,
  CREATE_RESERVATION_REQUEST,
  CREATE_RESERVATION_SUCCESS,
  FINISH_RESERVATION_FAILURE,
  FINISH_RESERVATION_REQUEST,
  FINISH_RESERVATION_SUCCESS,
  GET_INCOME_CREATED_RESERVATIONS_FAILURE,
  GET_INCOME_CREATED_RESERVATIONS_REQUEST,
  GET_INCOME_CREATED_RESERVATIONS_SUCCESS,
  GET_INCOME_IN_PROGRESS_RESERVATIONS_FAILURE,
  GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
  GET_INCOME_IN_PROGRESS_RESERVATIONS_SUCCESS,
  GET_OUTCOME_CREATED_RESERVATIONS_FAILURE,
  GET_OUTCOME_CREATED_RESERVATIONS_REQUEST,
  GET_OUTCOME_CREATED_RESERVATIONS_SUCCESS,
  GET_OUTCOME_IN_PROGRESS_RESERVATIONS_FAILURE,
  GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
  GET_OUTCOME_IN_PROGRESS_RESERVATIONS_SUCCESS,
} from './actionTypes';
import {
  ActionFailurePayload,
  GetIncomeCreatedReservationsSuccessPayload,
  GetIncomeInProgressReservationsSuccessPayload,
  GetOutcomeCreatedReservationsSuccessPayload,
  GetOutcomeInProgressReservationsSuccessPayload,
  ReservationsActionTypes,
} from './types';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export const createReservationRequest = (
  dateStart: MaterialUiPickersDate,
  dateEnd: MaterialUiPickersDate,
  deviceId: number,
): ReservationsActionTypes => ({
  type: CREATE_RESERVATION_REQUEST,
  dateStart,
  dateEnd,
  deviceId,
});

export const createReservationSuccess = (): ReservationsActionTypes => ({
  type: CREATE_RESERVATION_SUCCESS,
});

export const createReservationFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: CREATE_RESERVATION_FAILURE,
  payload,
});

export const getIncomeCreatedReservationsRequest = (): ReservationsActionTypes => ({
  type: GET_INCOME_CREATED_RESERVATIONS_REQUEST,
});

export const getIncomeCreatedReservationsSuccess = (payload: GetIncomeCreatedReservationsSuccessPayload): ReservationsActionTypes => ({
  type: GET_INCOME_CREATED_RESERVATIONS_SUCCESS,
  payload,
});

export const getIncomeCreatedReservationsFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: GET_INCOME_CREATED_RESERVATIONS_FAILURE,
  payload,
});

export const getIncomeInProgressReservationsRequest = (): ReservationsActionTypes => ({
  type: GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
});

export const getIncomeInProgressReservationsSuccess = (
  payload: GetIncomeInProgressReservationsSuccessPayload,
): ReservationsActionTypes => ({
  type: GET_INCOME_IN_PROGRESS_RESERVATIONS_SUCCESS,
  payload,
});

export const getIncomeInProgressReservationsFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: GET_INCOME_IN_PROGRESS_RESERVATIONS_FAILURE,
  payload,
});

export const approveReservationRequest = (id: number): ReservationsActionTypes => ({
  type: APPROVE_RESERVATION_REQUEST,
  id,
});

export const approveReservationSuccess = (): ReservationsActionTypes => ({
  type: APPROVE_RESERVATION_SUCCESS,
});

export const approveReservationFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: APPROVE_RESERVATION_FAILURE,
  payload,
});

export const cancelReservationRequest = (id: number): ReservationsActionTypes => ({
  type: CANCEL_RESERVATION_REQUEST,
  id,
});

export const cancelReservationSuccess = (): ReservationsActionTypes => ({
  type: CANCEL_RESERVATION_SUCCESS,
});

export const cancelReservationFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: CANCEL_RESERVATION_FAILURE,
  payload,
});

export const finishReservationRequest = (id: number): ReservationsActionTypes => ({
  type: FINISH_RESERVATION_REQUEST,
  id,
});

export const finishReservationSuccess = (): ReservationsActionTypes => ({
  type: FINISH_RESERVATION_SUCCESS,
});

export const finishReservationFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: FINISH_RESERVATION_FAILURE,
  payload,
});

export const getOutcomeCreatedReservationsRequest = (): ReservationsActionTypes => ({
  type: GET_OUTCOME_CREATED_RESERVATIONS_REQUEST,
});

export const getOutcomeCreatedReservationsSuccess = (payload: GetOutcomeCreatedReservationsSuccessPayload): ReservationsActionTypes => ({
  type: GET_OUTCOME_CREATED_RESERVATIONS_SUCCESS,
  payload,
});

export const getOutcomeCreatedReservationsFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: GET_OUTCOME_CREATED_RESERVATIONS_FAILURE,
  payload,
});

export const getOutcomeInProgressReservationsRequest = (): ReservationsActionTypes => ({
  type: GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST,
});

export const getOutcomeInProgressReservationsSuccess = (
  payload: GetOutcomeInProgressReservationsSuccessPayload,
): ReservationsActionTypes => ({
  type: GET_OUTCOME_IN_PROGRESS_RESERVATIONS_SUCCESS,
  payload,
});

export const getOutcomeInProgressReservationsFailure = (payload: ActionFailurePayload): ReservationsActionTypes => ({
  type: GET_OUTCOME_IN_PROGRESS_RESERVATIONS_FAILURE,
  payload,
});
