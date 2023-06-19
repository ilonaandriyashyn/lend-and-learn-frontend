import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: theme.palette.secondary.main,
  },
  headerCell: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bodyRow: {
    '& tr': {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  },
}));

interface HeaderDataItem {
  id: number;
  name: JSX.Element | string;
}

interface DataTableProps {
  headerData: HeaderDataItem[];
  children: JSX.Element[];
}

const DataTable = ({ headerData, children }: DataTableProps): JSX.Element => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className={classes.tableHead}>
            {headerData.map((cell) => (
              <TableCell className={classes.headerCell} key={cell.id}>
                {cell.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={classes.bodyRow}>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
