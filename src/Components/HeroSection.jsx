import React from 'react';
import './HeroSection.css';
import heroImage1 from '../assets/hero_image1.png';
import heroImage2 from '../assets/hero_image2.png';
import heroImage3 from '../assets/hero_image3.png';
import mobileHeroImage from '../assets/hero_image2.png'; // Use one of your images as the static mobile image

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
        <h1 className="hero-title">DareAISearch</h1>
        <p className="hero-description">
         Built for modern brands to win the era of AI-search with precision, scalability, and real-time control.
        </p>
        <button className="hero-button" onClick={handleScrollToSection}>
          Get your Ai Score Now
        </button>
      </div>

      {/* This single image will be shown only on smaller screens via CSS */}
      <div className="hero-mobile-image-container">
        <img src={mobileHeroImage} alt="DareAISearch" className="hero-mobile-image" />
      </div>

      {/* This image stack will be hidden on smaller screens via CSS */}
      <div className="hero-images-stack">
        <div className="hero-card card-yellow">
          <img src={heroImage1} alt="AI Search" className="hero-image-card" />
        </div>
        <div className="hero-card card-blue">
          <img src={heroImage2} alt="Data Analysis" className="hero-image-card" />
        </div>
        <div className="hero-card card-red">
          <img src={heroImage3} alt="Growth" className="hero-image-card" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;