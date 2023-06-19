import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Trans } from '@lingui/macro';
import { connect } from 'react-redux';
import { createReservationRequest } from '../../modules/reservations/actions';
import { Device } from '../../modules/devices/types';
import moment from 'moment';
import 'date-fns';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Grid } from '@material-ui/core';

interface CreateReservationDialogProps {
  open: boolean;
  onCancel: () => void;
  onCreateReservation: (dateStart: MaterialUiPickersDate, dateEnd: MaterialUiPickersDate, deviceId: number) => void;
  device: Device;
}

const CreateReservationDialog = ({ open, onCancel, onCreateReservation, device }: CreateReservationDialogProps) => {
  const isDateInRange = (date: MaterialUiPickersDate): boolean => {
    if (date === null) {
      return false;
    }
    return device.reservations.some((reservation) => {
      const start = moment(reservation.dateStart);
      const end = moment(reservation.dateEnd);
      if (date.isBetween(start, end, 'day', '[]')) {
        return true;
      }
    });
  };

  const [selectedStartDate, setSelectedStartDate] = useState<MaterialUiPickersDate | null>(null);

  const [selectedEndDate, setSelectedEndDate] = useState<MaterialUiPickersDate | null>(null);

  const handleCreateReservation = () => {
    onCreateReservation(selectedStartDate, selectedEndDate, device.id);
    onCancel();
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const hasMiddleCollision = (date: MaterialUiPickersDate): boolean => {
    if (selectedStartDate === null) {
      return false;
    }
    if (date === null) {
      return false;
    }
    return device.reservations.some((reservation) => {
      if (selectedStartDate.isBefore(reservation.dateStart, 'day') && date.isAfter(reservation.dateEnd, 'day')) {
        return true;
      }
    });
  };

  const isCreateButtonDisabled = () => {
    if (!selectedStartDate || !selectedEndDate) {
      return true;
    }
    if (selectedStartDate.isAfter(selectedEndDate, 'day')) {
      return true;
    }
    return hasMiddleCollision(selectedEndDate);
  };

  return (
    <Dialog open={open} onClose={onCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <Trans>Create reservation</Trans>
      </DialogTitle>
      <DialogContent>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container justify="space-between">
            <Grid item xs={5}>
              <DatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id="date-picker-start"
                label={<Trans>Select start date</Trans>}
                value={selectedStartDate}
                onChange={setSelectedStartDate}
                disablePast
                shouldDisableDate={(date) => isDateInRange(date)}
              />
            </Grid>
            <Grid item xs={5}>
              <DatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id="date-picker-end"
                label={<Trans>Select end date</Trans>}
                value={selectedEndDate}
                minDate={selectedStartDate || moment()}
                onChange={setSelectedEndDate}
                disablePast
                shouldDisableDate={(date) => {
                  return isDateInRange(date) || hasMiddleCollision(date);
                }}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          <Trans>Cancel</Trans>
        </Button>
        <Button disabled={isCreateButtonDisabled()} onClick={handleCreateReservation} color="primary">
          <Trans>Create</Trans>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapDispatchToProps = {
  onCreateReservation: createReservationRequest,
};

export default connect(null, mapDispatchToProps)(CreateReservationDialog);
