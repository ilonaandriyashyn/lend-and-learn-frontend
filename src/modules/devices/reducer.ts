import { DevicesActionTypes, DevicesState } from './types';
import {
  CREATE_DEVICE_FAILURE,
  CREATE_DEVICE_SUCCESS,
  DELETE_DEVICE_FAILURE,
  DELETE_DEVICE_SUCCESS,
  GET_DEVICE_FAILURE,
  GET_DEVICE_REQUEST,
  GET_DEVICE_SUCCESS,
  GET_DEVICES_FAILURE,
  GET_DEVICES_REQUEST,
  GET_DEVICES_SUCCESS,
  GET_MY_DEVICES_FAILURE,
  GET_MY_DEVICES_REQUEST,
  GET_MY_DEVICES_SUCCESS,
  INVALIDATE_DEVICE,
  UPDATE_DEVICE_FAILURE,
} from './actionTypes';

const initialState: DevicesState = {
  devices: [],
  devicesTotal: 0,
  isInvalid: false,
  isLoading: false,
  error: null,
  currentDevice: null,
};

export default (state = initialState, action: DevicesActionTypes): DevicesState => {
  switch (action.type) {
    case GET_DEVICES_REQUEST:
      return {
        ...initialState,
        devices: state.devices,
        devicesTotal: state.devicesTotal,
        isLoading: true,
      };
    case GET_DEVICES_SUCCESS:
      return {
        ...initialState,
        devices: action.payload.results,
        devicesTotal: action.payload.total,
      };
    case GET_DEVICES_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    case CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        isInvalid: true,
      };
    case CREATE_DEVICE_FAILURE:
      return {
        ...state,
        isInvalid: false,
        error: action.payload.error,
      };
    case DELETE_DEVICE_SUCCESS:
      return {
        ...state,
        isInvalid: true,
      };
    case DELETE_DEVICE_FAILURE:
      return {
        ...state,
        isInvalid: false,
        error: action.payload.error,
      };
    case GET_MY_DEVICES_REQUEST:
      return {
        ...initialState,
        devices: state.devices,
        devicesTotal: state.devicesTotal,
        isLoading: true,
      };
    case GET_MY_DEVICES_SUCCESS:
      return {
        ...initialState,
        devices: action.payload.results,
        devicesTotal: action.payload.total,
      };
    case GET_MY_DEVICES_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    case GET_DEVICE_REQUEST:
      return {
        ...state,
        isInvalid: false,
        currentDevice: initialState.currentDevice,
      };
    case GET_DEVICE_SUCCESS:
      return {
        ...state,
        isInvalid: false,
        currentDevice: action.payload,
      };
    case GET_DEVICE_FAILURE:
      return {
        ...state,
        isInvalid: false,
        error: action.payload.error,
      };
    case INVALIDATE_DEVICE:
      return {
        ...state,
        isInvalid: true,
      };
    case UPDATE_DEVICE_FAILURE:
      return {
        ...state,
        isInvalid: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
