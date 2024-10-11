import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import karki from '../../assets/LinkedIn.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={karki} alt="" />
      <h1><span>I'm Gaurav Karki,</span> Frontend Developer based in India.</h1>
      <p>I am a frontend developer from Delhi, India with 2 year of exprience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
