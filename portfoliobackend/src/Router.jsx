import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import DashboardOverview from './pages/DashboardOverview';

const Router = () => {
    return ( <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='/dashboard-overiew' element={< DashboardOverview/>}  />
                <Route path='/' element={< DashboardOverview/>}  />
            </Routes>
        </BrowserRouter>
    
    
    
    </> );
}
 
export default Router;