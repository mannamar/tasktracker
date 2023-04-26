import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useState } from 'react';

export default function Login() {
    

    return (
        <>
            <div className='login-row'>
                <div className='login-col'>
                    <p className='login-header'>Welcome Back</p>
                    <p className='login-subheader'>Login to get started</p>
                    <div className='login-box'>
                        <h2 className='login-box-header'>Login</h2>
                        <input className='input-field' placeholder='Username' type='text' id='username'/>
                        <input className='input-field' placeholder='Password' type='password' id='userPassword' />
                        <Link to='/' className='btn-link'>
                            <button className='login-btn'>Login</button>
                        </Link>
                        <div className='register-here'>
                            <p className='register-here-text'>Don't have an account?</p>
                            <Link to={'/SignUp'} className='register-here-link'>Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
