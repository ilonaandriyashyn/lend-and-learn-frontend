import { GET_MY_DEVICES_STATISTICS_FAILURE, GET_MY_DEVICES_STATISTICS_REQUEST, GET_MY_DEVICES_STATISTICS_SUCCESS } from './actionTypes';

export interface MyDevicesStatistics {
  count: number;
  lent: number;
  available: number;
}

export interface StatisticsState {
  myDevices: MyDevicesStatistics;
  isLoading: boolean;
  error: string | null;
}

export interface FailurePayload {
  error: string;
}

interface GetMyDevicesStatisticsRequest {
  type: typeof GET_MY_DEVICES_STATISTICS_REQUEST;
}

// export type GetDevicesSuccessPayload = Device[];

interface GetMyDevicesStatisticsSuccess {
  type: typeof GET_MY_DEVICES_STATISTICS_SUCCESS;
  payload: MyDevicesStatistics;
}

interface GetMyDevicesStatisticsFailure {
  type: typeof GET_MY_DEVICES_STATISTICS_FAILURE;
  payload: FailurePayload;
}

export type StatisticsActionTypes = GetMyDevicesStatisticsRequest | GetMyDevicesStatisticsSuccess | GetMyDevicesStatisticsFailure;
