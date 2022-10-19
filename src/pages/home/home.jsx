import React from 'react'
import './home.css'
import '../../App.css'
import panel from '../../Assets/panel2.png'
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import toolkitpic from '../../Assets/toolkitpic.png'

const home = () => { 

  return (
    <body>
      <div className='intro' >
        <img className='panel' src={panel} alt='atom'/>
        <div className='type-slogan'>
          <div className='typewriter'>
            <Typewriter
            options={{
              loop: true,
            }} 
            onInit={(typewriter) => {
              typewriter
              .typeString("<span style='color:var(--color3);'>Welcome to a Solar Photovoltaic System Design and Installation Toolkit!</span>")
              .pauseFor(1000)
              .deleteAll()
              .typeString("<span style='color:red;'>Developed by students of the University of Nairobi</span>")
              .pauseFor(1000)
              .start();
            }}/>
          </div>
          <div className='slogan'>
            <h3><strong>&#8220;</strong>Warm your home,</h3>
            <h3 style={{textAlign:'right'}}>not your planet!<strong>&#8221;</strong></h3>
          </div>
        </div>
       
      </div>
      <div className='infobox'>
        <div className='infoleft'>
          <h1>What equipment is required?</h1>
          <p><strong>Overhelmed by all the technical jargon? Fear not!</strong> We provide a complete guide to all the components required in setup and installation of solar PV system. A solar PV system consists of a solar PV array, an inverter, a battery, a solar charge controller, electrical loads, wiring, and system protection.</p>
          <Link className='infolink' to='/info'><button className='btn' >Learn More</button></Link>
        </div>        
      </div>

      <div className='toolkit'>
          <img src={toolkitpic} alt="toolkitpic" />
        <div className='toolkitright'>
          <h1>Easy to use Toolkit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, ab maxime? Aliquam id, quis repellat cum esse consequatur eligendi iusto nisi rem? Sit autem ea, animi explicabo fugit minus quas maiores repellat facere illo nisi officiis provident deserunt, saepe non et dignissimos tempore ut cupiditate voluptas temporibus nam, accusamus tempora.</p>
          <Link className='toolkitlink' to='/toolkit'><button className='btn' >Start</button></Link>
        </div>
      </div>
    </body>
    
  )
}

export default home
