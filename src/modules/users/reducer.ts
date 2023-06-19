import { User, UsersActionTypes, UsersState } from './types';
import {
  CLEAR_CURRENT_USER,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  SAVE_CURRENT_USER,
  UPDATE_CURRENT_USER_FAILURE,
  UPDATE_CURRENT_USER_REQUEST,
  UPDATE_CURRENT_USER_SUCCESS,
} from './actionTypes';
import { LocalStorageKeys } from '../../consts/localStorageKeys';

const getUser = (): User => {
  const userItem = localStorage.getItem(LocalStorageKeys.User);
  if (!userItem) {
    return {
      id: null,
      firstName: null,
      lastName: null,
      username: null,
      email: null,
    };
  }
  return JSON.parse(userItem);
};

const initialState: UsersState = {
  currentUser: getUser(),
  isLoading: false,
  error: null,
  profile: {
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    email: null,
  },
};

export default (state = initialState, action: UsersActionTypes): UsersState => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return {
        ...initialState,
        currentUser: action.payload,
      };
    case CLEAR_CURRENT_USER:
      return initialState;
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case UPDATE_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case UPDATE_CURRENT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
