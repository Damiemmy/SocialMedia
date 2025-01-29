import React from 'react';
import pic1 from '../asset/post.jpg';
import { useState } from 'react';
import '../styles/comment.scss';
import { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';


const Usercomment = () => {
  const {currentUser}=useContext(Authcontext);
   
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
        <div style={{marginBottom:25}} className="postcomment">
          <img src={currentUser.profileimage} alt='no image'/>
          <span style={{gap:0,fontWeight:500}}>{currentUser.profilename}</span>
          <input placeholder='write a comment' style={{width:'90%',height:'50px;',padding:8,border:'none;'}}/>
          <button style={{padding:8,color:'white',backgroundColor:'blue',cursor:'pointer',borderColor:'blue'}}>Send</button>
          
        </div>
        {Comment.map(comments=>(
                
                <div className='postcomment' key={comments.id}>
                    <img src={comments.image} alt='no image'/>
                    <div className="info">
                        <span className='span1'>{comments.name}</span>
                        <span className='span2'>{comments.description}</span>
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