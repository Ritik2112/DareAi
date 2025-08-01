// src/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import heroImage from '../assets/DareAi_hero_img.webp';

// Import the hero image. Make sure this path is correct relative to this file.
// You should place DareAi_hero_img.webp in your 'public' folder or 'src/assets' folder.
// If in 'public' folder, use: '/DareAi_hero_img.webp'
// If in 'src/assets' folder, you might need to import it like:
// import heroImage from './assets/DareAi_hero_img.webp';
// For simplicity, assuming it's in 'public' or directly accessible.
// Corrected path from 'assests' to 'assets'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Main heading */}
        <h1 className="hero-title">DareAISearch</h1>

        {/* Description text */}
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>

        {/* Call to action button */}
        <button className="hero-button">
          Claim Your Report Now
        </button>
      </div>

      <div className="hero-image-container">
        {/* Hero image without onError fallback */}
        <img
          src={heroImage}
          alt="DareAiSearch marketing illustration with a megaphone and social media icons"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection; // Export the component
