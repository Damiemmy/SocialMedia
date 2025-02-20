import React, { useState } from 'react';
import '../styles/New.scss';
import {FaEllipsisH, FaThumbsUp,FaShare,FaComment} from 'react-icons/fa';
import Usercomment from './comment.js';

const Newpost = ({post}) => {
 const Liked=false;
 const [commented,setCommented]=useState(false);
  return (
    <div className='Newpost'>
      <div className='container'>
        <div className='user' key={post.id}>
          <div className='Userinfo'>
            <img src={post.image} alt='no image'/>
            <div className='spanuserinfor'>
            <span style={{fontWeight:'bold',cursor:'pointer'}}> John Doe</span>
            <span> 1 min ago</span>
            </div>
          </div>
          <div>
            <FaEllipsisH/>
          </div>

        </div>
        <div className='content'>
            <p>{post.description}</p>
            <img src={post.image} alt='no image'/>
        </div>
        <div className='interactiontools'>
           <div className='intericon'><FaThumbsUp/>150</div>
           <div className='intericon' onClick={()=>setCommented(!commented)}><FaComment/>12</div>
           <div className='intericon'><FaShare/>5</div>
        </div>
      <>
          {commented && <Usercomment/>}
          
      </>
      </div>
    </div>

    
  )
}

export default Newpost;