import React, { Component } from 'react';
import '../styling/LoginPage.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="Login_container">
                <h2>Landing Page</h2>
                <p>User Name</p>
                <input className="Login_text"></input>
                <p>Password</p>
                <input type="password" className="Login_text"></input>
                <br />
                <button className="Login_confirm">Go</button>
            </div>
        );
    }
}

export default LoginPage;