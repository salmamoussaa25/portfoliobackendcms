import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import DashboardOverview from './DashboardOverview';

const Router = () => {
    return ( <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />} />
                <Route path='' element={< DashboardOverview/>}  />
            </Routes>
        </BrowserRouter>
    
    
    
    </> );
}
 
export default Router;