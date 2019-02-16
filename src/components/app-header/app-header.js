import React from 'react';
import logo from '../../img/logo.svg';
import banner from '../../img/banner.jpg';
import './app-header.css';

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="app-logo">
                <img src={logo} alt="logo" />
            </div>
            
            <div className="app-banner">
                <img src={banner} alt="banner" />
            </div>
            <div className="app-user-info-block">
                <h3 className="nickname">Test User</h3>
                <h4 className="level">VIP</h4>
                <button className="btn btn-success">Login</button>
            </div>
        </div>
    );
};

export default AppHeader;