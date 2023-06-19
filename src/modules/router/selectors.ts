import { RootState } from '../reducer';

export const getCurrentLocation = (state: RootState) => state.router.location.pathname;

export const getCurrentLocationParamCode = (state: RootState): string | null => state.router.location?.query?.code || null;
