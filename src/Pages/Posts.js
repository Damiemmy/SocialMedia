import React from 'react'
import pic1 from '../asset/post.jpg';
import Newpost from './Newpost';
import { useState } from 'react';

const Posts = () => {

  const [Feed,setFeed]=useState([
    {
      'id':1,
      'post id':1,
      'image':pic1,
      'description': 'The company with computers available for staffs to work with'
  },
    {
      'id':2,
      'post id':1,
      'image':pic1,
      'description':'The company with computers available for staffs to work with'
  },
    {
      'id':3,
      'post id':1,
      'image':pic1,
      'description':'The company with computers available for staffs to work with'
  }
])
localStorage.setItem('Feed',JSON.stringify(Feed))
const New= JSON.parse(localStorage.getItem('Feed'))
  return (
    <div>
      {New.map(posted=>(
        
        <Newpost
        post={posted} key={New.id}/>
      
       
      ))}
      <div>hi</div>
    </div>
  )
}

export default Posts;