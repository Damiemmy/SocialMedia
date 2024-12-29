import React from 'react'
import { Link } from 'react-router-dom'
import {FaAppStore, FaApp, FaHome, FaMoon, FaSearch, FaApple, FaPersonBooth, FaImage, FaUser, FaBell} from "react-icons/fa"
import {AiOutlineAppstore, AiOutlineMail, AiOutlineProfile} from "react-icons/ai"
import "../styles/Nav.scss"
import Frien from "../asset/cta.jpg"
const Nav = () => {
  return (
    <div className='Nav'>
         
        <div className='Navleft'>
        <Link style={{textDecoration:'none'}} to={'/'}>
        <span>SocialBook</span>
        </Link>
        <FaHome/>
        <FaMoon/>
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
            <span className='username'>don joe</span>
        </div>
        </div>

    </div>
  )
}

export default Nav