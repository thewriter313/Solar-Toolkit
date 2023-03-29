import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './footer.css'
import logolight from '../../Assets/logolight.png'
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'


const footer = () => {
  return (
    <footer className='flexcolumn'>
      <div className='flexrow topfooter'>
        <div className='about'>
            <h2>ABOUT Hel<span style={{color: 'var(--color3)'}}>EOS</span></h2>
            <p>Hel<span style={{color: 'var(--color3)'}}>EOS</span> is here to help you with all your solar needs. Get to know the team behind the toolkit.</p>
            <Link to='/about'><button className='btn1'>Read More</button></Link>
        </div>
        <div className='menu'>
            <h2>MAIN MENU</h2>
            <ul>
                <NavLink to='/' className='footerlink' end><li>Home</li></NavLink>
                <NavLink to='/toolkit' className='footerlink'><li>Solar Toolkit</li></NavLink>
                <NavLink to='/about' className='footerlink'><li>About Us</li></NavLink>
                <NavLink to='/info' className='footerlink'><li>Information</li></NavLink>
            </ul>
        </div>
        <div className='flexcolumn contact'>
            <h2>Contact</h2>
            <p><strong>Address: </strong>University of Nairobi, University Way, Nairobi</p>
            <ul>
                <li><a href="https://www.twitter.com"><BsTwitter/></a></li>
                <li><a href="https://www.facebook.com"><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com"><BsInstagram/></a></li>
            </ul>

        </div>
        <div className='logo'>
            <img src={logolight} alt='lightlogo'/>
        </div>
      </div>

      <div className='flexrow bottomfooter'>
        <p>© Copyright 2022 Hel<span style={{color: 'var(--color3)'}}>EOS</span></p>
      </div>
    </footer>
  )
}

export default footer
