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
            <div className="right-user">
                <div className="user-avatar">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="avatar"/>
                </div>
                <div className="user-name">
                    <p>John Doe</p>
                </div>
            </div>
        </div>
    )};

    export default Navbar;