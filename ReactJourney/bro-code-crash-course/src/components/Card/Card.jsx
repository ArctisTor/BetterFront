import React from 'react'
import reactsvg from '../../assets/react.svg'
import './card.css'

function Card() {


  return (
    <>
        <div className='card'>
            <img className='card-image' src={reactsvg} alt="profile picture"></img>
            <h2 className='card-title'> Your Name </h2>
            <p className='card-text'> This is a decription</p>
        </div>
    </>
  )
}

export default Card