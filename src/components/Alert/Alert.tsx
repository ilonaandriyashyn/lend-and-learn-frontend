import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert as MaterialAlert } from '@material-ui/lab';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { getSnackbarOpen, getSnackbarText, getSnackbarVariant } from '../../modules/app/selectors';
import { clearSnackbar } from '../../modules/app/actions';

interface AlertProps {
  variant: 'success' | 'warning' | 'error';
  open: boolean;
  text: string;
  onCloseSnackbar: () => void;
}

const Alert = ({ variant, open, text, onCloseSnackbar }: AlertProps): JSX.Element => (
  <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={onCloseSnackbar}>
    <MaterialAlert onClose={onCloseSnackbar} severity={variant}>
      {text}
    </MaterialAlert>
  </Snackbar>
);

const mapStateToProps = (state: RootState) => ({
  open: getSnackbarOpen(state),
  variant: getSnackbarVariant(state),
  text: getSnackbarText(state),
});

const mapDispatchToProps = {
  onCloseSnackbar: clearSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
