import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
  return (
    <div className="navbar">
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
      <li><Link activeClass='active' to='home'spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
            <li><Link activeClass='active' to='about'spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link activeClass='active' to='services'spy={true} smooth={true} offset={-100} duration={500}>Services</Link></li>
            <li><Link activeClass='active' to='projects'spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
            <li><Link activeClass='active' to='contact'spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
        </ul>
    </div>
  )
}
