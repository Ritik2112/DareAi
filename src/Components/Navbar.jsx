// src/Navbar.jsx
import React, { useState } from 'react'; // Import useState hook
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  // State to manage the visibility of the mobile navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left section: Brand name or logo */}
      <div className="navbar-brand">
        DAREAISEARCH
      </div>

      {/* Hamburger icon for mobile view */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        {/* You can use a simple div with pseudo-elements for the bars, or an SVG icon */}
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </button>

      {/* Right section: Navigation links */}
      {/* Conditionally apply 'open' class based on isMenuOpen state */}
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#benefits" onClick={() => setIsMenuOpen(false)}>Benefits</a></li>
        <li><a href="#what-is-geo" onClick={() => setIsMenuOpen(false)}>What is GEO?</a></li>
        <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
        <li><a href="#why-dareaisearch" onClick={() => setIsMenuOpen(false)}>Why DareAiSearch</a></li>
        <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a></li>
      </ul>
    </nav>
  );
};

export default Navbar; // Export the component so it can be used in other files
