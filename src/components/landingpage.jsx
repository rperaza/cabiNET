import React, { useState } from 'react';
import './styles/landingpage.css';
import logo from '/logo.png';

const LandingPage = ({ onLogin }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoginForm) {
            onLogin(formData);
        } else {
            console.log('Signup: ', formData);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="landing-container">
            <nav className="landing-nav">
                <div className="landing-logo">
                    <a href="#home"><img src={logo} alt="logo" className="landing-logo" title="home" /></a>
                </div>
            </nav>
        </div>
    )


}