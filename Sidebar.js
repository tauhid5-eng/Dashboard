import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// ⬇️ Image icon imports
import dashboardIcon from '../assets/icons/dashboard.png';
import customersIcon from '../assets/icons/customers.png';
import productsIcon from '../assets/icons/products.png';
import salesIcon from '../assets/icons/sales.png';
import subscriptionsIcon from '../assets/icons/subscriptions.png';
import insightsIcon from '../assets/icons/insights.png';
import audienceIcon from '../assets/icons/audience.png';
import timeMachineIcon from '../assets/icons/time machine.png';
import transcriptionsIcon from '../assets/icons/transcriptions.png';
import analyticsIcon from '../assets/icons/web-analytics.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-item" title="Dashboard">
        <img src={dashboardIcon} alt="Dashboard" />
      </Link>
      <Link to="/customers" className="sidebar-item" title="Customers">
        <img src={customersIcon} alt="Customers" />
      </Link>
      <Link to="/products" className="sidebar-item" title="Products">
        <img src={productsIcon} alt="Products" />
      </Link>
      <Link to="/sales" className="sidebar-item" title="Sales">
        <img src={salesIcon} alt="Sales" />
      </Link>
      <Link to="/subscriptions" className="sidebar-item" title="Subscriptions">
        <img src={subscriptionsIcon} alt="Subscriptions" />
      </Link>
      <Link to="/insights" className="sidebar-item" title="Insights">
        <img src={insightsIcon} alt="Insights" />
      </Link>
      <Link to="/audience" className="sidebar-item" title="Audience">
        <img src={audienceIcon} alt="Audience" />
      </Link>
      <Link to="/time-machine" className="sidebar-item" title="Time Machine">
        <img src={timeMachineIcon} alt="Time Machine" />
      </Link>
      <Link to="/transcriptions" className="sidebar-item" title="Transcriptions">
        <img src={transcriptionsIcon} alt="Transcriptions" />
      </Link>
      <Link to="/analytics" className="sidebar-item" title="Web Analytics">
        <img src={analyticsIcon} alt="Web Analytics" />
      </Link>
    </div>
  );
}

export default Sidebar;
