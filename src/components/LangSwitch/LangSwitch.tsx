import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeLangAction } from '../../modules/app/actions';
import { Langs } from '../../consts/common';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: '#FFFFFF',
  },
  divider: {
    backgroundColor: '#FFFFFF',
  },
}));

interface LangSwitchProps {
  onChangeLang: (lang: string) => void;
}

const LangSwitch = ({ onChangeLang }: LangSwitchProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={() => onChangeLang(Langs.En)}>
        EN
      </Button>
      <Divider className={classes.divider} orientation="vertical" flexItem />
      <Button className={classes.button} onClick={() => onChangeLang(Langs.Cs)}>
        CZ
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  onChangeLang: changeLangAction,
};

export default connect(null, mapDispatchToProps)(LangSwitch);
