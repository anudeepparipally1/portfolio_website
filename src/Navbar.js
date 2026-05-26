import React from 'react';
import './Navbar.css';

function Navbar({ activeSection, setActiveSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleNavClick('home')}>
            Portfolio
          </a>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#education" 
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => handleNavClick('education')}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => handleNavClick('experience')}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#connect" 
              className={`nav-link ${activeSection === 'connect' ? 'active' : ''}`}
              onClick={() => handleNavClick('connect')}
            >
              Connect With Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
