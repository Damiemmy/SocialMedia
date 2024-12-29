import React from 'react'
import "../styles/Register.scss";
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='Register'>
      <div className='card'>
        <div className='left'>
          <h1>Social Book.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error facere tempore delectus, maiores omnis amet laboriosam,
            vel quia saepe alias similique nesciunt asperiores quisquam repellat velit nostrum totam dolores corrupti.</p>
          <span>Do you have an account?</span>
          <Link to='/login'><button>Login</button></Link>
        </div>
        <div className='right'>
            <h1>Register</h1>
            <form>
              <input type='text' placeholder='Username'/>
              <input type='email' placeholder='Email'/>
              <input type='password' placeholder='Password'/>
              <input type='text' placeholder='Name'/>
              <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register