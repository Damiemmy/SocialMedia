import React from 'react'
import { FaFacebook, FaLanguage, FaMailBulk, FaSearchLocation } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import '../styles/Profile.scss';
import profile from '../asset/profile.jpg'
import profilecover from '../asset/profilecover.jpg'
import { FaEllipsisV } from 'react-icons/fa';
import Newpost from './Newpost';
import Posts from './Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="image">
        <img src={profilecover} alt='no image' className='cover'/>
        <img src={profile} alt='no image' className='profile'/>
      </div>
      <div className="profilecontainer">
        <div className='userinfo'>
          <div className="left">
            <FaFacebook className='blue'/>
            <FaInstagram className='blue'/>
            <FaTwitter className='blue'/>
            <FaLinkedin className='blue'/>
            <FaPinterest className='blue'/>

          </div>
          <div className="center">
            <div className="username">
            <span>Elsa Eddie</span>
            </div>
            <div className='centercontainer'>
              <div className='info'>
                <div className='items'>
                  <FaSearchLocation/>
                  <span>USA</span>
                </div>
                <div className='items'>
                  <FaLanguage/>
                  <span>SocialBook.com</span>
                </div>
              </div>
            <div className='button'>
              <button>follow</button>
            </div>
          </div>

          </div>
          <div className="right">
            <FaMailBulk/>
            <FaEllipsisV/>

          </div>
         
        </div>  
        
      </div>  
      <Posts/>
    </div>
  )
}

export default Profile