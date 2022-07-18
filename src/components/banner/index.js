import React from 'react'
import './style.css'
import HeroImage from '../../assets/images/heroBanner.svg'

function Banner() {
  return (
    <div className='banner'>
        <img src={HeroImage} />
    </div>
  )
}

export default Banner
