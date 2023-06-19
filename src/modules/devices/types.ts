import {
  CREATE_DEVICE_FAILURE,
  CREATE_DEVICE_REQUEST,
  CREATE_DEVICE_SUCCESS,
  DELETE_DEVICE_FAILURE,
  DELETE_DEVICE_REQUEST,
  DELETE_DEVICE_SUCCESS,
  GET_DEVICES_FAILURE,
  GET_DEVICES_REQUEST,
  GET_DEVICES_SUCCESS,
  GET_MY_DEVICES_REQUEST,
  GET_MY_DEVICES_SUCCESS,
  GET_MY_DEVICES_FAILURE,
  GET_DEVICE_REQUEST,
  GET_DEVICE_SUCCESS,
  GET_DEVICE_FAILURE,
  INVALIDATE_DEVICE,
  UPDATE_DEVICE_REQUEST,
  UPDATE_DEVICE_SUCCESS,
  UPDATE_DEVICE_FAILURE,
} from './actionTypes';
import { User } from '../users/types';
import { Reservation } from '../reservations/types';

export interface Device {
  id: number;
  name: string;
  description?: string | null;
  owner: User;
  reservations: Reservation[];
  isBookedToday: boolean;
}

export interface DevicesState {
  devices: Device[];
  devicesTotal: number;
  isInvalid: boolean;
  isLoading: boolean;
  error: string | null;
  currentDevice: Device | null;
}

export interface DevicesWithCount {
  total: number;
  results: Device[];
}

export interface FailurePayload {
  error: string;
}

export interface GetDevicesRequest {
  type: typeof GET_DEVICES_REQUEST;
  limit: number;
  offset: number;
}

export type GetDevicesSuccessPayload = DevicesWithCount;

interface GetDevicesSuccess {
  type: typeof GET_DEVICES_SUCCESS;
  payload: GetDevicesSuccessPayload;
}

interface GetDevicesFailure {
  type: typeof GET_DEVICES_FAILURE;
  payload: FailurePayload;
}

export interface CreateDeviceRequest {
  type: typeof CREATE_DEVICE_REQUEST;
  name: string;
  description: string;
}

interface CreateDeviceSuccess {
  type: typeof CREATE_DEVICE_SUCCESS;
}

interface CreateDeviceFailure {
  type: typeof CREATE_DEVICE_FAILURE;
  payload: FailurePayload;
}

export interface DeleteDeviceRequest {
  type: typeof DELETE_DEVICE_REQUEST;
  id: number;
}

interface DeleteDeviceSuccess {
  type: typeof DELETE_DEVICE_SUCCESS;
}

interface DeleteDeviceFailure {
  type: typeof DELETE_DEVICE_FAILURE;
  payload: FailurePayload;
}

export interface GetMyDevicesRequest {
  type: typeof GET_MY_DEVICES_REQUEST;
  limit: number;
  offset: number;
}

export type GetMyDevicesSuccessPayload = DevicesWithCount;

interface GetMyDevicesSuccess {
  type: typeof GET_MY_DEVICES_SUCCESS;
  payload: GetMyDevicesSuccessPayload;
}

interface GetMyDevicesFailure {
  type: typeof GET_MY_DEVICES_FAILURE;
  payload: FailurePayload;
}

export interface GetDeviceRequest {
  type: typeof GET_DEVICE_REQUEST;
  id: string | number;
}

interface GetDeviceSuccess {
  type: typeof GET_DEVICE_SUCCESS;
  payload: Device;
}

interface GetDeviceFailure {
  type: typeof GET_DEVICE_FAILURE;
  payload: FailurePayload;
}

interface InvalidateDevices {
  type: typeof INVALIDATE_DEVICE;
}

export interface UpdateDeviceRequest {
  type: typeof UPDATE_DEVICE_REQUEST;
  id: string | number;
  name: string;
  description: string;
}

interface UpdateDeviceSuccess {
  type: typeof UPDATE_DEVICE_SUCCESS;
}

interface UpdateDeviceFailure {
  type: typeof UPDATE_DEVICE_FAILURE;
  payload: FailurePayload;
}

export type DevicesActionTypes =
  | GetDevicesRequest
  | GetDevicesSuccess
  | GetDevicesFailure
  | CreateDeviceRequest
  | CreateDeviceSuccess
  | CreateDeviceFailure
  | DeleteDeviceSuccess
  | DeleteDeviceFailure
  | GetMyDevicesRequest
  | GetMyDevicesSuccess
  | GetMyDevicesFailure
  | GetDeviceRequest
  | GetDeviceSuccess
  | GetDeviceFailure
  | InvalidateDevices
  | UpdateDeviceRequest
  | UpdateDeviceSuccess
  | UpdateDeviceFailure;
