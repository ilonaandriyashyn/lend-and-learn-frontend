import { Route, Switch } from 'react-router';
import { Paths } from './consts/paths';
import React, { lazy, Suspense } from 'react';
import PageLayout from './containers/PageLayout/PageLayout';
import ProtectedRoute from './containers/Routes/ProtectedRoute';
import Alert from './components/Alert/Alert';
import Loading from './components/Loading/Loading';

const HomePage = lazy(() => import('./containers/HomePage/HomePage'));
const Login = lazy(() => import('./containers/Login/Login'));
const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));
const Devices = lazy(() => import('./containers/Devices/Devices'));
const IncomingReservations = lazy(() => import('./containers/IncomingReservations/IncomingReservations'));
const OutcomingReservations = lazy(() => import('./containers/OutcomingReservations/OutcomingReservations'));
const Profile = lazy(() => import('./containers/Profile/Profile'));
const DeviceProfile = lazy(() => import('./containers/DeviceProfile/DeviceProfile'));

const App = () => (
  <>
    <Alert />
    <PageLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={Paths.Homepage} render={() => <HomePage />} />
          <Route exact path={Paths.Login} render={() => <Login />} />
          <ProtectedRoute exact path={Paths.Dashboard} render={() => <Dashboard />} />
          <ProtectedRoute exact path={Paths.Devices} render={() => <Devices />} />
          <ProtectedRoute exact path={Paths.IncomingReservations} render={() => <IncomingReservations />} />
          <ProtectedRoute exact path={Paths.OutcomingReservations} render={() => <OutcomingReservations />} />
          <ProtectedRoute exact path={Paths.Profile} render={() => <Profile />} />
          <ProtectedRoute exact path={Paths.DeviceProfile} render={() => <DeviceProfile />} />
        </Switch>
      </Suspense>
    </PageLayout>
  </>
);

export default App;
