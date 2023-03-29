import React, {useState} from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logodark from '../../Assets/homelogo.png'
import { RiMenuFoldLine, RiCloseFill } from 'react-icons/ri'

const Navbar = () => {

  const [toggleMenu, settoggleMenu] = useState(false)
  return (

    <div className="flexrow nav-container">
      <nav className="flexrow navbar">
        <Link to='/'><img src={logodark} alt='logo' height ='80px'/></Link>
        <ul className='navlinks'>
          <li><NavLink className='navLink' to='/' end>Home</NavLink></li>
          <li>|</li>
          <li><NavLink className='navLink' style={{padding: '20px', backgroundColor: '#000', borderRadius: '10px', color: '#fff'}} to='/toolkit'>Solar Toolkit</NavLink></li>
          <li>|</li>
          <li><NavLink className='navLink' to='/about'>About Us</NavLink></li>
          <li>|</li>
          <li><NavLink className='navLink' to='/info'>Information</NavLink></li>
        </ul>
        <div className='navmenu'>
          <button onClick={() => settoggleMenu(!toggleMenu)}>{toggleMenu ? <RiCloseFill size={40}/> : <RiMenuFoldLine size={40}/>}</button>
          {toggleMenu && (
            <div className='dropdown' onClick={() => settoggleMenu(false)}>
            <ul className='flexcolumn'>
            <li><NavLink className='navLink' to='/' end>Home</NavLink></li>
            <li><NavLink className='navLink' to='/toolkit'>Solar Toolkit</NavLink></li>
            <li><NavLink className='navLink' to='/about'>About Us</NavLink></li>
            <li><NavLink className='navLink' to='/info'>Information</NavLink></li>
          </ul>
          </div>
          )}
        </div>
      </nav>
    </div>

  )
}

export default Navbar
