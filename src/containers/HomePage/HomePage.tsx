import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { Trans } from '@lingui/macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { LOGIN } from '../../consts/login';
import { RootState } from '../../modules/reducer';
import { isLoggedIn } from '../../modules/auth/selectors';
import { connect } from 'react-redux';
import { Paths } from '../../consts/paths';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.dark,
    textAlign: 'center',
    marginBottom: theme.spacing(5),
  },
  paper: {
    border: `5px solid ${theme.palette.primary.dark}`,
    height: '400px',
    borderRadius: '70px',
  },
  grid: {
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
    width: '95%',
  },
  loginButton: {},
  loginButtonGrid: {
    textAlign: 'center',
    padding: '37px',
  },
  text: {
    padding: '37px',
  },
  paperContentGrid: {
    height: '100%',
  },
}));

interface HomePageProps {
  isLoggedIn: boolean;
}

const HomePage = ({ isLoggedIn }: HomePageProps): JSX.Element => {
  const classes = useStyles();
  return isLoggedIn ? (
    <Redirect to={Paths.Dashboard} />
  ) : (
    <div>
      <Typography variant="h2" className={classes.title}>
        <Trans>Lend And Learn</Trans>
      </Typography>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item className={classes.grid}>
          <Paper className={classes.paper}>
            <Grid container justify="space-between" direction="column" wrap="nowrap" className={classes.paperContentGrid}>
              <Grid item>
                <Typography className={classes.text}>
                  <Trans>
                    Application Lend And Learn gives students and employees of FIT CTU opportunity to share interesting technical devices
                    with each other. Find a device you are interested in, make a booking and enjoy learning how it works.
                  </Trans>
                </Typography>
              </Grid>
              <Grid item className={classes.loginButtonGrid}>
                <Button
                  component="a"
                  href={LOGIN.LOGIN_URL}
                  variant="contained"
                  color="primary"
                  className={classes.loginButton}
                  size="large"
                >
                  <Trans>Login</Trans>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps)(HomePage);
