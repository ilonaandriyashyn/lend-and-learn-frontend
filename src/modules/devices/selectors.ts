import { RootState } from '../reducer';
import { Device } from './types';

export const getDevices = (state: RootState): Device[] => state.devices.devices;

export const getIsInvalidDevices = (state: RootState): boolean => state.devices.isInvalid;

export const getCurrentDevice = (state: RootState): Device | null => state.devices.currentDevice;

export const getTotalDevicesCount = (state: RootState): number => state.devices.devicesTotal;
