import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

interface Item {
  id: number;
  name: JSX.Element | string;
  onClick: () => void;
}

interface ToggleMenuProps {
  items: Item[];
  open: boolean;
  onClose: () => void;
  refCurrent: HTMLButtonElement | null;
}

const ToggleMenu = ({ items = [], open = false, onClose, refCurrent }: ToggleMenuProps): JSX.Element => (
  <Popper open={open} anchorEl={refCurrent} transition disablePortal>
    {({ TransitionProps }) => (
      <Grow {...TransitionProps}>
        <Paper>
          <ClickAwayListener onClickAway={onClose}>
            <MenuList autoFocusItem={open}>
              {items.map((item) => (
                <MenuItem key={item.id} onClick={item.onClick}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Grow>
    )}
  </Popper>
);

export default ToggleMenu;
