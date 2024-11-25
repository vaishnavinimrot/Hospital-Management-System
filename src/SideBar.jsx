import React, { useState } from 'react';
import './App.css';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <a href="/">
          Home
        </a>
        <a href="/admin/manage-doctor">
           Manage Doctor
        </a>
        <a href="/admin/manage-patient">
           Manage Patient
        </a>
        <a href="/admin/post-schedule">
          Post Schedule
        </a>
        <a href="/user/view-doctors">
           View Doctors
        </a>
        <a href="/user/view-surgery">
           View Surgery
        </a>
      </div>

      {/* Content */}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      </div>

      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
    </div>
  );
}

export default Sidebar;
