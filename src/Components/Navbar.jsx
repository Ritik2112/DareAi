import React, { useState } from 'react';
import './Navbar.css';
import DareAiLogo from '../assets/DareAISearch_logo.png'; // Import the logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling to a section
  const handleScrollToSection = (event, sectionId) => {
    // Prevent the default anchor link behavior (the abrupt jump)
    event.preventDefault();

    // Close the mobile menu if it's open
    setIsMenuOpen(false);

    // Get the target section element by its ID
    const section = document.getElementById(sectionId);

    // If the section exists, scroll to it smoothly
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left section: Brand name or logo */}
      <div className="navbar-brand">
        {/* Replaced the text heading with an image */}
        <img src={DareAiLogo} alt="DareAISearch Logo" className="navbar-logo" />
      </div>

      {/* Hamburger icon for mobile view */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </button>

      {/* Right section: Navigation links */}
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#benefits" onClick={(e) => handleScrollToSection(e, 'benefits')}>Benefits</a>
        </li>
        <li>
          <a href="#What-is-geo" onClick={(e) => handleScrollToSection(e, 'What-is-geo')}>What is GEO?</a>
        </li>
        <li>
          <a href="#features" onClick={(e) => handleScrollToSection(e, 'features')}>Features</a>
        </li>
        <li>
          <a href="#Why-DareAi" onClick={(e) => handleScrollToSection(e, 'Why-DareAi')}>Why DareAISearch</a>
        </li>
        <li>
          <a href="#reviews" onClick={(e) => handleScrollToSection(e, 'reviews')}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;