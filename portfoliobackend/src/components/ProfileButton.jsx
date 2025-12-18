import React from 'react';
import './ProfileButton.css';

const ProfileButton = ({ name = "Salma Moussa", role = "Superadmin" }) => {
  return (
    <button className="profile-btn">
      <div className="profile-text-group">
        <span className="profile-name">{name}</span>
        <span className="profile-role">{role}</span>
      </div>

      <img src="../assets/profile_settings_icon" alt="profile settings icon" />
    </button>
  );
};

export default ProfileButton;