import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Paths } from '../../consts/paths';
import { MyDevicesStatistics } from '../../modules/statistics/types';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: '40px',
    padding: '24px',
    width: '70%',
  },
  number: {
    alignSelf: 'center',
  },
  statisticsWrapper: {
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: '#FFFFFF',
  },
}));

interface MyDevicesProps {
  statistics: MyDevicesStatistics;
}

const MyDevices = ({ statistics }: MyDevicesProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container item direction="row" justify="space-between">
        <Grid item>
          <Typography gutterBottom variant="h5" component="h2">
            <Trans>My devices</Trans>
          </Typography>
        </Grid>
        <Grid item>
          <Button component={Link} to={Paths.Devices} size="small" className={classes.button} variant="contained">
            <Trans>Go to my devices</Trans>
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="row" className={classes.statisticsWrapper}>
        <Grid container item xs={4} direction="column" alignContent="center">
          <Grid className={classes.number} item>
            <Typography color="primary" gutterBottom variant="h4">
              {statistics.count}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body1">
              <Trans>Whole count</Trans>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignContent="center">
          <Grid className={classes.number} item>
            <Typography color="primary" gutterBottom variant="h4">
              {statistics.lent}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body1">
              <Trans>Lent</Trans>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} direction="column" alignContent="center">
          <Grid className={classes.number}>
            <Typography color="primary" gutterBottom variant="h4">
              {statistics.available}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body1">
              <Trans>Available</Trans>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyDevices;
