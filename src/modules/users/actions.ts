import { FailurePayload, User, UsersActionTypes } from './types';
import {
  CLEAR_CURRENT_USER,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SAVE_CURRENT_USER,
  UPDATE_CURRENT_USER_FAILURE,
  UPDATE_CURRENT_USER_REQUEST,
  UPDATE_CURRENT_USER_SUCCESS,
} from './actionTypes';

export const saveCurrentUser = (payload: User): UsersActionTypes => ({
  type: SAVE_CURRENT_USER,
  payload,
});

export const clearCurrentUser = (): UsersActionTypes => ({
  type: CLEAR_CURRENT_USER,
});

export const getUserRequest = (username: string): UsersActionTypes => ({
  type: GET_USER_REQUEST,
  username,
});

export const getUserSuccess = (payload: User): UsersActionTypes => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (payload: FailurePayload): UsersActionTypes => ({
  type: GET_USER_FAILURE,
  payload,
});

export const updateCurrentUserRequest = (): UsersActionTypes => ({
  type: UPDATE_CURRENT_USER_REQUEST,
});

export const updateCurrentUserSuccess = (payload: User): UsersActionTypes => ({
  type: UPDATE_CURRENT_USER_SUCCESS,
  payload,
});

export const updateCurrentUserFailure = (payload: FailurePayload): UsersActionTypes => ({
  type: UPDATE_CURRENT_USER_FAILURE,
  payload,
});
