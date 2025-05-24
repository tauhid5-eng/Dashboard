// src/pages/Sales.js
import React from 'react';
import './sales.css';

function Sales() {
  return (
    <div className="sales-container">
      <h2>Sales Dashboard</h2>
      <div className="sales-grid">
        <div className="card">
          <h3>May 2025 Sales so far...</h3>
          <p className="amount">$10,574.94</p>
          <p>Today: $363.96 | Yesterday: $385.90</p>
        </div>

        <div className="card">
          <h3>Sales Target</h3>
          <p className="amount">$10,000</p>
          <p>Forecast: $17,726 - $58,887</p>
        </div>

        <div className="card">
          <h3>Last 3 Months</h3>
          <ul>
            <li>Revenue: $61,428 <span className="green">+3%</span></li>
            <li>ARPU: $112 <span className="green">+5%</span></li>
            <li>Visitors: 0</li>
            <li>Conversion: 0%</li>
          </ul>
        </div>

        <div className="card">
          <h3>Customers</h3>
          <p>222 <span className="red">-3%</span></p>
          <p>Orders: 260 <span className="green">+2%</span></p>
        </div>
      </div>
    </div>
  );
}

export default Sales;
