import { RootState } from '../reducer';
import { Reservation } from './types';

export const getIncomeCreatedReservations = (state: RootState): Reservation[] => state.reservations.incomingCreatedReservations;

export const getIncomeInProgressReservations = (state: RootState): Reservation[] => state.reservations.incomingInProgressReservations;

export const getIsInvalidReservations = (state: RootState): boolean => state.reservations.isInvalid;

export const getOutcomeCreatedReservations = (state: RootState): Reservation[] => state.reservations.outcomeCreatedReservations;

export const getOutcomeInProgressReservations = (state: RootState): Reservation[] => state.reservations.outcomeInProgressReservations;
