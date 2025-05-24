import React from 'react';

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <button className="toggle-btn" onClick={onToggleSidebar}>☰</button>
      <h1>Dashboard</h1>
    </header>
  );
}

export default Header;