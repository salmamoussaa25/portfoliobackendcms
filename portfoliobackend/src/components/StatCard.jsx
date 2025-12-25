import React from 'react';
import '../pages/DashboardOverview.css'; 
import openwidget_icon from "../assets/openwidget_icon.png";

const StatCard = ({ title, value, subtext, icon, className, children }) => {
  return (
    <div className={`stat-card ${className || ''}`}>
      <div className="stat-header">
        <h3 className="stat-title">{title}</h3>
        {icon && <div className="stat-icon">{icon}</div>}
      </div>
      
      {/* If children exist (like charts or images), render them. Otherwise render value/subtext */}
      {children ? (
        children
      ) : (
        <div className="stat-content">
          <span className="stat-value">{value}</span>
          {subtext && <span className="stat-subtext">{subtext}</span>}
        </div>
      )}

      <div className="card-action-icon">
        <img src= {openwidget_icon} alt="open widget icon" />
      </div>
    </div>
  );
};

export default StatCard;