import React from 'react'
import './Hero.css'
import photo from '../assets/photo.jpg'
const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={photo}></img>
        <h1><span>I'm Praveena,</span> A Full Stack Developer</h1>
        <p>A full-stack developer proficient in both front-end and back-end technologies, creating scalable and efficient web applications. Seeking to contribute to innovative projects while expanding my expertise in modern development frameworks.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
    )
}

export default Hero