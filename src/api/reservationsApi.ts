import { ApiResponse } from './types';
import http from './http';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Reservation } from '../modules/reservations/types';

export const createReservationApi = async (
  dateStart: MaterialUiPickersDate,
  dateEnd: MaterialUiPickersDate,
  deviceId: number,
): Promise<ApiResponse<never>> => http.post('/reservations', { dateStart, dateEnd, deviceId });

export const getUsersIncomeCreatedReservationsApi = async (username: string): Promise<ApiResponse<Reservation[]>> =>
  http.get(`/reservations/${username}/created`);

export const getUsersIncomeInProgressReservationsApi = async (username: string): Promise<ApiResponse<Reservation[]>> =>
  http.get(`/reservations/${username}/in-progress`);

export const approveReservationApi = async (id: number): Promise<ApiResponse<never>> => http.put(`/reservations/${id}/status-approve`);

export const cancelReservationApi = async (id: number): Promise<ApiResponse<never>> => http.put(`/reservations/${id}/status-cancel`);

export const finishReservationApi = async (id: number): Promise<ApiResponse<never>> => http.put(`/reservations/${id}/status-finish`);
