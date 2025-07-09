import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
          <path clipRule="evenodd" d="M22.146 11.146a.5.5 0 01-.353.854H20v7.5a1.5 1.5 0 01-1.5 1.5H14v-8h-4v8H5.5A1.5 1.5 0 014 19.5V12H2.207a.5.5 0 01-.353-.854L12 1l10.146 10.146Z" fillRule="evenodd" />
        </svg>
        Home
      </div>
      <div className="sidebar-icon">🎬 Shorts</div>
      <div className="sidebar-icon">📺 Subscriptions</div>
      <div className="sidebar-icon">👤 You</div>
    </div>
  );
}

export default Sidebar;
