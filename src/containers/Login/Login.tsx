import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../../modules/auth/actions';
import { Paths } from '../../consts/paths';
import { getToken } from '../../modules/auth/selectors';
import { RootState } from '../../modules/reducer';

interface LoginProps {
  onLogin: () => void;
  token: string | null;
}

const Login = ({ onLogin, token = null }: LoginProps): JSX.Element | null => {
  useEffect(() => {
    if (!token) {
      onLogin();
    }
  }, []);
  return token ? <Redirect to={Paths.Dashboard} /> : null;
};

const mapStateToProps = (state: RootState) => ({
  token: getToken(state),
});

const mapDispatchToProps = {
  onLogin: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
