import React from 'react'
import './about.css'
import '../../App.css'
import green from '../../Assets/goinggreen.png'
import TeamCard from '../../components/teamcard.jsx'
import teamData from '../../Data/TeamData'

const about = () => {
  return (
      <div className='aboutuspage'>
        <img className='goinggreen' src={green} alt="going green" />
        <div className='mission dark wide'>
          <h1>Who We Are</h1>
          <p>Hi, fellow curious Kenyan. Glad you are here. We are HelEOS, a student led group providing a simple tool for all your home solar needs. We hope, together with you, to be part of the people to lead Kenya into an era of renewable energy as we try to do our part to save our planet.</p>
        </div>
        <div className='story wide'>
          <h1>Our Story</h1>
          <p>Inspired by the ever enlarging danger of climate change and global warming, we set out to reduce our carbon footprint as students of the University of Nairobi. We identified a gap in the market for a toolkit that sizes solar powered homes which was previously unexplored.</p>
        </div>
        <div className='team dark wide'>
          <h1>Our Team</h1>
          <div className='teamcards'>
            {teamData.map(data=>(
              <TeamCard
              image={data.image}
              title={data.title}
              name={data.name}
              occupation={data.occupation} />
        ))}
      </div>
    </div>
    <div className='joinus wide'>
          <h1>Join Us</h1>
          <p>email:</p>
        </div>
  </div>
    
    
  )
}

export default about
