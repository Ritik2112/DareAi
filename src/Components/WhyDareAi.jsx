// src/WhyDareAi.jsx
import React from 'react';
import './WhyDareAi.css'; // Import the CSS file for styling

// Import the images for each card
import aiDrivenImage from '../assets/Ai_driven_discovery.webp';
import zeroFutureImage from '../assets/Zero_click_feature.webp';
import revenueImage from '../assets/revenue.webp';
import traditionalSeoImage from '../assets/traditional_SEO.webp';

const WhyDareAi = () => {
  return (
    <section className="why-dareai-section" id="why-dareaisearch">
      {/* Section Title */}
      <h2 className="why-dareai-title">Why should your brand care about AI-Search Engines?</h2>

      {/* Grid container for the feature cards */}
      <div className="why-dareai-cards-grid">
        {/* Card 1: AI Driven Discovery */}
        <div className="why-dareai-card">
          <div className="card-content">
            <h3 className="card-title highlight">AI Driven Discovery</h3>
            <p className="card-description">
              Gen AI search is most popular among Gen 2, who perform up to 31% of their searches on platforms
              like ChatGPT
            </p>
          </div>
          {/* Image for AI Driven Discovery */}
          <div className="card-illustration">
            <img src={aiDrivenImage} alt="AI Driven Discovery Illustration" />
          </div>
        </div>

        {/* Card 2: Zero Click Future */}
        <div className="why-dareai-card yellow-card">
          <div className="card-content">
            <h3 className="card-title highlight-yellow">Zero Click Future</h3>
            <p className="card-description">
              60% of searches now complete without users clicking through to websites due to AI overviews
            </p>
          </div>
          {/* Image for Zero Click Future */}
          <div className="card-illustration">
            <img src={zeroFutureImage} alt="Zero Click Future Illustration" />
          </div>
        </div>

        {/* Card 3: Revenue Implications */}
        <div className="why-dareai-card black-card">
          <div className="card-content">
            <h3 className="card-title highlight-black">Revenue Implications</h3>
            <p className="card-description">
              Website visitors from AI search are 4.4 times more valuable than those from organic search.
            </p>
          </div>
          {/* Image for Revenue Implications */}
          <div className="card-illustration">
            <img src={revenueImage} alt="Revenue Implications Illustration" />
          </div>
        </div>

        {/* Card 4: Traditional SEO Decline */}
        <div className="why-dareai-card yellow-card">
          <div className="card-content">
            <h3 className="card-title highlight-yellow">Traditional SEO Decline</h3>
            <p className="card-description">
              AI searches have reduced traditional organic web traffic by 15% to 25%
            </p>
          </div>
          {/* Image for Traditional SEO Decline */}
          <div className="card-illustration">
            <img src={traditionalSeoImage} alt="Traditional SEO Decline Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDareAi; // Export the component
