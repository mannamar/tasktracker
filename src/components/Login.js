import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className='login-row'>
                <div className='login-col'>
                    <p className='login-header'>Welcome Back</p>
                    <p className='login-subheader'>Login to get started</p>
                    <div className='login-box'>
                        <h2 className='login-box-header'>Login</h2>
                        <input className='input-field' placeholder='Email' type='email'/>
                        <input className='input-field' placeholder='Password' type='password'/>
                        <button className='login-btn'>Login</button>
                        <div className='register-here'>
                            <p className='register-here-text'>Don't have an account?</p>
                            <p className='register-here-link'>Register Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
