// src/pages/Dashboard.js
import React from 'react';
import './dashboard.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Chart data
const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
  { name: 'Apr', sales: 250 },
];

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Title */}
      <h2 className="dashboard-title">Welcome to the Dashboard</h2>
      <p>This is where you can view your recent activity, stats, and more.</p>

      {/* Button */}
      <button onClick={() => alert("Button clicked!")}>Click Me</button>

      {/* Statistics List */}
      <div className="stats-box">
        <h3>Statistics</h3>
        <ul>
          <li>Users: 120</li>
          <li>Orders: 85</li>
          <li>Revenue: $5,230</li>
        </ul>
      </div>

      {/* Cards Section */}
      <div className="card-grid">
        <div className="card"><h3>Users</h3><p>120</p></div>
        <div className="card"><h3>Orders</h3><p>85</p></div>
        <div className="card"><h3>Revenue</h3><p>$5,230</p></div>
      </div>

      {/* Graph Section */}
      <div className="graph-container">
        <h3>Sales Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
