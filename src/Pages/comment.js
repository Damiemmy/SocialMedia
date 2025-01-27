import React from 'react';
import pic1 from '../asset/post.jpg';
import { useState } from 'react';
import '../styles/comment.scss';


const Usercomment = () => {
   
    const [Comment,setComment]=useState([
        {
          'id':1,
          'post id':1,
          'image':pic1,
          'description':'The company offers the best of computers at cheaper rate,available for staffs to work with',
          'name':'don joe'
      },
        {
          'id':2,
          'post id':2,
          'image':pic1,
          'description':'The company offers the best of computers at cheaper rate,available for staffs to work with',
          'name':'don joe'
        }
    ])
  return (
    <div className='comment'>
        {Comment.map(comments=>(
                <div className='postcomment' key={comments.id}>
                    <img src={comments.image} alt='no image'/>
                    <div className="info">
                        <span>{comments.name}</span>
                        <p>{comments.description}</p>
                    </div>
                    <div className='time'>
                        <span>1 min ago</span>
                    </div>

            </div>
        )
            
        )}
        <p>This is a comment session</p>
        </div>
  )}

export default Usercomment;