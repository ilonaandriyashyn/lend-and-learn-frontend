import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import LangSwitch from '../LangSwitch/LangSwitch';

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 'bold',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
}));

interface Item {
  name: JSX.Element | string;
  path: string;
}

interface ContentProps {
  items: Item[];
}

const Content = ({ items }: ContentProps): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <List className={classes.list}>
        <div>
          {items.map((item) => (
            <ListItem component={Link} to={item.path} button key={item.path}>
              <ListItemText primary={item.name} primaryTypographyProps={{ className: classes.text }} />
            </ListItem>
          ))}
        </div>
        <LangSwitch />
      </List>
    </>
  );
};

export default Content;
