import React from 'react'
import logo from '../images/Insta_logo.png'
import './SignIn.css'
import {Link} from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='signIn'>
      <div>
        <div className="loginForm">
          <img src={logo} alt="" className="signUpLogo" />
          <div>
            <input type="email" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <input type="submit" id='login-btn' value="Sign In"/>
        </div>

        <div className="loginForm2">
          Don't have an account?
          <Link to='/signup'>
            <span className='loginInForm2'> Sign Up</span>
          </Link>
        </div>

        </div>
      </div>
  )
}
