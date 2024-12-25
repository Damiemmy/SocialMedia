import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Nav.scss"

const Nav = () => {
  return (
    <div className='Nav'>
        <ul>
            <li><Link to='/'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>

    </div>
  )
}

export default Nav