import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { RootState } from '../../modules/reducer';
import { getUsername } from '../../modules/users/selectors';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import { logoutRequest } from '../../modules/auth/actions';
import { Trans } from '@lingui/macro';
import { Paths } from '../../consts/paths';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  loginLink: {
    textDecoration: 'none',
  },
  button: {
    color: '#FFFFFF',
  },
}));

interface TopBarProps {
  username: string | null;
  onLogout: () => void;
  onToggleMobileSidebar: () => void;
}

const TopBar = ({ username = null, onLogout, onToggleMobileSidebar }: TopBarProps): JSX.Element => {
  const history = useHistory();
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => setOpen((prevState) => !prevState);
  const handleClose = () => setOpen(false);
  const handleClickProfile = () => history.push(Paths.Profile.replace(':username', `${username}`));
  const items = [
    {
      id: 1,
      name: <Trans>Profile</Trans>,
      onClick: handleClickProfile,
    },
    {
      id: 2,
      name: <Trans>Logout</Trans>,
      onClick: onLogout,
    },
  ];
  return (
    <AppBar color="primary">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onToggleMobileSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Lend And Learn</Typography>
        <div>
          <Button
            className={classes.button}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            {username}
          </Button>
          <ToggleMenu onClose={handleClose} open={open} refCurrent={anchorRef.current} items={items} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: RootState) => ({
  username: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
