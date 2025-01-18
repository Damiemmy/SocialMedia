import React from 'react';
import '../styles/New.scss';
import {FaEllipsisH, FaThumbsUp,FaShare,FaComment} from 'react-icons/fa';

const Newpost = ({post}) => {
 
  return (
    <div className='Newpost'>
      <div className='container'>
        <div className='user' key={post.id}>
          <div className='Userinfo'>
            <img src={post.image} alt='no image'/>
            <div className='spanuserinfor'>
            <span style={{fontWeight:'bold'}}> John Doe</span>
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
           <div className='intericon'>150<FaThumbsUp/></div>
           <div className='intericon'>12<FaComment/></div>
           <div className='intericon'>5<FaShare/></div>

        </div>

      </div>

    </div>

    
  )
}

export default Newpost;