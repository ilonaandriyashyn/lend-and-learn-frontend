import { RootState } from '../reducer';

export const getLang = (state: RootState): string => state.app.lang;

export const getSnackbarOpen = (state: RootState): boolean => state.app.snackbar.open;

export const getSnackbarVariant = (state: RootState): 'success' | 'warning' | 'error' => state.app.snackbar.variant;

export const getSnackbarText = (state: RootState): string => state.app.snackbar.text;
