import { RootState } from '../reducer';

export const getToken = (state: RootState): string | null => state.auth.accessToken;

export const isLoggedIn = (state: RootState): boolean => state.auth.isLoggedIn;
