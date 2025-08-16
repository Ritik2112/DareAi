import React from 'react';
 import './HeroSection.css';
 import heroImage from '../assets/hero_imagefinal.png'; // Using one image for simplicity
 import { FaSearch } from 'react-icons/fa';
 import logo1 from '../assets/1.svg';
 import logo2 from '../assets/2.svg';
 import logo3 from '../assets/3.svg';

 const HeroSection = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title animate-title">
          DareAISearch
        </h1>
        <p className="hero-description fade-in-delay">
          Built for modern brands to win the era of AI-search with precision, scalability, and real-time control.
        </p>
        <div className="hero-logos fade-in-delay">
          <img src={logo1} alt="Logo 1" />
          <img src={logo2} alt="Logo 2" />
          <img src={logo3} alt="Logo 3" />
        </div>
        <button className="hero-button fade-in-delay" onClick={handleScrollToSection}>
          Get your AI-Search Score Now
        </button>
      </div>

      {/* New single image container */}
      <div className="hero-image-container fade-in-delay">
        <img src={heroImage} alt="DareAISearch" className="hero-image" />
      </div>
    </section>
  );
 };

 export default HeroSection;