import React from 'react'
import logo from '../images/Insta_logo.png'
import './SignUp.css'
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="form">
          <img src={logo} alt="" className="signUpLogo" />
          <p className="loginPara">
            Sign up to see photos and videos <br/>from your friends
          </p>
          <div>
            <input type="email" name='email' id='email' placeholder='Email' />
          </div>
          <div>
            <input type="text" name='name' id='name' placeholder='Full Name' />
          </div>
          <div>
            <input type="text" name='username' id='username' placeholder='Username' />
          </div>
          <div>
            <input type="password" name='password' id='password' placeholder='Password' />
          </div>
          <p className="loginPara loginPara2">By signing up, you agree to our Terms, <br/> privacy policy and cookies policy.</p>
          <input type="submit" id='submit-btn' value="Sign Up"/>
        </div>
        <div className="form2">
          Already have an account?
          <Link to='/signin'>
            <span className='signInForm2'> Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
