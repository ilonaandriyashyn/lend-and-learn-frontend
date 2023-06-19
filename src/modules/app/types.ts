import { CHANGE_LANG, SNACKBAR_CLEAR, SNACKBAR_ERROR, SNACKBAR_SUCCESS, SNACKBAR_WARNING } from './actionTypes';

export interface AppState {
  lang: string;
  snackbar: {
    open: boolean;
    variant: 'success' | 'warning' | 'error';
    text: string;
  };
}

interface ChangeLangAction {
  type: typeof CHANGE_LANG;
  lang: string;
}

interface SetSnackbarTypeSuccess {
  type: typeof SNACKBAR_SUCCESS;
  text: string;
}

interface SetSnackbarTypeWarning {
  type: typeof SNACKBAR_WARNING;
  text: string;
}

interface SetSnackbarTypeError {
  type: typeof SNACKBAR_ERROR;
  text: string;
}

interface SnackbarClear {
  type: typeof SNACKBAR_CLEAR;
}

export type AppActionTypes = ChangeLangAction | SetSnackbarTypeSuccess | SetSnackbarTypeWarning | SetSnackbarTypeError | SnackbarClear;
