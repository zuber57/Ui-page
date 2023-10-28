// Dashboard.js
import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import Analytics from './Analytics';
import Data from './Data';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ width: '600px' }}>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Analytics" />
          <Tab label="Data" />
        </Tabs>
        <div hidden={selectedTab !== 0}>
          <Analytics />
        </div>
        <div hidden={selectedTab !== 1}>
          <Data />
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
