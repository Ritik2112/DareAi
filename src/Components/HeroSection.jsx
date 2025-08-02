// src/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/DareAi_hero_img.webp';

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
          DareAISearch is the world’s first AI SEO solution, designed for forward-thinking brands to thrive in the era of generative search. With 80% of search intent shifting from Google to AI platforms like ChatGPT and Perplexity, traditional SEO is no longer enough. DareAISearch helps your brand become the answer that AI engines recommend by optimizing your content, structuring it for AI citation, and tracking performance in real-time.
        </p>
        <button className="hero-button" onClick={handleScrollToSection}>
          Claim Your Report Now
        </button>
      </div>

      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="DareAiSearch marketing illustration with a megaphone and social media icons"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
