// src/BusinessGrowth.jsx
import React from 'react';
import './BusinessGrowth.css';
import DareAIImage1 from '../assets/DareAi2.webp';
import DareAIImage2 from '../assets/DareAi3.webp';
import DareAIImage3 from '../assets/DareAi1.webp';
 // Assuming you have other images

const featuresData = [
  {
    id: 1,
    title: 'AI Visibility Tracking',
    content: "We track your brand’s visibility across Google AI Overviews, ChatGPT, and Perplexity - measuring presence in the AI search results that influence customer decisions and convert to revenue.",
    benefits: [
      'Pinpoint your brand’s ranking on AI platforms',
      'Optimize content for AI-powered searches',
      'Track how AI recommendations drive traffic and revenue',
    ],
    image: DareAIImage1,
  },
  {
    id: 2,
    title: 'AI Competitive Intelligence',
    content: 'Understand your market position by analyzing competitor performance in generative search. We identify content gaps and opportunities to help you dominate the AI landscape.',
    benefits: [
      'Analyze competitor brand visibility on AI',
      'Identify and close content gaps',
      'Discover new opportunities for AI-driven growth',
    ],
    image: DareAIImage2, // Use a new image for this feature
  },
  {
    id: 3,
    title: 'Brand Reputation Intelligence',
    content: 'Monitor how your brand is perceived by AI platforms and in AI-generated content. Ensure your brand story is accurately and positively represented in the new search paradigm.',
    benefits: [
      'Monitor brand mentions in AI Overviews',
      'Track brand sentiment and reputation across AI platforms',
      'Protect your brand’s integrity in generative search',
    ],
    image: DareAIImage3, // Use a new image for this feature
  },
];

const BusinessGrowth = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="business-growth-section">
      <h2 className="business-growth-heading">
        Engineered for <span>AI</span>. Tailored to your <br />
        business growth
      </h2>

      {featuresData.map((feature, index) => (
        <div 
          key={feature.id} 
          className={`feature-row ${index % 2 !== 0 ? 'reverse' : ''}`}
        >
          <div className="feature-item">
            <h3>
              <span className="feature-number">0{feature.id}</span>
              <span className="feature-title">{feature.title}</span>
            </h3>
            <p>{feature.content}</p>
            <ul>
              
            </ul>
          </div>
          <div className="feature-image-container">
            <img src={feature.image} alt={feature.title} className="feature-image" />
          </div>
        </div>
      ))}

      <div className="business-button-wrapper">
        <button className="SStrategy-call-btn" onClick={handleScrollToSection}>
          Book your strategy call
        </button>
      </div>
    </section>
  );
};

export default BusinessGrowth;