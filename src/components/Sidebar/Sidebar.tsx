import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Hidden } from '@material-ui/core';
import Content from './Content';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: 'relative',
    zIndex: '1000 !important' as any,
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main,
    color: '#FFFFFF',
    width: drawerWidth,
  },
}));

interface Item {
  name: JSX.Element | string;
  path: string;
}

interface SidebarProps {
  items: Item[];
  isOpenMobile: boolean;
  onToggleMobileSidebar: () => void;
}

const Sidebar = ({ items, isOpenMobile, onToggleMobileSidebar }: SidebarProps): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Hidden xsDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Content items={items} />
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          open={isOpenMobile}
          onClose={onToggleMobileSidebar}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <Content items={items} />
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
