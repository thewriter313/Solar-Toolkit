import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logodark from '../../Assets/LOGO.png'
import { RiMenuFoldLine, RiCloseFill } from 'react-icons/ri'

const Navbar = () => {

  const [toggleMenu, settoggleMenu] = useState(false)
  return (

    <div className="flexrow nav-container">
      <nav className="flexrow navbar">
        <Link to='/'><img src={logodark} alt='logo' height ='80px'/></Link>
        <ul className='navlinks'>
          <li><Link className='navLink' to='/'>Home</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/about'>About Us</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/toolkit'>Solar Toolkit</Link></li>
          <li>|</li>
          <li><Link className='navLink' to='/info'>Information</Link></li>
        </ul>
        <div className='navmenu'>
          <button onClick={() => settoggleMenu(!toggleMenu)}>{toggleMenu ? <RiCloseFill size={40}/> : <RiMenuFoldLine size={40}/>}</button>
          {toggleMenu && (
            <div className='dropdown' onClick={() => settoggleMenu(false)}>
            <ul className='flexcolumn'>
            <li><Link className='navLink' to='/'>Home</Link></li>
            <li><Link className='navLink' to='/about'>About Us</Link></li>
            <li><Link className='navLink' to='/toolkit'>Solar Toolkit</Link></li>
            <li><Link className='navLink' to='/info'>Information</Link></li>
          </ul>
          </div>
          )}
        </div>
      </nav>
    </div>

  )
}

export default Navbar
