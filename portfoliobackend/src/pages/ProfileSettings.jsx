import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import ProfileButton from '../components/ProfileButton';
import MessageNotifications from '../components/MessageNotifications';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Salma',
    lastName: 'Moussa',
    jobTitle: 'UX/UI Designer',
    email: 'salma.moussa@gmail.com',
    linkedin: 'Salma',
    github: 'Moussa',
    behance: 'Salma',
    dribbble: 'Moussa'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        {/* Header Section */}
        <header className="page-header">
           <div className="header-left">
             <h1 className="page-title">Profile Settings</h1>
             <p className="page-subtitle">Manage your profile information and social presence.</p>
           </div>

           <div className="header-center">
             <SearchBar />
           </div>

           <div className="header-right">
             <MessageNotifications />
             <ProfileButton />
           </div>
        </header>

        {/* Action Bar (Language Toggle & Export) */}
        <div className="toolbar-section">
          <button className="btn-action">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             Export Data
          </button>
          
          <div className="lang-toggle-pill">
            <span className="lang-opt active">EN</span>
            <span className="lang-opt">AR</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="settings-grid">
          
          {/* Card 1: Profile Overview */}
          <section className="settings-card overview-card">
            <h2 className="card-title">Profile Overview</h2>
            <div className="overview-content">
              <div className="avatar-section">
                <div className="avatar-large">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>
                <button className="edit-avatar-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </button>
              </div>
              <div className="user-details">
                <h3>Salma Moussa</h3>
                <p className="role-text">Multi-Disciplinary UX/UI Designer</p>
                <p className="location-text">Cairo, Egypt</p>
              </div>
              <button className="btn-solid-edit">
                Edit 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </button>
            </div>
          </section>

          {/* Card 2: Personal Information */}
          <section className="settings-card">
            <h2 className="card-title">Personal Information</h2>
            
            <div className="form-grid-2col">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={profileData.firstName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={profileData.lastName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" name="jobTitle" value={profileData.jobTitle} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={profileData.email} onChange={handleInputChange} />
              </div>
            </div>

            <div className="form-group bio-group">
              <label>Bio</label>
              <div className="rich-text-container">
                 <div className="rich-toolbar">
                    <span>↩</span><span>↪</span><span className="ai-badge">AI</span><span>|</span>
                    <span>Paragraph ▾</span><span>|</span>
                    <span><b>B</b></span><span><i>I</i></span><span><u>A</u> ▾</span><span>|</span>
                    <span>🔗</span><span>📷</span><span>☺</span><span>|</span>
                    <span>≡ ▾</span><span>|</span>
                    <span>...</span>
                 </div>
                 <div className="rich-content" contentEditable></div>
              </div>
            </div>

            <div className="card-actions-right">
              <button className="btn-solid-edit">
                Edit
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </button>
            </div>
          </section>

          {/* Card 3: Contact Information */}
          <section className="settings-card">
            <h2 className="card-title">Contact Information</h2>
            
            <div className="form-grid-2col">
              <div className="form-group">
                <label>LinkedIn</label>
                <div className="icon-input-wrapper">
                  <span className="input-icon">in</span>
                  <input type="text" name="linkedin" value={profileData.linkedin} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label>GitHub</label>
                <div className="icon-input-wrapper">
                  <span className="input-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </span>
                  <input type="text" name="github" value={profileData.github} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Behance</label>
                <div className="icon-input-wrapper">
                  <span className="input-icon">Bē</span>
                  <input type="text" name="behance" value={profileData.behance} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Dribbble</label>
                <div className="icon-input-wrapper">
                  <span className="input-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-.38-6.44.35-9.54 2.76m-3.48-9.04c6.68 1.98 10.96 1.98 16.29 1.48"></path></svg>
                  </span>
                  <input type="text" name="dribbble" value={profileData.dribbble} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <div className="card-actions-right">
              <button className="btn-solid-add">
                + Add Contact
              </button>
              <button className="btn-solid-edit">
                Edit
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;