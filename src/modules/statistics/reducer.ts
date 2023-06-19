import { StatisticsActionTypes, StatisticsState } from './types';
import { GET_MY_DEVICES_STATISTICS_FAILURE, GET_MY_DEVICES_STATISTICS_REQUEST, GET_MY_DEVICES_STATISTICS_SUCCESS } from './actionTypes';

const initialState: StatisticsState = {
  myDevices: {
    count: 0,
    lent: 0,
    available: 0,
  },
  isLoading: false,
  error: null,
};

export default (state = initialState, action: StatisticsActionTypes): StatisticsState => {
  switch (action.type) {
    case GET_MY_DEVICES_STATISTICS_REQUEST:
      return {
        ...initialState,
        myDevices: state.myDevices,
        isLoading: true,
      };
    case GET_MY_DEVICES_STATISTICS_SUCCESS:
      return {
        ...initialState,
        myDevices: action.payload,
      };
    case GET_MY_DEVICES_STATISTICS_FAILURE:
      return {
        ...initialState,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
