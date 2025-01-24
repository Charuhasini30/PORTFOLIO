import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Welcome to Charu's Portfolio</h1>
        <p>Innovative Developer | AI Enthusiast | Cybersecurity Expert</p>
        <button className="cta-button">Explore More</button>
      </div>
    </header>
  );
}

export default Header;
