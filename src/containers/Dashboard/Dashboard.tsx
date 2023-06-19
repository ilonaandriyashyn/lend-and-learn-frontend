import React, { useEffect } from 'react';
import MyDevices from './MyDevices';
import { RootState } from '../../modules/reducer';
import { connect } from 'react-redux';
import { getMyDevicesStatisticsRequest } from '../../modules/statistics/actions';
import { getMyDevicesStatistics } from '../../modules/statistics/selectors';
import { MyDevicesStatistics } from '../../modules/statistics/types';

interface DashboardProps {
  onLoadMyDevicesStatistics: () => void;
  myDevicesStatistics: MyDevicesStatistics;
}

const Dashboard = ({ onLoadMyDevicesStatistics, myDevicesStatistics }: DashboardProps): JSX.Element => {
  useEffect(() => {
    onLoadMyDevicesStatistics();
  }, []);
  return (
    <>
      <MyDevices statistics={myDevicesStatistics} />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  myDevicesStatistics: getMyDevicesStatistics(state),
});

const mapDispatchToProps = {
  onLoadMyDevicesStatistics: getMyDevicesStatisticsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
