import { ApiResponse } from './types';
import http from './http';
import { DevicesWithCount } from '../modules/devices/types';
import { Reservation } from '../modules/reservations/types';
import { MyDevicesStatistics } from '../modules/statistics/types';
import { User } from '../modules/users/types';

export const getUserApi = async (username: string): Promise<ApiResponse<User>> => http.get(`/users/${username}`);

export const updateUserApi = async (username: string): Promise<ApiResponse<User>> => http.put(`/users/${username}/update`);

export const getUsersDevicesApi = async (username: string, limit: number, offset: number): Promise<ApiResponse<DevicesWithCount>> =>
  http.get(`/users/${username}/devices`, { params: { limit, offset } });

export const getUsersReservationsCreatedApi = async (username: string): Promise<ApiResponse<Reservation[]>> =>
  http.get(`/users/${username}/reservations/created`);

export const getUsersReservationsInProgressApi = async (username: string): Promise<ApiResponse<Reservation[]>> =>
  http.get(`/users/${username}/reservations/in-progress`);

export const getUsersDevicesStatisticsApi = async (username: string): Promise<ApiResponse<MyDevicesStatistics>> =>
  http.get(`/users/${username}/devices/statistics`);
