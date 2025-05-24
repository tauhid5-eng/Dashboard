import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 300 },
  { month: 'Mar', sales: 500 },
];

function Analytics() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>Sales Graph 📈</h2>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Analytics;