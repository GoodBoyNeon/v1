import React, { useState } from 'react';
import './nav.css';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="navdialog">
      <a
        href="#"
        class={activeNav === '#' ? 'active icon fa-solid fa-house' : 'icon fa-solid fa-house'}
        onClick={() => setActiveNav('#')}
      ></a>
      <a
        href="#about"
        className={
          activeNav === '#about'
            ? 'active icon fa-solid fa-circle-info'
            : 'icon fa-solid fa-circle-info'
        }
        onClick={() => setActiveNav('#about')}
      ></a>
      <a
        href="#projects"
        className={`icon fa-solid fa-wrench ${activeNav === '#projects' ? 'active' : ''}`}
        onClick={() => setActiveNav('#skills')}
      ></a>
      <a
        href="#contact"        
        className={`icon fa-solid fa-envelope ${activeNav === '#contact' ? 'active' : ''}`}
        onClick={() => setActiveNav('#contact')}
      ></a>
    </nav>
  );
}

export default Nav;
