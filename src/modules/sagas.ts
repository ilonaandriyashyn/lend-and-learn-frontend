import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import devicesSagas from './devices/saga';
import reservationsSagas from './reservations/saga';
import statisticsSagas from './statistics/saga';
import usersSagas from './users/saga';

export default function* () {
  yield all([authSagas(), devicesSagas(), reservationsSagas(), statisticsSagas(), usersSagas()]);
}
