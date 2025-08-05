import React from 'react';
import './FeatureSection.css';

// It's a good practice to have your assets in an 'assets' folder
import featureHeartsImage from '../assets/Revenue.webp'; // Illustration for Mindfulness card

import AiDrivendiscovery from '../assets/Ai_driven_discovery.webp';     // Illustration for Insights card
import ZeroClick from '../assets/Zero_click_feature.webp';
import Traditional from '../assets/Traditional_SEO.webp';
import ThingsHappen from '../assets/Things_happen.webp';

function FeatureSection() {
     const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why should your brand care  <br /> about AI-Search Engines?</h2>
       
      </div>

      <div className="features-grid">
        {/* Card 1: Mindfulness & Wellness */}
        <div className="feature-card Ai_Driven">
          <div className="card-content">
       <h3 className="card-title">
  <span className="highlight-text">AI Driven<br />Discovery</span>
</h3>
            <p>
             Gen AI search is most popular among Gen Z, who perform up to 31% of their searches on platforms like ChatGPT
            </p>
          </div>
          <img
            src={AiDrivendiscovery}
            alt="Hearts and star illustration"
            className="card-illustration-corner"
          />
        </div>

          {/* Card 1: Mindfulness & Wellness */}
        <div className="feature-card Zero-click">
          <div className="card-content">
           <h3 class="card-title">
  <span class="highlight-text2">zero click<br />Feature</span>
</h3>
            <p>
              60% of searches now complete without users clicking through to websites due to AI overviews.
            </p>
          </div>
          <img
            src={ZeroClick}
            alt="Hearts and star illustration"
            className="card-illustration-corner"
          />
        </div>
          {/* Card 1: Mindfulness & Wellness */}
        <div className="feature-card2 Revenue">
          <div className="card-content2">
            <h3 class="card-title">
  <span class="highlight-text2">Revenue<br />Implication</span>
</h3>
            <p className='revenuecolor'>
              Website visitors from AI search are 4.4 times more valuable than those from organic search.
            </p>
          </div>
          <img
            src={featureHeartsImage}
            alt="Hearts and star illustration"
            className="card-illustration-corner"
          />
        </div>
          {/* Card 1: Mindfulness & Wellness */}
        <div className="feature-card Traditional">
          <div className="card-content">
             <h3 class="card-title">
  <span class="highlight-text4">Traditional<br />SEO Decline</span>
</h3>
            <p>
              AI searches have reduced traditional organic web traffic by 15% to 25%
            </p>
          </div>
          <img
            src={Traditional}
            alt="Hearts and star illustration"
            className="card-illustration-corner"
          />
        </div>

       

      </div>
    </section>
  );
}

export default FeatureSection;