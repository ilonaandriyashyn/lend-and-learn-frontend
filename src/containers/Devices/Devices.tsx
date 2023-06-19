import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import DataTable from '../../components/DataTable/DataTable';
import { Trans } from '@lingui/macro';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { deleteDeviceRequest, getDevicesRequest, getMyDevicesRequest } from '../../modules/devices/actions';
import { getDevices, getIsInvalidDevices, getTotalDevicesCount } from '../../modules/devices/selectors';
import { Device } from '../../modules/devices/types';
import CreateDeviceDialog from '../CreateDeviceDialog/CreateDeviceDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CreateReservationDialog from '../CreateReservationDialog/CreateReservationDialog';
import { getUsername } from '../../modules/users/selectors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TablePagination from '@material-ui/core/TablePagination';
import { Paths } from '../../consts/paths';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: '#FFFFFF',
    marginBottom: theme.spacing(3),
  },
  headerCell: {
    fontWeight: 'bold',
  },
  available: {
    color: theme.palette.success.dark,
  },
  booked: {
    color: theme.palette.error.dark,
  },
}));

const headerCells = [
  {
    id: 1,
    name: <Trans>Device name</Trans>,
  },
  {
    id: 2,
    name: <Trans>Owner</Trans>,
  },
  {
    id: 3,
    name: <Trans>Today status</Trans>,
  },
  {
    id: 4,
    name: '',
  },
  {
    id: 5,
    name: '',
  },
];

interface DevicesProps {
  onLoadDevices: (limit: number, offset: number) => void;
  devices: Device[];
  isInvalidDevices: boolean;
  onDeleteDevice: (id: number) => void;
  username: string | null;
  onLoadMyDevices: (limit: number, offset: number) => void;
  total: number;
}

const Devices = ({
  onLoadDevices,
  devices,
  isInvalidDevices,
  onDeleteDevice,
  username,
  onLoadMyDevices,
  total,
}: DevicesProps): JSX.Element => {
  const limit = 5;

  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (showMyDevices) {
      onLoadMyDevices(limit, page * limit);
    } else {
      // offset from where
      // limit max number to take
      onLoadDevices(limit, page * limit);
    }
  }, [isInvalidDevices]);

  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openReservationModal, setOpenReservationModal] = useState<number | null>(null);
  const [showMyDevices, setShowMyDevices] = useState<boolean>(false);

  const handleClickOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleClickOpenReservationModal = (id: number) => {
    setOpenReservationModal(id);
  };

  const handleCloseReservationModal = () => {
    setOpenReservationModal(null);
  };

  const handleClickShowMyDevices = () => {
    setPage(0);
    if (showMyDevices) {
      onLoadDevices(limit, 0);
    } else {
      onLoadMyDevices(limit, 0);
    }
    setShowMyDevices((prevState) => !prevState);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (showMyDevices) {
      onLoadMyDevices(limit, newPage * limit);
    } else {
      onLoadDevices(limit, newPage * limit);
    }
  };

  const classes = useStyles();
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <Button onClick={handleClickOpenCreateModal} variant="contained" className={classes.button}>
            <Trans>Create device</Trans>
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={handleClickShowMyDevices}
            variant="contained"
            className={classes.button}
            endIcon={showMyDevices ? <VisibilityOffIcon /> : <VisibilityIcon />}
          >
            <Trans>Show only my devices</Trans>
          </Button>
        </Grid>
      </Grid>
      <DataTable headerData={headerCells}>
        {devices.map((device) => (
          <TableRow key={device.id}>
            <TableCell component="th" scope="row">
              <Link href={Paths.DeviceProfile.replace(':id', `${device.id}`)} color="inherit">
                {device.name}
              </Link>
            </TableCell>
            <TableCell>
              <Link href={Paths.Profile.replace(':username', `${device.owner.username}`)} color="inherit">
                {device.owner.firstName} {''} {device.owner.lastName}
              </Link>
            </TableCell>
            <TableCell>
              {device.isBookedToday ? (
                <span className={classes.booked}>
                  <Trans>Booked</Trans>
                </span>
              ) : (
                <span className={classes.available}>
                  <Trans>Available</Trans>
                </span>
              )}
            </TableCell>
            <TableCell>
              {device.owner.username === username && (
                <IconButton onClick={() => onDeleteDevice(device.id)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </TableCell>
            <TableCell>
              {device.owner.username !== username && (
                <>
                  <Button variant="contained" color="primary" onClick={() => handleClickOpenReservationModal(device.id)}>
                    <Trans>Book</Trans>
                  </Button>
                  <CreateReservationDialog
                    device={device}
                    open={openReservationModal === device.id}
                    onCancel={handleCloseReservationModal}
                  />
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <TablePagination
        rowsPerPageOptions={[limit]}
        rowsPerPage={limit}
        component="div"
        count={total}
        page={page}
        onChangePage={handleChangePage}
      />
      <CreateDeviceDialog open={openCreateModal} onCancel={handleCloseCreateModal} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  devices: getDevices(state),
  isInvalidDevices: getIsInvalidDevices(state),
  username: getUsername(state),
  total: getTotalDevicesCount(state),
});

const mapDispatchToProps = {
  onLoadDevices: getDevicesRequest,
  onDeleteDevice: deleteDeviceRequest,
  onLoadMyDevices: getMyDevicesRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
