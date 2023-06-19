import React, { useEffect, useState } from 'react';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';
import { Device } from '../../modules/devices/types';
import { deleteDeviceRequest, getDeviceRequest } from '../../modules/devices/actions';
import { getCurrentDevice, getIsInvalidDevices } from '../../modules/devices/selectors';
import Link from '@material-ui/core/Link';
import { Paths } from '../../consts/paths';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import CreateReservationDialog from '../CreateReservationDialog/CreateReservationDialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { getUsername } from '../../modules/users/selectors';
import EditDeviceDialog from '../EditDeviceDialog/EditDeviceDialog';

const useStyles = makeStyles((theme) => ({
  icon: {
    '& svg': {
      width: '150px',
      height: '150px',
      fill: theme.palette.primary.main,
    },
  },
  info: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    padding: theme.spacing(2, 0, 0, 0),
  },
  leftGrid: {
    width: 'auto',
  },
  editWrapper: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
    },
  },
}));

interface DeviceProps {
  onLoadDevice: (id: number | string) => void;
  device: Device | null;
  isDeviceInvalid: boolean;
  currentUserUsername: string | null;
  onDeleteDevice: (id: number) => void;
}

interface Param {
  id: string;
}

const DeviceProfile = ({ onLoadDevice, device, isDeviceInvalid, currentUserUsername, onDeleteDevice }: DeviceProps): JSX.Element => {
  const params = useParams<Param>();

  useEffect(() => {
    onLoadDevice(params.id);
  }, [params.id]);

  useEffect(() => {
    if (isDeviceInvalid) {
      onLoadDevice(params.id);
    }
  }, [isDeviceInvalid]);

  const theme = useTheme();
  const isScreenSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [openReservationModal, setOpenReservationModal] = useState<number | null>(null);
  const [openEditModal, setOpenEditModal] = useState<number | null>(null);

  const handleClickOpenReservationModal = (id: number) => {
    setOpenReservationModal(id);
  };

  const handleClickOpenEditModal = (id: number) => {
    setOpenEditModal(id);
  };

  const handleCloseReservationModal = () => {
    setOpenReservationModal(null);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(null);
  };

  const classes = useStyles();

  if (device === null) {
    return <></>;
  }

  return (
    <Grid container direction={isScreenSmUp ? 'row' : 'column'} wrap="nowrap">
      <Grid container className={classes.leftGrid} item direction="column">
        <Grid item className={classes.icon}>
          <DevicesOtherIcon />
        </Grid>
        <Grid container item justify="space-between">
          <Grid item>
            {currentUserUsername === device.owner.username ? (
              <Button variant="contained" color="secondary" onClick={() => onDeleteDevice(device.id)}>
                <Trans>Delete</Trans>
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={() => handleClickOpenReservationModal(device.id)}>
                <Trans>Book</Trans>
              </Button>
            )}
            <CreateReservationDialog device={device} open={openReservationModal === device.id} onCancel={handleCloseReservationModal} />
          </Grid>
          <Grid item className={classes.editWrapper}>
            {currentUserUsername === device.owner.username && (
              <Button variant="contained" color="secondary" onClick={() => handleClickOpenEditModal(device.id)}>
                <Trans>Edit</Trans>
              </Button>
            )}
            <EditDeviceDialog
              id={device.id}
              open={openEditModal === device.id}
              onCancel={handleCloseEditModal}
              currentName={device.name}
              currentDescription={device.description}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="space-between" direction="column" item className={classes.info}>
        <Grid container item justify="space-between">
          <Grid item>
            <Typography variant="h6">{device.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              <Link href={Paths.Profile.replace(':username', `${device.owner?.username}`)} color="inherit">
                {device.owner?.firstName} {''} {device.owner?.lastName}
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2">{device.description}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  device: getCurrentDevice(state),
  isDeviceInvalid: getIsInvalidDevices(state),
  currentUserUsername: getUsername(state),
});

const mapDispatchToProps = {
  onLoadDevice: getDeviceRequest,
  onDeleteDevice: deleteDeviceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceProfile);
