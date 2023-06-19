import { AppActionTypes, AppState } from './types';
import { CHANGE_LANG, SNACKBAR_CLEAR, SNACKBAR_ERROR, SNACKBAR_SUCCESS, SNACKBAR_WARNING } from './actionTypes';
import { LocalStorageKeys } from '../../consts/localStorageKeys';
import { Langs } from '../../consts/common';

const getLang = (): string => {
  const langItem = localStorage.getItem(LocalStorageKeys.Lang);
  if (!langItem) {
    return Langs.En;
  }
  return langItem;
};

const initialState: AppState = {
  lang: getLang(),
  snackbar: {
    open: false,
    variant: 'success',
    text: '',
  },
};

export default (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case CHANGE_LANG:
      localStorage.setItem(LocalStorageKeys.Lang, action.lang);
      return {
        ...state,
        lang: action.lang,
      };
    case SNACKBAR_SUCCESS:
      return {
        ...state,
        snackbar: {
          open: true,
          variant: 'success',
          text: action.text,
        },
      };
    case SNACKBAR_WARNING:
      return {
        ...state,
        snackbar: {
          open: true,
          variant: 'warning',
          text: action.text,
        },
      };
    case SNACKBAR_ERROR:
      return {
        ...state,
        snackbar: {
          open: true,
          variant: 'error',
          text: action.text,
        },
      };
    case SNACKBAR_CLEAR:
      return {
        ...state,
        snackbar: {
          ...initialState.snackbar,
          open: false,
        },
      };
    default:
      return state;
  }
};
