import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoginService } from '../services/DataService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, setLoginUser] = useState({});

    useEffect(() => {
        setLoginUser({
            Username: username,
            Password: password
        });
    }, [username, password]);

    const inputUsername = (e) => {
        setUsername(e.target.value);
    }

    const inputPassword = (e) => {
        setPassword(e.target.value);
    }

    const SubmitLogin = async () => {
        let token = await LoginService(loginUser);
        if (token.token != null) {
            navigate('/');
        }
    }


    return (
        <>
            <div className='login-row'>
                <div className='login-col'>
                    <p className='login-header'>Welcome Back</p>
                    <p className='login-subheader'>Login to get started</p>
                    <div className='login-box'>
                        <h2 className='login-box-header'>Login</h2>
                        <input className='input-field' placeholder='Username' type='text' id='username' style={{ marginBottom: '20px' }} onChange={(e) => inputUsername(e)} />
                        <input className='input-field' placeholder='Password' type='password' id='userPassword' onChange={(e) => inputPassword(e)} />
                        {/* <Link to='/' className='btn-link'> */}
                        <button className='login-btn' onClick={ SubmitLogin}>Login</button>
                        {/* </Link> */}
                        <div className='register-here'>
                            <p className='register-here-text'>Don't have an account?</p>
                            <Link to='/SignUp' className='register-here-link'>Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
