import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import './App.css';

// Pages from src/pages folder
import Dashboard from '../src/pages/dashboard';
import Customers from '../src/pages/Customers';
import Products from '../src/pages/products';
import Sales from '../src/pages/sales';
import Subscriptions from '../src/pages/Subscriptions';
import Insights from '../src/pages/Insights';
import Audience from '../src/pages/Audience';
import TimeMachine from '../src/pages/Time-Machine';
import Transcriptions from '../src/pages/Transactions';
import Analytics from '../src/pages/Web Analytics';
import Footer from '../src/components/Footer'; // ✅ Corrected: remove curly braces

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className="app">
        <Header onToggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isOpen={isSidebarOpen} />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/audience" element={<Audience />} />
              <Route path="/time-machine" element={<TimeMachine />} />
              <Route path="/transcriptions" element={<Transcriptions />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>

            <Footer /> {/* ✅ Footer added here */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
