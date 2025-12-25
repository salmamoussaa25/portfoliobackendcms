import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; 
import SearchBar from '../components/SearchBar'; 
import ProfileButton from '../components/ProfileButton'; 
import MessageNotifications from '../components/MessageNotifications'; 
import './ProjectManager.css';

const ProjectManager = () => {

  const [projects] = useState([
    { id: 1, category: "UX/UI", title: "A Futuristic Digital Window...", description: "Wildlife Reimagined...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 2, category: "UX/UI", title: "Beit Madmoun - Home...", description: "Beit Madmoun is a UX...", thumbnail: "/api/placeholder/40/30", date: "2024", link: "https://salmamoussa.com/" },
    { id: 3, category: "UX/UI", title: "Sustainable Innovation...", description: "This UX/UI design...", thumbnail: "/api/placeholder/40/30", date: "2024", link: "https://salmamoussa.com/" },
    { id: 4, category: "UX/UI", title: "A Futuristic Digital...", description: "Wildlife Reimagined...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 5, category: "Branding", title: "Sekem Rebranded", description: "The holistic brand...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 6, category: "Branding", title: "Ambient Events", description: "Life of the party, Am...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 7, category: "Branding", title: "What If Gris...", description: "Your favorite game just...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 8, category: "Front-End Dev", title: "Russian E-Sports", description: "The E-Sports scene...", thumbnail: "/api/placeholder/40/30", date: "2023", link: "https://salmamoussa.com/" },
    { id: 9, category: "Front-End Dev", title: "A Futuristic Digital...", description: "Wildlife Reimagined...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
    { id: 10, category: "Front-End Dev", title: "A Futuristic Digital...", description: "Wildlife Reimagined...", thumbnail: "/api/placeholder/40/30", date: "2025", link: "https://salmamoussa.com/" },
  ]);

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <main className="dashboard-content">
        {/* Top Header Section */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">Project Manager</h1>
          </div>
          
          <div className="header-center">
            <SearchBar />
          </div>

          <div className="header-right">
            <MessageNotifications />
            <ProfileButton />
          </div>
        </header>

        {/* Action Buttons Toolbar */}
        <div className="toolbar-section">
          <div className="action-buttons-group">
            <button className="btn-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export Data
            </button>
            <button className="btn-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              Create New
            </button>
            <button className="btn-action">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Customize Widgets
            </button>
          </div>

          <div className="lang-toggle-pill">
            <span className="lang-opt active">EN</span>
            <span className="lang-opt">AR</span>
          </div>
        </div>

        {/* Table Container */}
        <div className="table-container">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Project Title</th>
                <th>Description</th>
                <th>Thumbnail</th>
                <th>Date</th>
                <th>Live Demo Link</th>
                <th></th> {/* Action Column */}
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td><span className="category-badge">{project.category}</span></td>
                  <td className="title-cell">{project.title}</td>
                  <td className="desc-cell">{project.description}</td>
                  <td>
                    <div className="thumbnail-wrapper">
                      <img src={project.thumbnail} alt="thumb" />
                    </div>
                  </td>
                  <td>{project.date}</td>
                  <td><a href={project.link} className="link-text">{project.link}</a></td>
                  <td>
                    <button className="edit-icon-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default ProjectManager;