import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <>
            <div className='login-row'>
                <div className='login-col'>
                    <p className='login-header'>Welcome</p>
                    <p className='login-subheader'>Sign Up to get started</p>
                    <div className='login-box'>
                        <h2 className='login-box-header'>Sign Up</h2>
                        <input className='input-field' placeholder='Email' type='email'/>
                        <input className='input-field' placeholder='Password' type='password'/>
                        <button as={Link} to='/HomePage' className='login-btn'>Sign Up</button>
                        <div className='register-here'>
                            <p className='register-here-text'>Already have an account?</p>
                            <Link to={'/Login'} className='register-here-link'>Login Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
