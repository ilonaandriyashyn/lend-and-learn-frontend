import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import auth from './auth/reducer';
import users from './users/reducer';
import devices from './devices/reducer';
import app from './app/reducer';
import reservations from './reservations/reducer';
import statistics from './statistics/reducer';
import { AuthState } from './auth/types';
import { UsersState } from './users/types';
import { DevicesState } from './devices/types';
import { AppState } from './app/types';
import { ReservationsState } from './reservations/types';
import { StatisticsState } from './statistics/types';

export interface RootState {
  router: RouterState;
  auth: AuthState;
  users: UsersState;
  devices: DevicesState;
  app: AppState;
  reservations: ReservationsState;
  statistics: StatisticsState;
}

const createRootReducer = (history: History) =>
  combineReducers<RootState>({
    router: connectRouter(history),
    auth,
    users,
    devices,
    app,
    reservations,
    statistics,
  });

export default createRootReducer;
