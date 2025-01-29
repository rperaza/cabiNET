import React from 'react';
import Navbar from './navbar.jsx';
import Sidebar from './sidebar.jsx';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />
        </div>
    );
};

export default Dashboard;