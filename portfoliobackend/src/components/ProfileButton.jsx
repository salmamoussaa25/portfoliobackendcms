import React from 'react';
import './ProfileButton.css';

const ProfileButton = ({ name = "Salma Moussa", role = "Superadmin" }) => {
  return (
    <button className="profile-btn">
      {/* Text Section - Hidden on Mobile */}
      <div className="profile-text-group">
        <span className="profile-name">{name}</span>
        <span className="profile-role">{role}</span>
      </div>

      {/* Avatar Icon */}
      <div className="profile-icon">
        <img src="../assets/profile_icon.svg" alt="" />
      </div>
    </button>
  );
};

export default ProfileButton;