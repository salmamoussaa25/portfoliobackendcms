import React from 'react';
import '../pages/DashboardOverview.css';

const Sidebar = () => {
  const menuItems = [
    { label: 'Overview', icon: 'dashboard_icon', active: true },
    { label: 'Project Management', icon: 'project_icon' },
    { label: 'Skills & Experience', icon: 'skills_icon' },
    { label: 'Profile Settings', icon: 'profile_settings_icon' },
    { label: 'Upload Management', icon: 'upload_icon' },
    { label: 'Analytics & Reports', icon: 'analytics_icon' },
    { label: 'Data Backup & Restore', icon: 'backup_icon' },
    { label: 'Notifications & Messages', icon: 'notifications_icon' },
    { label: 'Help & Documentation', icon: 'help_icon' },
    { label: 'Advanced Security', icon: 'security_icon' },
    { label: 'Settings', icon: 'settings_icon' },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
            
            <span className="sidebar-icon-placeholder"></span>
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
      <button className="logout-btn">
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;