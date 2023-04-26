import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useState } from 'react';

export default function SignUp() {
    const [usernameError, setUsernameError] = useState('Username must be minimum 3 characters');
    const [validUsernameColor, setValidUsernameColor] = useState('red');

    const [validPassword, setValidPassword] = useState(false);

    const [lengthError, setLengthError] = useState('Minimum 8 Characters');
    const [validLengthError, setValidLengthError] = useState('red');

    const [lowercaseError, setlowercaseError] = useState('Minimum 1 Lowercase');
    const [validLowercaseColor, setValidLowercaseColor] = useState('red');

    const [uppercaseError, setUppercaseError] = useState('Minimum 1 Uppercase');
    const [validUppercaseColor, setValidUppercaseColor] = useState('red');

    const [numberError, setNumberError] = useState('Minimum 1 Number');
    const [validNumberColor, setValidNumberColor] = useState('red');

    const [symbolError, setSymbolError] = useState('Minimum 1 Symbol');
    const [validSymbolColor, setValidSymbolColor] = useState('red');

    function hasLowerCase(str) {
        for(let x = 0; x < str.length; x++) {
            if(str.charAt(x) >= 'a' && str.charAt(x) <= 'z') {
                return true;
            }
        }
        return false;
    }

    function hasUpperCase(str) {
        for(let x = 0; x < str.length; x++) {
            if(str.charAt(x) >= 'A' && str.charAt(x) <= 'Z') {
                return true;
            }
        }
        return false;
    }

    function hasNumber(str) {
        for(let x = 0; x < str.length; x++) {
            if(str.charAt(x) >= '0' && str.charAt(x) <= '9') {
                return true;
            }
        }
        return false;
    }

    function hasSymbol(str) {
        for(let x = 0; x < str.length; x++) {
            if((str.charAt(x) >= '!' && str.charAt(x) <= '/') || (str.charAt(x) >= ':' && str.charAt(x) <= '@') || (str.charAt(x) >= '[' && str.charAt(x) <= '`') || (str.charAt(x) >= '{' && str.charAt(x) <= '~')) {
                return true;
            }
        }
        return false;
    }

    const validateUsername = (e) => {
        var email = e.target.value;
  
        if (validator.isStrongPassword(email, { minLength: 3, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0, returnScore: false})) {
            setUsernameError('Valid Username');
            setValidUsernameColor('green');
        } else {
            setUsernameError('Username must be minimum 3 Characters');
            setValidUsernameColor('red');
        }
    }

    const validatePassword = (e) => {
        var password = e.target.value;
        
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
            setUppercaseError('Has Lowercase');
            setValidUppercaseColor('green');
        } else {
            setUppercaseError('Minimum 1 Lowercase');
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
            setValidPassword(true);
        } else {
            setValidPassword(false);
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
                            marginBottom: '15px',
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
                        <input className='input-field' placeholder='Confirm Password' type='password'/>
                        <Link to='/' className='btn-link'>
                            <button className='login-btn'>Sign Up</button>
                        </Link>
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
