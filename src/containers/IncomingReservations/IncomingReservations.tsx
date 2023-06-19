import React from 'react';
import ReservationsToApprove from './ReservationsToApprove';
import ReservationsToFinish from './ReservationsToFinish';

const IncomingReservations = (): JSX.Element => (
  <>
    <ReservationsToApprove />
    <ReservationsToFinish />
  </>
);

export default IncomingReservations;
