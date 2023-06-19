import { RootState } from '../reducer';
import { MyDevicesStatistics } from './types';

export const getMyDevicesStatistics = (state: RootState): MyDevicesStatistics => state.statistics.myDevices;
