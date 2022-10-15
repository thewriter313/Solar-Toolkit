import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import '../App.css'
import logodark from '../Assets/logodark.png'
import logolight from '../Assets/logolight.png'

const Navbar = () => {
  return (

    <div className="parent">
      <nav className="navbar">
        <Link to='/'><img src={logodark} alt='logo' width ='100px'/></Link>
        <ul>
          <li><Link className='navLink' to='/'>Home</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/info'>Information</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/toolkit'>Solar Toolkit</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/about'>About Us</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar
