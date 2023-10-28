import React from 'react';
import { BarChart } from '@mui/x-charts';


const Analytics = () => {
  const data = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
    datasets: [
      {
        label: 'Sample Data',
        data: [45, 78, 32, 61, 95],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
     <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['bar A', 'bar B', 'bar C'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [2, 5, 3],
    },
  ]}
  width={500}
  height={300}
/>
    </div>
  );
};

export default Analytics;
