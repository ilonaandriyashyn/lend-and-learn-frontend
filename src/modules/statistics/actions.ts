import { GET_MY_DEVICES_STATISTICS_FAILURE, GET_MY_DEVICES_STATISTICS_REQUEST, GET_MY_DEVICES_STATISTICS_SUCCESS } from './actionTypes';
import { FailurePayload, MyDevicesStatistics, StatisticsActionTypes } from './types';

export const getMyDevicesStatisticsRequest = (): StatisticsActionTypes => ({
  type: GET_MY_DEVICES_STATISTICS_REQUEST,
});

export const getMyDevicesStatisticsSuccess = (payload: MyDevicesStatistics): StatisticsActionTypes => ({
  type: GET_MY_DEVICES_STATISTICS_SUCCESS,
  payload,
});

export const getMyDevicesStatisticsFailure = (payload: FailurePayload): StatisticsActionTypes => ({
  type: GET_MY_DEVICES_STATISTICS_FAILURE,
  payload,
});
