import React from 'react';
import '/src/styles/navbar.css';
import logo from '/logo.png';

const Navbar = () => {
    return (
        <div className="global-navbar">
            <div className="navbar-logo">
                <a href="#home"><img src={logo} alt="logo" className="navbar-logo" title="home" /></a>
            </div>
            <div className="navbar-search-container">
            <form class="search-bar-form">
                <div class="search-bar">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </div>
            </form>
            </div>
            <div className="navbar-user">
                <div className="user-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="avatar">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                </div>
                <div className="user-name">
                    <p>John Doe</p>
                </div>
            </div>
        </div>
    )};

    export default Navbar;