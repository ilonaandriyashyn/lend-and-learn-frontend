import React from 'react';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../modules/auth/selectors';
import { Redirect, Route, RouteProps } from 'react-router';
import { Paths } from '../../consts/paths';

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

const ProtectedRoute = ({ isLoggedIn, ...props }: ProtectedRouteProps & RouteProps): JSX.Element =>
  isLoggedIn ? <Route {...props} /> : <Redirect to={Paths.Homepage} />;

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: isLoggedIn(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
