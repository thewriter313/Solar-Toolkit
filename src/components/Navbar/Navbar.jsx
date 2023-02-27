import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logodark from '../../Assets/logodark.png'


const Navbar = () => {
  return (

    <div className="flexrow nav-container">
      <nav className="flexrow navbar">
        <Link to='/'><img src={logodark} alt='logo' width ='100px'/></Link>
        <ul>
          <li><Link className='navLink' to='/'>Home</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/info'>Information</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/toolkit'>Solar Toolkit</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/about'>About Us</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/catalogue'>Catalogue</Link></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar
