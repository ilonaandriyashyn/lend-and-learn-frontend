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

export interface FailurePayload {
  error: string;
}

export interface User {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  username: string | null;
  email: string | null;
}

export interface UsersState {
  currentUser: User;
  isLoading: boolean;
  error: string | null;
  profile: User;
}

interface SaveCurrentUser {
  type: typeof SAVE_CURRENT_USER;
  payload: User;
}

interface ClearCurrentUser {
  type: typeof CLEAR_CURRENT_USER;
}

export interface GetUserRequest {
  type: typeof GET_USER_REQUEST;
  username: string;
}

interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: User;
}

interface GetUserFailure {
  type: typeof GET_USER_FAILURE;
  payload: FailurePayload;
}

interface UpdateCurrentUserRequest {
  type: typeof UPDATE_CURRENT_USER_REQUEST;
}

interface UpdateCurrentUserSuccess {
  type: typeof UPDATE_CURRENT_USER_SUCCESS;
  payload: User;
}

interface UpdateCurrentUserFailure {
  type: typeof UPDATE_CURRENT_USER_FAILURE;
  payload: FailurePayload;
}

export type UsersActionTypes =
  | SaveCurrentUser
  | ClearCurrentUser
  | GetUserRequest
  | GetUserSuccess
  | GetUserFailure
  | UpdateCurrentUserRequest
  | UpdateCurrentUserSuccess
  | UpdateCurrentUserFailure;
