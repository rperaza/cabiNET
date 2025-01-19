import React from 'react';
import './navbar.css';
import logo from './logo.png';

const Navbar = () => {
    return (
        <>
            <div className="global-navbar">
                <div className="left">
                    <img src={logo} alt="logo" className="navbar-logo" />
                </div>
            </div>
            <div className="right">
            </div>
        </>
    )};