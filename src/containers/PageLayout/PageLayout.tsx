import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Paths } from '../../consts/paths';
import { makeStyles } from '@material-ui/core';
import { Trans } from '@lingui/macro';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../modules/auth/selectors';
import LangSwitch from '../../components/LangSwitch/LangSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: 'hidden',
  },
  langSwitch: {
    display: 'table',
    position: 'absolute',
    marginTop: '-8px',
    marginLeft: '-8px',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const sidebarItems = [
  {
    name: 'Dashboard',
    path: Paths.Dashboard,
  },
  {
    name: <Trans>Devices</Trans>,
    path: Paths.Devices,
  },
  {
    name: <Trans>Incoming Reservations</Trans>,
    path: Paths.IncomingReservations,
  },
  {
    name: <Trans>Outcoming Reservations</Trans>,
    path: Paths.OutcomingReservations,
  },
];

interface PageLayoutProps {
  isLoggedIn: boolean;
  children: JSX.Element;
}

const PageLayout = ({ isLoggedIn, children }: PageLayoutProps): JSX.Element => {
  const [openMobile, setOpenMobile] = useState<boolean>(false);
  const handleMobileSidebar = () => setOpenMobile((prevState) => !prevState);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!isLoggedIn && (
        <div className={classes.langSwitch}>
          <LangSwitch />
        </div>
      )}
      {isLoggedIn && <TopBar onToggleMobileSidebar={handleMobileSidebar} />}
      {isLoggedIn && <Sidebar isOpenMobile={openMobile} onToggleMobileSidebar={handleMobileSidebar} items={sidebarItems} />}
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps)(PageLayout);
