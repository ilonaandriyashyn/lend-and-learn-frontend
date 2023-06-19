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
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { User } from '../users/types';
import { Device } from '../devices/types';

export interface Reservation {
  id: number;
  dateStart: string;
  dateEnd: string;
  status: number;
  user: User;
  device: Device;
}

export interface ReservationsState {
  incomingCreatedReservations: Reservation[];
  incomingInProgressReservations: Reservation[];
  outcomeCreatedReservations: Reservation[];
  outcomeInProgressReservations: Reservation[];
  isInvalid: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ActionFailurePayload {
  error: string;
}

export interface CreateReservationRequest {
  type: typeof CREATE_RESERVATION_REQUEST;
  dateStart: MaterialUiPickersDate;
  dateEnd: MaterialUiPickersDate;
  deviceId: number;
}

interface CreateReservationSuccess {
  type: typeof CREATE_RESERVATION_SUCCESS;
}

interface CreateReservationFailure {
  type: typeof CREATE_RESERVATION_FAILURE;
  payload: ActionFailurePayload;
}

interface GetIncomeCreatedReservationsRequest {
  type: typeof GET_INCOME_CREATED_RESERVATIONS_REQUEST;
}

export type GetIncomeCreatedReservationsSuccessPayload = Reservation[];

interface GetIncomeCreatedReservationsSuccess {
  type: typeof GET_INCOME_CREATED_RESERVATIONS_SUCCESS;
  payload: GetIncomeCreatedReservationsSuccessPayload;
}

interface GetIncomeCreatedReservationsFailure {
  type: typeof GET_INCOME_CREATED_RESERVATIONS_FAILURE;
  payload: ActionFailurePayload;
}

interface GetIncomeInProgressReservationsRequest {
  type: typeof GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST;
}

export type GetIncomeInProgressReservationsSuccessPayload = Reservation[];

interface GetIncomeInProgressReservationsSuccess {
  type: typeof GET_INCOME_IN_PROGRESS_RESERVATIONS_SUCCESS;
  payload: GetIncomeInProgressReservationsSuccessPayload;
}

interface GetIncomeInProgressReservationsFailure {
  type: typeof GET_INCOME_IN_PROGRESS_RESERVATIONS_FAILURE;
  payload: ActionFailurePayload;
}

export interface ApproveReservationRequest {
  type: typeof APPROVE_RESERVATION_REQUEST;
  id: number;
}

interface ApproveReservationSuccess {
  type: typeof APPROVE_RESERVATION_SUCCESS;
}

interface ApproveReservationFailure {
  type: typeof APPROVE_RESERVATION_FAILURE;
  payload: ActionFailurePayload;
}

export interface CancelReservationRequest {
  type: typeof CANCEL_RESERVATION_REQUEST;
  id: number;
}

interface CancelReservationSuccess {
  type: typeof CANCEL_RESERVATION_SUCCESS;
}

interface CancelReservationFailure {
  type: typeof CANCEL_RESERVATION_FAILURE;
  payload: ActionFailurePayload;
}

export interface FinishReservationRequest {
  type: typeof FINISH_RESERVATION_REQUEST;
  id: number;
}

interface FinishReservationSuccess {
  type: typeof FINISH_RESERVATION_SUCCESS;
}

interface FinishReservationFailure {
  type: typeof FINISH_RESERVATION_FAILURE;
  payload: ActionFailurePayload;
}

interface GetOutcomeCreatedReservationsRequest {
  type: typeof GET_OUTCOME_CREATED_RESERVATIONS_REQUEST;
}

export type GetOutcomeCreatedReservationsSuccessPayload = Reservation[];

interface GetOutcomeCreatedReservationsSuccess {
  type: typeof GET_OUTCOME_CREATED_RESERVATIONS_SUCCESS;
  payload: GetOutcomeCreatedReservationsSuccessPayload;
}

interface GetOutcomeCreatedReservationsFailure {
  type: typeof GET_OUTCOME_CREATED_RESERVATIONS_FAILURE;
  payload: ActionFailurePayload;
}

interface GetOutcomeInProgressReservationsRequest {
  type: typeof GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST;
}

export type GetOutcomeInProgressReservationsSuccessPayload = Reservation[];

interface GetOutcomeInProgressReservationsSuccess {
  type: typeof GET_OUTCOME_IN_PROGRESS_RESERVATIONS_SUCCESS;
  payload: GetOutcomeInProgressReservationsSuccessPayload;
}

interface GetOutcomeInProgressReservationsFailure {
  type: typeof GET_OUTCOME_IN_PROGRESS_RESERVATIONS_FAILURE;
  payload: ActionFailurePayload;
}

export type ReservationsActionTypes =
  | CreateReservationRequest
  | CreateReservationSuccess
  | CreateReservationFailure
  | GetIncomeCreatedReservationsRequest
  | GetIncomeCreatedReservationsSuccess
  | GetIncomeCreatedReservationsFailure
  | GetIncomeInProgressReservationsRequest
  | GetIncomeInProgressReservationsSuccess
  | GetIncomeInProgressReservationsFailure
  | ApproveReservationRequest
  | ApproveReservationSuccess
  | ApproveReservationFailure
  | CancelReservationRequest
  | CancelReservationSuccess
  | CancelReservationFailure
  | FinishReservationRequest
  | FinishReservationSuccess
  | FinishReservationFailure
  | GetOutcomeCreatedReservationsRequest
  | GetOutcomeCreatedReservationsSuccess
  | GetOutcomeCreatedReservationsFailure
  | GetOutcomeInProgressReservationsRequest
  | GetOutcomeInProgressReservationsSuccess
  | GetOutcomeInProgressReservationsFailure;
