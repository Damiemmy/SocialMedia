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
            <span>Elsa Eddie</span>
            <div className='centercontainer'>
              <div className='left1'>
                <div>
                <FaSearchLocation/>
                <span>USA</span>
                </div>
                <div>
                <FaLanguage/>
                <span>SocialBook.com</span>
                </div>
              </div>
            <div className='right'>
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
    </div>
  )
}

export default Profile