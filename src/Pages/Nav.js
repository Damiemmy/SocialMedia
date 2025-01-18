import React from 'react'
import { Link } from 'react-router-dom'
import {FaAppStore, FaApp, FaHome, FaMoon, FaSearch, FaApple, FaPersonBooth, FaImage, FaUser, FaBell} from "react-icons/fa"
import {AiOutlineAppstore, AiOutlineMail, AiOutlineProfile, AiOutlineSun} from "react-icons/ai"
import "../styles/Nav.scss"
import Frien from "../asset/cta.jpg"
import { useContext } from 'react';
import { Darkmodecontext } from '../context/Darkmodecontext';
import { FaSun } from 'react-icons/fa';
import { Authcontext } from '../context/Authcontext';




const Nav = () => {
  const {toogle,darkmode}= useContext(Darkmodecontext);
  const {currentUser,login}=useContext(Authcontext);
 
  
  
  return (
    
    <div className='Nav'>
         
        <div className='Navleft'>
        <Link style={{textDecoration:'none'}} to={'/'}>
        <span>SocialBook</span>
        </Link>
        <FaHome/>
        {darkmode? <AiOutlineSun onClick={toogle}/>:<FaMoon onClick={toogle}/>}
        <AiOutlineAppstore/>
        <div className='search'>
            <FaSearch/>
            <input type='text' placeholder='Search'/>
        </div>
        </div>
        <div className='Navright'>
        <FaUser/>
        <AiOutlineMail/>
        <FaBell/>
        <div className='user'>
            <img src={Frien} alt='img'/>
            <span className='username'>{currentUser.profilename}</span>
        </div>
        </div>

    </div>
  )
}

export default Nav