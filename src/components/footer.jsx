import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import '../App.css'
import logolight from '../Assets/logolight.png'
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'


const footer = () => {
  return (
    <footer>
      <div className='topfooter'>
        <div className='about'>
            <h2>ABOUT Hel<span style={{color: 'var(--color3)'}}>EOS</span></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae.</p>
            <Link to='/about'><button>Read More</button></Link>
        </div>
        <div className='menu'>
            <h2>MAIN MENU</h2>
            <ul>
                <Link to='/' className='footerlink'><li>Home</li></Link>
                <Link to='/info' className='footerlink'><li>Information</li></Link>
                <Link to='/toolkit' className='footerlink'><li>Toolkit</li></Link>
                <Link to='/about' className='footerlink'><li>About Us</li></Link>
            </ul>
        </div>
        <div className='contact'>
            <h2>Contact</h2>
            <p style={{lineHeight:'20px'}}><strong>Address: </strong>University of Nairobi, University Way, Nairobi</p>
            <ul>
                <li><a href="https://www.twitter.com"></a><BsTwitter/></li>
                <li><a href="https://www.facebook.com"></a><BsFacebook/></li>
                <li><a href="https://www.instagram.com"></a><BsInstagram/></li>
            </ul>

        </div>
        <div className='logo'>
            <img src={logolight} alt='lightlogo'/>
        </div>
      </div>

      <div className='bottomfooter'>
        <p>© Copyright 2022 Hel<span style={{color: 'var(--color3)'}}>EOS</span></p>
      </div>
    </footer>
  )
}

export default footer
