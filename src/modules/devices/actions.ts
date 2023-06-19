import { Device, DevicesActionTypes, FailurePayload, GetDevicesSuccessPayload, GetMyDevicesSuccessPayload } from './types';
import {
  CREATE_DEVICE_REQUEST,
  CREATE_DEVICE_SUCCESS,
  DELETE_DEVICE_FAILURE,
  DELETE_DEVICE_REQUEST,
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
  UPDATE_DEVICE_REQUEST,
  UPDATE_DEVICE_SUCCESS,
} from './actionTypes';

export const getDevicesRequest = (limit: number, offset: number): DevicesActionTypes => ({
  type: GET_DEVICES_REQUEST,
  limit,
  offset,
});

export const getDevicesSuccess = (payload: GetDevicesSuccessPayload): DevicesActionTypes => ({
  type: GET_DEVICES_SUCCESS,
  payload,
});

export const getDevicesFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: GET_DEVICES_FAILURE,
  payload,
});

export const createDeviceRequest = (name: string, description: string): DevicesActionTypes => ({
  type: CREATE_DEVICE_REQUEST,
  name,
  description,
});

export const createDeviceSuccess = (): DevicesActionTypes => ({
  type: CREATE_DEVICE_SUCCESS,
});

export const createDeviceFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: GET_DEVICES_FAILURE,
  payload,
});

export const deleteDeviceRequest = (id: number) => ({
  type: DELETE_DEVICE_REQUEST,
  id,
});

export const deleteDeviceSuccess = (): DevicesActionTypes => ({
  type: DELETE_DEVICE_SUCCESS,
});

export const deleteDeviceFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: DELETE_DEVICE_FAILURE,
  payload,
});

export const getMyDevicesRequest = (limit: number, offset: number): DevicesActionTypes => ({
  type: GET_MY_DEVICES_REQUEST,
  limit,
  offset,
});

export const getMyDevicesSuccess = (payload: GetMyDevicesSuccessPayload): DevicesActionTypes => ({
  type: GET_MY_DEVICES_SUCCESS,
  payload,
});

export const getMyDevicesFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: GET_MY_DEVICES_FAILURE,
  payload,
});

export const getDeviceRequest = (id: string | number): DevicesActionTypes => ({
  type: GET_DEVICE_REQUEST,
  id,
});

export const getDeviceSuccess = (payload: Device): DevicesActionTypes => ({
  type: GET_DEVICE_SUCCESS,
  payload,
});

export const getDeviceFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: GET_DEVICE_FAILURE,
  payload,
});

export const invalidateDevices = (): DevicesActionTypes => ({
  type: INVALIDATE_DEVICE,
});

export const updateDeviceRequest = (id: string | number, name: string, description: string): DevicesActionTypes => ({
  type: UPDATE_DEVICE_REQUEST,
  id,
  name,
  description,
});

export const updateDeviceSuccess = (): DevicesActionTypes => ({
  type: UPDATE_DEVICE_SUCCESS,
});

export const updateDeviceFailure = (payload: FailurePayload): DevicesActionTypes => ({
  type: UPDATE_DEVICE_FAILURE,
  payload,
});
