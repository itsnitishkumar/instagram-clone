import React from 'react'
import logo from '../images/Insta_logo.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li>SignUp</li>
            <li>SignIn</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}
