import React from 'react';
import ReservationsCreated from './ReservationsCreated';
import ReservationsInProgress from './ReservationsInProgress';

const OutcomingReservations = (): JSX.Element => (
  <>
    <ReservationsCreated />
    <ReservationsInProgress />
  </>
);

export default OutcomingReservations;
