import React from 'react'
import bolu from '../asset/cta.jpg';
import storypic from '../asset/blog-2.jpg'
import '../styles/Story.scss';
import { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';

const Story = () => {
  const {currentUser}= useContext(Authcontext);
  const Stories= [
    {
      'id': 2,
      "name":"john Doe",
      "img":bolu
    },
    {
      'id': 3,
      "name":"john Doe",
      "img":bolu
  },
    {
      'id': 4,
      "name":"john Doe",
      "img":bolu
  },
  {
    'id': 4,
    "name":"john Doe",
    "img":bolu
}]
  localStorage.setItem('stories',JSON.stringify(Stories));

  const retrieveStories=JSON.parse(localStorage.getItem('stories'));


  return (
    <div className='Story'>
       <div className="Stories" >
              <img src={currentUser.profilepic} alt='no pic'/>
              <span>{currentUser.profilename}</span>
              <button>+</button>
              
        </div>
      {retrieveStories.map(storie=>(
        <div className="Stories" key={storie.id}>
              <img src={storie.img} alt='no pic'/>
              <span>{storie.name}</span>
              
        </div>
        ))}
    </div>
  )
}

export default Story