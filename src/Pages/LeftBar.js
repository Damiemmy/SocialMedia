import React from 'react'
import Friend from "../asset/1.png"
import Group from "../asset/2.png"
import Marketplace from "../asset/3.png"
import Watch from "../asset/4.png"
import Memories from "../asset/5.png"
import Events from "../asset/6.png"
import Gaming from "../asset/7.png"
import Gallery from "../asset/8.png"
import Videos from "../asset/9.png"
import Messages from "../asset/10.png"
import Fundraiser from "../asset/11.png"
import Tutorials from "../asset/12.png"
import Courses from "../asset/13.png"
import "../styles/LeftBar.scss"
import Frien from "../asset/cta.jpg"
import { useContext,useEffect } from 'react'
import { Authcontext } from '../context/Authcontext'



const LeftBar = () => {
   
    const retrieveCurrentUser=JSON.parse(localStorage.getItem('user'))

   
  return (
    <div className='LeftBar'>
        <div className='Container'>
           <div className='items'>
            {retrieveCurrentUser.map(currentUse=>(
                <div className='user' key={currentUse.id}>
                    <img src={currentUse.profilepic} alt='img'/>
                    <span className='username'>{currentUse.profilename}</span>
                </div>
                ))}
                <div className='Menu'>
                    <img src={Friend} alt='img'/>
                    <span className='username'>Friend</span>
                </div>
                <div className='Menu'>
                    <img src={Group} alt='img'/>
                    <span className='username'>Group</span>
                </div>
                <div className='Menu'>
                    <img src={Marketplace} alt='img'/>
                    <span className='username'>MarketPlace</span>
                </div>
                <div className='Menu'>
                    <img src={Watch} alt='img'/>
                    <span className='username'>Watch</span>
                </div>
                <div className='Menu'>
                    <img src={Memories} alt='img'/>
                    <span className='username'>Memories</span>
                </div>
                
            </div>
            <hr/>
            <div className='items'>
            <span style={{textAlign:'left'}}>Your shortcuts</span>
                <div className='Menu'>
                    <img src={Events} alt='img'/>
                    <span className='username'>Events</span>
                </div>
                <div className='Menu'>
                    <img src={Gaming} alt='img'/>
                    <span className='username'>Gaming</span>
                </div>
                <div className='Menu'>
                    <img src={Gallery} alt='img'/>
                    <span className='username'>Gallery</span>
                </div>
                <div className='Menu'>
                    <img src={Videos} alt='img'/>
                    <span className='username'>Videos</span>
                </div>
                <div className='Menu'>
                    <img src={Messages} alt='img'/>
                    <span className='username'>Messages</span>
                </div>
                </div>
                <hr/>
                <div className='items'>
                    <span style={{textAlign:'left'}}>Others</span>
                <div className='Menu'>
                    <img src={Fundraiser} alt='img'/>
                    <span className='username'>Fundraiser</span>
                </div>    
                <div className='Menu'>
                    <img src={Tutorials} alt='img'/>
                    <span className='username'>Tutorials</span>
                </div>
                <div className='Menu'>
                    <img src={Courses} alt='img'/>
                    <span className='username'>Courses</span>
                </div>
                <div className='Menu'>
                    <img src={Courses} alt='img'/>
                    <span className='username'>Courses</span>
                </div>
                <div className='Menu'>
                    <img src={Courses} alt='img'/>
                    <span className='username'>Courses</span>
                </div>
            </div>
            
           
        </div>
    </div>
  )
}

export default LeftBar