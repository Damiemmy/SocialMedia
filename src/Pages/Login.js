import React from 'react'
import "../styles/Login.scss";
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Authcontext } from '../context/Authcontext';


const Login = () => {
const {login}=useContext(Authcontext);
const handlelogin=()=>{
    login();
}
 
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Social Book</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error facere tempore delectus, maiores omnis amet laboriosam,
            vel quia saepe alias similique nesciunt asperiores quisquam repellat velit nostrum totam dolores corrupti.</p>
            <span>Don't you have an account?</span>
            <Link to='/register'>
          <button>Register</button></Link>
        </div>
        <div className='right'>
            <h1>Login</h1>
            <form>
              <input type='text' placeholder='Username'/>
              <input type='password' placeholder='Password'/>
              <Link to={'/'}>
              <button onClick={handlelogin}>Login</button>
              </Link>
            </form>
        </div>
      </div>
    </div>
    
  )
}

export default Login