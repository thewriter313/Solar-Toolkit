import React from 'react'
import './card.css'

const card = ({title, imageUrl,text,points}) => {
  return (
    <div className='card-container'>
        <div className='image-container'>
          <img src={imageUrl} alt="image1" />
        </div>
        <div className='card-title'>{title}</div>
        <div className='card-text'>{text}</div>
        <div className='points'>{points}</div>
    </div>
  )
}

export default card