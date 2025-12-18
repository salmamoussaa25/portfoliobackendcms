import React from 'react';
import 'DashboardOverview.css';
import SearchBar from '../components/SearchBar'
import ProfileButton from '../components/ProfileButton';
import MessageNotifications from '../components/MessageNotifications';


const DashboardOverview = () => {
    return ( <>
        <div className='top-navigation-bar'>
            <img src="../assets/small_logo.png" alt="small logo of Sal's Studio" />
            <h1 className='page_title'>Overview</h1>
            <div className='navigationbar-rightside'>
            <SearchBar />
            <ProfileButton/>
            <MessageNotifications />
            </div> 
        </div>
        <div className="dashboard-container">
      <Sidebar />
      
      <main className="dashboard-content">

        <div className="action-bar">
          <div className="action-buttons">
            <button className="btn-outline">Export Data</button>
            <button className="btn-outline">Create New</button>
            <button className="btn-outline">Customize Widgets</button>
          </div>
          <div className="lang-toggle">
            <button className="lang-btn active">EN</button>
            <button className="lang-btn">AR</button>
          </div>
        </div>

        <div className="dashboard-grid">

          <StatCard title="Total Project Views" value="265" subtext="in MENA" />
          <StatCard title="Total Visitors This Month" value="400" subtext="in Egypt" />
          <StatCard title="Total Projects" value="10" subtext="per category" />

          <div className="stat-card span-2 blog-card">
            <div className="stat-header">
              <h3 className="stat-title">Upcoming Scheduled Blog Post</h3>
            </div>
            <div className="blog-content">
              <div className="blog-image-placeholder"></div> {/* Place real img here */}
              <div className="blog-info">
                <h4 className="blog-title">UX/UI Design Case Study</h4>
                <p className="blog-cat">Repair & Maintenance Platforms in Egypt</p>
                <p className="blog-timer">Uploading in <span className="timer">2d:15h:06m:09s</span></p>
              </div>
            </div>
            <div className="card-action-icon">↗</div>
          </div>


          <StatCard title="Total Categories" value="8" />


          <div className="stat-card span-2 chart-card">
             <div className="stat-header">
              <h3 className="stat-title">Visit Rates This Week</h3>
              <span className="chart-subtitle">Total Sales by Month</span>
            </div>

            <div className="chart-placeholder">
               <svg viewBox="0 0 500 150" className="simple-chart">
                 <polyline 
                    fill="none" 
                    stroke="#5FB4B8" 
                    strokeWidth="3" 
                    points="0,100 50,80 100,120 150,40 200,35 250,90 300,50 350,110 400,90 450,130 500,20" 
                 />
               </svg>
            </div>
            <div className="card-action-icon">↗</div>
          </div>

          <div className="right-col-stack">
            <StatCard title="Recent Updates" value="10" subtext="per category" className="mb-20" />
            
            <StatCard title="Portfolio Status" className="mb-20">
               <div className="stat-content">
                  <span className="stat-label-small">Live since</span>
                  <span className="stat-value">20d 13h</span>
                  <span className="stat-subtext">in MENA</span>
               </div>
            </StatCard>

            <div className="stat-card calendar-card">
              <h3 className="stat-title">Content Calendar</h3>
              <div className="calendar-grid">
               
                <span>m</span><span>t</span><span>w</span><span>t</span><span>f</span><span>s</span><span>s</span>
                <span className="text-muted">01</span><span className="text-muted">02</span><span className="text-active">03</span>
                <span>04</span><span>05</span><span>06</span><span>07</span>
                <span>08</span><span>09</span><span>10</span><span>11</span>
                <span>12</span><span>13</span><span>14</span>
              </div>
              <div className="card-action-icon">↗</div>
            </div>
          </div>

          
          <StatCard title="Data Last Downloaded from Server:" className="span-2">
            <div className="stat-content large-text">
              <span className="stat-value text-huge">2 months ago</span>
              <p className="warning-text">⚠ Make sure you download data regularly</p>
            </div>
          </StatCard>

        </div>
      </main>
    </div>
    </> );
}
 
export default DashboardOverview;