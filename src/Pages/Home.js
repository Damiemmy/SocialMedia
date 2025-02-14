import React from 'react';
import '../styles/Home.scss';
import friend from '../asset/cta.jpg';
import feed from '../asset/homepic.jpg';
import Feed from '../Pages/Feed';
import Story from './Story';
import Posts from './Posts';

const Home = () => {
  return (
    <div className='home'>
      <Story/>
      <Posts/>
      
      
    </div>
  )
}

export default Home;