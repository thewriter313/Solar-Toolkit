import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (

    <div className="parent">
      <nav className="navbar">
        <ul>
          <li><Link className='navLink' to='/'>Home</Link></li>
          <li><Link className='navLink' to='/toolkit'>Solar Toolkit</Link></li>
          <li><Link className='navLink' to='/info'>Information</Link></li>
          <li><Link className='navLink' to='/about'>About Us</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar
