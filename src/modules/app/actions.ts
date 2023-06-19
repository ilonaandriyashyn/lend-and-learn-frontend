import { CHANGE_LANG, SNACKBAR_CLEAR, SNACKBAR_ERROR, SNACKBAR_SUCCESS, SNACKBAR_WARNING } from './actionTypes';
import { AppActionTypes } from './types';

export const changeLangAction = (lang: string): AppActionTypes => ({
  type: CHANGE_LANG,
  lang,
});

export const setSnackbarTypeSuccess = (text: string): AppActionTypes => ({
  type: SNACKBAR_SUCCESS,
  text,
});

export const setSnackbarTypeWarning = (text: string): AppActionTypes => ({
  type: SNACKBAR_WARNING,
  text,
});

export const setSnackbarTypeError = (text: string): AppActionTypes => ({
  type: SNACKBAR_ERROR,
  text,
});

export const clearSnackbar = (): AppActionTypes => ({
  type: SNACKBAR_CLEAR,
});
