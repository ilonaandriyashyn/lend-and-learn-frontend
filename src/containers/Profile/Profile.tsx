import React, { useEffect } from 'react';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { User } from '../../modules/users/types';
import { useParams } from 'react-router';
import { getUserRequest, updateCurrentUserRequest } from '../../modules/users/actions';
import { getUsername, getUserProfile } from '../../modules/users/selectors';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  icon: {
    '& svg': {
      width: '150px',
      height: '150px',
      fill: theme.palette.primary.main,
    },
  },
  info: {
    padding: theme.spacing(2),
  },
}));

interface ProfileProps {
  onLoadUser: (username: string) => void;
  user: User;
  currentUserUsername: string | null;
  onUpdateCurrentUser: () => void;
}

interface Param {
  username: string;
}

const Profile = ({ onLoadUser, user, currentUserUsername, onUpdateCurrentUser }: ProfileProps): JSX.Element => {
  const params = useParams<Param>();
  useEffect(() => {
    onLoadUser(params.username);
  }, [params.username]);
  const classes = useStyles();
  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item className={classes.icon}>
        <AccountCircleOutlinedIcon />
      </Grid>
      <Grid container justify="space-between" direction="column" item className={classes.info}>
        <Grid item>
          <Typography variant="h6">
            {user.firstName} {user.lastName}
          </Typography>
        </Grid>
        <Grid item>
          {currentUserUsername !== user.username && (
            <Button variant="outlined" component="a" href={`mailto:${user.email}`}>
              <Trans>Send email</Trans>
            </Button>
          )}
          {currentUserUsername === user.username && (
            <Button variant="outlined" onClick={onUpdateCurrentUser}>
              <Trans>Update information</Trans>
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: getUserProfile(state),
  currentUserUsername: getUsername(state),
});

const mapDispatchToProps = {
  onLoadUser: getUserRequest,
  onUpdateCurrentUser: updateCurrentUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
