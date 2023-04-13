import React from 'react'
import logo from '../images/Insta_logo.png'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <Link to="/signup"> <li>SignUp</li> </Link>
            <Link to="/signin"> <li>SignIn</li> </Link> 
            <Link to="/profile"> <li>Profile</li> </Link> 
            <Link to="/createPost"> <li>Create Post</li> </Link> 
        </ul>
    </div>
  )
}
