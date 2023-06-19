import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DataTable from '../../components/DataTable/DataTable';
import { Trans } from '@lingui/macro';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import TablePagination from '@material-ui/core/TablePagination';
import { cancelReservationRequest, getOutcomeCreatedReservationsRequest } from '../../modules/reservations/actions';
import { Reservation } from '../../modules/reservations/types';
import { getIsInvalidReservations, getOutcomeCreatedReservations } from '../../modules/reservations/selectors';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Paths } from '../../consts/paths';

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
    name: <Trans>Date</Trans>,
  },
  {
    id: 4,
    name: '',
  },
];

interface ReservationsCreatedProps {
  onLoadReservations: () => void;
  reservations: Reservation[];
  isInvalidReservations: boolean;
  onCancelReservation: (id: number) => void;
}

const ReservationsCreated = ({
  onLoadReservations,
  reservations,
  isInvalidReservations,
  onCancelReservation,
}: ReservationsCreatedProps): JSX.Element => {
  useEffect(() => {
    onLoadReservations();
  }, [isInvalidReservations]);

  const [page, setPage] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Typography variant="h5">
        <Trans>Reservations created</Trans>
      </Typography>
      <DataTable headerData={headerCells}>
        {reservations.slice(page * 5, page * 5 + 5).map((reservation) => (
          <TableRow key={reservation.id}>
            <TableCell component="th" scope="row">
              <Link href={Paths.DeviceProfile.replace(':id', `${reservation.device.id}`)} color="inherit">
                {reservation.device.name}
              </Link>
            </TableCell>
            <TableCell>
              <Link href={Paths.Profile.replace(':username', `${reservation.device.owner.username}`)} color="inherit">
                {reservation.device.owner.firstName} {''} {reservation.device.owner.lastName}
              </Link>
            </TableCell>
            <TableCell>
              <>
                {reservation.dateStart} {'-'} {reservation.dateEnd}
              </>
            </TableCell>
            <TableCell>
              <Button variant="contained" onClick={() => onCancelReservation(reservation.id)}>
                <Trans>Cancel</Trans>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </DataTable>
      <TablePagination
        rowsPerPageOptions={[5]}
        rowsPerPage={5}
        component="div"
        count={reservations.length}
        page={page}
        onChangePage={handleChangePage}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  reservations: getOutcomeCreatedReservations(state),
  isInvalidReservations: getIsInvalidReservations(state),
});

const mapDispatchToProps = {
  onLoadReservations: getOutcomeCreatedReservationsRequest,
  onCancelReservation: cancelReservationRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationsCreated);
