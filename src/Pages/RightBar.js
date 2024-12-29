import React from 'react'
import '../styles/RightBar.scss'
import Post from "../asset/blog-2.jpg"

const RightBar = () => {
  return (
    <div className='RightBar'>
      <div className='Container'>
        <div className='items'>
            <span>Suggestion For You</span>
            <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p>Jan Doe</p>
              </div>
              <div className='buttons'>
                <button>Follow</button>
                <button>Dismis</button>
              </div>
            </div>
            <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p>Jan Doe</p>
              </div>
              <div className='buttons'>
                <button>Follow</button>
                <button>Dismis</button>
              </div>
            </div>
        </div>
        <div className='items'>
          <span>Other</span>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span> commented on a photo
                </p>
              </div>
              <div className='buttons'>
               <span style={{fontSize:15}}> 1 min ago</span>
              </div>
          </div>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span> commented on a photo
                </p>
              </div>
              <div className='buttons'>
               <span style={{fontSize:15}}> 1 min ago</span>
              </div>
          </div>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span> commented on a photo
                </p>
              </div>
              <div className='buttons'>
               <span style={{fontSize:15}}> 1 min ago</span>
              </div>
          </div>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span> commented on a photo
                </p>
              </div>
              <div className='buttons'>
               <span style={{fontSize:15}}> 1 min ago</span>
              </div>
          </div>
          
        </div>
        <div className='items'>
          <span>Online Friends</span>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <div className='Online'></div>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span>
                </p>     
              </div>
          </div>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <div className='Online'></div>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span>
                </p>
                
              </div>
          </div>
          <div className='user'>
              <div className='userinfo'>
                <img src={Post} alt='no image'/>
                <div className='Online'></div>
                <p style={{fontSize:15, fontWeight:'unset'}}>
                  <span style={{color:'black', fontWeight:'bold'}}>Jan Doe</span>
                </p>
                
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RightBar