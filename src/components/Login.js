import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LoginService, GetUserInfo } from '../services/DataService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [loginUser, setLoginUser] = useState({});
    // const [token, setToken] = useState('');

    // useEffect(() => {
    //     setLoginUser({
    //         Username: username,
    //         Password: password
    //     });
    // }, [username, password]);

    const inputUsername = (e) => {
        setUsername(e.target.value);
    }

    const inputPassword = (e) => {
        setPassword(e.target.value);
    }

    const SubmitLogin = async () => {
        let loginUser = {
            Username: username,
            Password: password
        }
        let token = await LoginService(loginUser);
        let userInfo = await GetUserInfo(username);
        if (token.token != null) {
            localStorage.setItem("token", token.token);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            navigate('/');
        }
    }

    // const LoginInfo = async () => {
    //     localStorage.setItem('userInfo', JSON.stringify(await GetUserInfo(username)));
    // }

    // useEffect(() => {
    //     if (token.token != null) {
    //         LoginInfo();
    //         navigate('/');
    //     }
    // }, [token]);


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
