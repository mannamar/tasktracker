import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useState, useEffect } from 'react';
import { CreateUserAccount } from '../services/DataService';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    // public int Id { get; set; } 
    // public string? UserName { get; set;}
    // public string? Password { get; set;}

    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [createUser, setCreateUser] = useState({});

    useEffect(() => {
        setCreateUser({
            id: 0,
            userName: username,
            password: password
        });
    }, [username, password]);

    // useEffect(() => {console.log(createUser)}, [createUser]);


    const [usernameError, setUsernameError] = useState('');
    const [validUsernameColor, setValidUsernameColor] = useState('red');

    const [lengthError, setLengthError] = useState('');
    const [validLengthError, setValidLengthError] = useState('red');

    const [lowercaseError, setlowercaseError] = useState('');
    const [validLowercaseColor, setValidLowercaseColor] = useState('red');

    const [uppercaseError, setUppercaseError] = useState('');
    const [validUppercaseColor, setValidUppercaseColor] = useState('red');

    const [numberError, setNumberError] = useState('');
    const [validNumberColor, setValidNumberColor] = useState('red');

    const [symbolError, setSymbolError] = useState('');
    const [validSymbolColor, setValidSymbolColor] = useState('red');

    const hasLowerCase= (str) => {
        for(let i = 0; i < str.length; i++) {
            if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
                return true;
            }
        }
        return false;
    }

    const hasUpperCase = (str) => {
        for(let i = 0; i < str.length; i++) {
            if(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
                return true;
            }
        }
        return false;
    }

    const hasNumber = (str) => {
        for(let i = 0; i < str.length; i++) {
            if(str.charAt(i) >= '0' && str.charAt(i) <= '9') {
                return true;
            }
        }
        return false;
    }

    const hasSymbol = (str) => {
        for(let i = 0; i < str.length; i++) {
            if((str.charAt(i) >= '!' && str.charAt(i) <= '/') || (str.charAt(i) >= ':' && str.charAt(i) <= '@') || (str.charAt(i) >= '[' && str.charAt(i) <= '`')
                || (str.charAt(i) >= '{' && str.charAt(i) <= '~')) {
                    return true;
            }
        }
        return false;
    }

    const validateUsername = (e) => {
        let username = e.target.value;
  
        if (validator.isLength(username, {min: 3, max: undefined})) {
            setUsernameError('Valid Username');
            setValidUsernameColor('green');
            setUsername(username);
        } else {
            setUsernameError('Username must be minimum 3 Characters');
            setValidUsernameColor('red');
            setUsername('');
        }
    }

    const validatePassword = (e) => {
        let password = e.target.value;
        
        // Validate Length of Minimum 8 Characters
        if (validator.isLength(password, {min: 8, max: undefined})) {
            setLengthError('Valid Length');
            setValidLengthError('green');
        } else {
            setLengthError('Minimum 8 Characters');
            setValidLengthError('red');
        }

        // Validate Password Has 1 Lowercase
        if (hasLowerCase(password)) {
            setlowercaseError('Has Lowercase');
            setValidLowercaseColor('green');
        } else {
            setlowercaseError('Minimum 1 Lowercase');
            setValidLowercaseColor('red');
        }

        // Validate Password Has 1 Uppercase
        if (hasUpperCase(password)) {
            setUppercaseError('Has Uppercase');
            setValidUppercaseColor('green');
        } else {
            setUppercaseError('Minimum 1 Uppercase');
            setValidUppercaseColor('red');
        }

        // Validate Password Has 1 Number
        if (hasNumber(password)) {
            setNumberError('Has Number');
            setValidNumberColor('green');
        } else {
            setNumberError('Minimum 1 Number');
            setValidNumberColor('red');
        }

        // Validate Password Has 1 Symbol
        if (hasSymbol(password)) {
            setSymbolError('Has Symbol');
            setValidSymbolColor('green');
        } else {
            setSymbolError('Minimum 1 Symbol');
            setValidSymbolColor('red');
        }

        if (validator.isStrongPassword(password)) {
            setPassword(password);
        } else {
            setPassword('');
        }
    }

    const SubmitClick = async () => {
        let isCreated = await CreateUserAccount(createUser);

        if (isCreated) {
            navigate('/');
        } else {
            alert('Error account not created');
        }
    }


    return (
        <>
            <div className='login-row'>
                <div className='login-col'>
                    <p className='login-header'>Welcome</p>
                    <p className='login-subheader'>Sign Up to get started</p>
                    <div className='login-box'>
                        <h2 className='login-box-header'>Sign Up</h2>
                        <input className='input-field' placeholder='Username' type='text' id='username' onChange={(e) => validateUsername(e)}/>
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: `${validUsernameColor}`,
                            marginBottom: '15px',
                            wordWrap: 'normal',
                        }}>{usernameError}</span>
                        <input className='input-field' placeholder='Password' type='password' id='userPassword' onChange={(e) => validatePassword(e)}/>
                        <ul style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            listStyleType: 'none',
                            padding: '0',
                            margin: '0'
                        }}>
                            <li style={{color: `${validLengthError}`}}>{lengthError}</li>
                            <li style={{color: `${validLowercaseColor}`}}>{lowercaseError}</li>
                            <li style={{color: `${validUppercaseColor}`}}>{uppercaseError}</li>
                            <li style={{color: `${validNumberColor}`}}>{numberError}</li>
                            <li style={{color: `${validSymbolColor}`}}>{symbolError}</li>
                        </ul>
                        {/* <Link to='/' className='btn-link'> */}
                            <button className='login-btn' onClick={SubmitClick}>Sign Up</button>
                        {/* </Link> */}
                        <div className='register-here'>
                            <p className='register-here-text'>Already have an account?</p>
                            <Link to='/Login' className='register-here-link'>Login Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
