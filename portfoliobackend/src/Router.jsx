import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import DashboardOverview from './pages/DashboardOverview';
import ProjectManager from './pages/ProjectManager';
import ProjectEditor from './pages/ProjectEditor';
import MessageInbox from './pages/MessageInbox';
import ProfileSettings from './pages/ProfileSettings'

const Router = () => {
    return ( <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/dashboard-overview' element={< DashboardOverview />}  />
                <Route path='/project-manager' element={< ProjectManager />}  />
                <Route path='/project-editor' element={< ProjectEditor />}  />
                <Route path='/message-inbox' element={< MessageInbox />}  />
                <Route path='/profile-settings' element={< ProfileSettings />}  />
                
            </Routes>
        </BrowserRouter>
    
    
    
    </> );
}
 
export default Router;