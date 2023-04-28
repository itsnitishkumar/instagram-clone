import React, { useContext } from 'react'
import logo from '../../images/Insta_logo.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'


export default function Navbar({login}) {

  const {setModalOpen} = useContext(LoginContext)

  
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
          {localStorage.getItem("jwt") ? (
            <>
              <Link to="/profile"> <li>Profile</li> </Link> 
              <Link to="/createPost"> <li>Create Post</li> </Link> 
              <Link to="/followingpost" style={{marginLeft: "20px"}}> <li>My Following</li> </Link> 

              <Link to={""}>
                <button className='primaryBtn' onClick={()=> setModalOpen(true)}>
                Log Out
                </button>
              </Link> 
            </>
          ) : (
            <>
              <Link to="/signup"> <li>SignUp</li> </Link>
              <Link to="/signin"> <li>SignIn</li> </Link>
            </>
          )}


        </ul>
    </div>
  )
}
