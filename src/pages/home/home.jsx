import React from 'react'
import './home.css'
import '../../App.css'
import panel from '../../Assets/panel.png'
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";

const home = () => { 

  return (
    <body>
      <div className='intro' >
        <img className='panel' src={panel} alt='atom'/>
        <div className='typewriter'>
          <Typewriter
          options={{
            autoStart: false,
            loop: true,
          }} 
          onInit={(typewriter) => {
            typewriter
            .typeString("<span style='color:var(--color3);'>Welcome to Solar Photovoltaic System Design and Installation Toolkit!</span>")
            .pauseFor(1000)
            .deleteAll()
            .typeString("<span style='color:red;'>Developed by the students from the University of Nairobi</span>")
            .pauseFor(1000)
            .start();
          }}/>
        </div>
      </div>
      <div className='infobox'>
        <div className='infoleft'>
          <h1>What equipment is required?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vitae odit alias labore deserunt temporibus voluptatem ex sequi repudiandae sapiente. Sit nisi nam sapiente tenetur maxime aspernatur itaque beatae facilis pariatur illum. Voluptate maxime quam dicta dolorum exercitationem iure culpa voluptatum. Sint neque porro nemo esse architecto ea blanditiis temporibus.</p>
          <Link className='infolink' to='/info'><button className='infobtn' >Know More...</button></Link>
        </div>        
      </div>
    </body>
    
  )
}

export default home
