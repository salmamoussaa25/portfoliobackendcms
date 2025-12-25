import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import ProfileButton from '../components/ProfileButton';
import MessageNotifications from '../components/MessageNotifications';
import './ProjectEditor.css';

const ProjectEditor = () => {
  // Mock State for Form Fields
  const [formData, setFormData] = useState({
    category: 'UX/UI Design',
    title: 'A Futuristic Digital Window into Giza Zoo',
    date: '2025',
    liveLink: 'https://salmamoussa.com/',
    personalNotes: '“Wildlife Reimagined” is a UX/UI design project that reimagines the Giza Zoo as an immersive digital experience...'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        {/* Header Section */}
        <header className="page-header">
           {/* Breadcrumb replaces the title here locally or sits above */}
           <div className="header-left">
             <div className="breadcrumb">
               <span className="crumb-muted">Project Manager</span>
               <span className="crumb-separator">/</span>
               <span className="crumb-muted">{formData.category}</span>
               <span className="crumb-separator">/</span>
               <span className="crumb-active">{formData.title.substring(0, 25)}...</span>
             </div>
           </div>

           <div className="header-center">
             <SearchBar />
           </div>

           <div className="header-right">
             <MessageNotifications />
             <ProfileButton />
           </div>
        </header>

        {/* Page Title */}
        <h1 className="editor-page-title">Project Editor</h1>

        {/* Main Editor Card */}
        <div className="editor-card">
          
          {/* Top Row: Category, Title, Date */}
          <div className="form-row three-col">
            <div className="form-group">
              <label>Category</label>
              <div className="select-wrapper">
                <select name="category" value={formData.category} onChange={handleInputChange}>
                  <option>UX/UI Design</option>
                  <option>Branding</option>
                  <option>Front-End Dev</option>
                </select>
              </div>
            </div>

            <div className="form-group flex-grow">
              <label>Project Title</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
              />
            </div>

            <div className="form-group small-col">
              <label>Date</label>
              <div className="select-wrapper">
                <select name="date" value={formData.date} onChange={handleInputChange}>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
            </div>
          </div>

          {/* Second Row: Thumbnail & Meta-tags */}
          <div className="form-row split-layout">
            
            {/* Thumbnail Column */}
            <div className="form-group thumbnail-group">
              <label>Project Thumbnail</label>
              <div className="thumbnail-preview">
                <img src="/api/placeholder/150/100" alt="Project Thumbnail" />
              </div>
            </div>

            {/* Meta-tags (Rich Text Mock) */}
            <div className="form-group editor-group">
              <label>Meta-tags</label>
              <div className="rich-text-container">
                <div className="rich-toolbar">
                  {/* Mock Toolbar Icons */}
                  <span>↩</span><span>↪</span><span className="ai-icon">AI</span><span>|</span>
                  <span>Paragraph ▾</span><span>|</span>
                  <span><b>B</b></span><span><i>I</i></span><span><u>A</u> ▾</span><span>|</span>
                  <span>🔗</span><span>☺</span><span>|</span>
                  <span>≡ ▾</span><span>|</span>
                  <span>...</span>
                </div>
                <div className="rich-content" contentEditable></div>
              </div>
            </div>
          </div>

          {/* Third Row: Live Link */}
          <div className="form-group">
            <label>Project Live Demo Link</label>
            <input 
              type="text" 
              name="liveLink" 
              value={formData.liveLink} 
              onChange={handleInputChange} 
              className="link-input"
            />
          </div>

          {/* Fourth Row: Metadata (Rich Text) */}
          <div className="form-group">
            <label>Metadata (150 words max.)</label>
            <div className="rich-text-container">
               <div className="rich-toolbar">
                  <span>↩</span><span>↪</span><span className="ai-icon">AI</span><span>|</span>
                  <span>Paragraph ▾</span><span>|</span>
                  <span><b>B</b></span><span><i>I</i></span><span><u>A</u> ▾</span><span>|</span>
                  <span>🔗</span><span>📷</span><span>☺</span><span>|</span>
                  <span>≡ ▾</span><span>|</span>
                  <span>...</span>
               </div>
               <div className="rich-content large" contentEditable></div>
            </div>
          </div>

          {/* Fifth Row: Personal Notes (Red Border) */}
          <div className="form-group">
            <label className="label-red">Personal Notes (not published)*</label>
            <textarea 
              className="input-red"
              name="personalNotes"
              value={formData.personalNotes}
              onChange={handleInputChange}
            />
            <p className="note-caption">
              *These notes are for personal review and do not show on the website, even when you click publish.
            </p>
          </div>

          {/* Action Footer */}
          <div className="editor-footer">
            <button className="btn-delete">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              Delete
            </button>

            <div className="footer-right">
              <button className="btn-solid">Save Draft</button>
              <button className="btn-solid">Publish Edits</button>
              <button className="btn-outline-cancel">Cancel</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProjectEditor;