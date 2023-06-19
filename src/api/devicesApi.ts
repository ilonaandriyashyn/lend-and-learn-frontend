import { ApiResponse } from './types';
import http from './http';
import { Device, DevicesWithCount } from '../modules/devices/types';

export const getDeviceApi = async (id: number | string): Promise<ApiResponse<Device>> => http.get(`/devices/${id}`);

export const updateDeviceApi = async (id: number | string, name: string, description: string): Promise<ApiResponse<never>> =>
  http.put(`/devices/${id}`, { name, description });

export const getAllDevices = async (limit: number, offset: number): Promise<ApiResponse<DevicesWithCount>> =>
  http.get('/devices', { params: { limit, offset } });

export const createDevice = async (name: string, description: string, username: string): Promise<ApiResponse<never>> =>
  http.post('/devices', { name, description, username });

export const deleteDevice = async (id: number): Promise<ApiResponse<never>> => http.delete(`/devices/${id}`);
