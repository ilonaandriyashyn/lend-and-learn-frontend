import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  progress: {
    margin: '0 auto',
  },
}));

const Loading = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} size={80} />
    </div>
  );
};

export default Loading;
