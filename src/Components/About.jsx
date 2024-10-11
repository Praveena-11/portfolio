import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <h4>A passionate Full Stack Developer skilled in HTML,CSS,JavaScript,React,Java and Nodejs. I have hands-on experience through internships, including web development at MindfulAI Technology.My projects include building Priscription Management System, portfolios, and login pages. I am always eager to learn and contribute to innovative web solutions.</h4>
      <div className="about-skills">
        <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"90%"}}/></div>
        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
        <div className="about-skill"><p>React</p><hr style={{width:"70%"}}/></div>
        <div className="about-skill"><p>NodeJs</p><hr style={{width:"30%"}}/></div>
        <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
      </div>
      </div>
    </div>
  )
}
