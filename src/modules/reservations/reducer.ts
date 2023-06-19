import { ReservationsActionTypes, ReservationsState } from './types';
import {
  APPROVE_RESERVATION_FAILURE,
  APPROVE_RESERVATION_SUCCESS,
  CANCEL_RESERVATION_FAILURE,
  CANCEL_RESERVATION_SUCCESS,
  FINISH_RESERVATION_FAILURE,
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

const initialState: ReservationsState = {
  incomingCreatedReservations: [],
  incomingInProgressReservations: [],
  outcomeCreatedReservations: [],
  outcomeInProgressReservations: [],
  isInvalid: false,
  isLoading: false,
  error: null,
};

export default (state = initialState, action: ReservationsActionTypes): ReservationsState => {
  switch (action.type) {
    case GET_INCOME_CREATED_RESERVATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isInvalid: false,
        error: null,
      };
    case GET_INCOME_CREATED_RESERVATIONS_SUCCESS:
      return {
        ...state,
        incomingCreatedReservations: action.payload,
        isLoading: false,
        isInvalid: false,
        error: null,
      };
    case GET_INCOME_CREATED_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        incomingCreatedReservations: initialState.incomingCreatedReservations,
        isLoading: false,
        isInvalid: false,
      };
    case GET_INCOME_IN_PROGRESS_RESERVATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isInvalid: false,
        error: null,
      };
    case GET_INCOME_IN_PROGRESS_RESERVATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isInvalid: false,
        error: null,
        incomingInProgressReservations: action.payload,
      };
    case GET_INCOME_IN_PROGRESS_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        incomingInProgressReservations: initialState.incomingInProgressReservations,
        isLoading: false,
        isInvalid: false,
      };
    case APPROVE_RESERVATION_SUCCESS:
      return {
        ...state,
        isInvalid: true,
      };
    case APPROVE_RESERVATION_FAILURE:
      return {
        ...state,
        isInvalid: false,
        isLoading: false,
        error: action.payload.error,
      };
    case CANCEL_RESERVATION_SUCCESS:
      return {
        ...state,
        isInvalid: true,
      };
    case CANCEL_RESERVATION_FAILURE:
      return {
        ...initialState,
        isInvalid: false,
        isLoading: false,
        error: action.payload.error,
      };
    case FINISH_RESERVATION_SUCCESS:
      return {
        ...state,
        isInvalid: true,
      };
    case FINISH_RESERVATION_FAILURE:
      return {
        ...initialState,
        isInvalid: false,
        isLoading: false,
        error: action.payload.error,
      };
    case GET_OUTCOME_CREATED_RESERVATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isInvalid: false,
        error: null,
      };
    case GET_OUTCOME_CREATED_RESERVATIONS_SUCCESS:
      return {
        ...state,
        outcomeCreatedReservations: action.payload,
        isLoading: false,
        isInvalid: false,
        error: null,
      };
    case GET_OUTCOME_CREATED_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        outcomeCreatedReservations: initialState.outcomeCreatedReservations,
        isLoading: false,
        isInvalid: false,
      };
    case GET_OUTCOME_IN_PROGRESS_RESERVATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isInvalid: false,
        error: null,
      };
    case GET_OUTCOME_IN_PROGRESS_RESERVATIONS_SUCCESS:
      return {
        ...state,
        outcomeInProgressReservations: action.payload,
        isLoading: false,
        isInvalid: false,
        error: null,
      };
    case GET_OUTCOME_IN_PROGRESS_RESERVATIONS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        outcomeInProgressReservations: initialState.outcomeInProgressReservations,
        isLoading: false,
        isInvalid: false,
      };
    default:
      return state;
  }
};
