// src/BusinessGrowth.jsx
import React, { useState } from 'react';
import './BusinessGrowth.css';
import DareAIImage from '../assets/DareAi1.webp'; // Import the image file

const accordionData = [
  {
    id: 1,
    title: 'AI Visibility Tracking',
    content:
      "We track your brand’s visibility across Google AI Overviews, ChatGPT, and Perplexity - measuring presence in the AI search results that influence customer decisions and convert to revenue.",
  },
  {
    id: 2,
    title: 'AI Competitive Intelligence',
    content: 'We track your brand’s visibility across Google AI Overviews, ChatGPT, and Perplexity - measuring presence in the AI search results that influence customer decisions and convert to revenue.',
  },
  {
    id: 3,
    title: 'Brand Reputation Intelligence',
    content: 'We track your brand’s visibility across Google AI Overviews, ChatGPT, and Perplexity - measuring presence in the AI search results that influence customer decisions and convert to revenue.',
  },
];

const BusinessGrowth = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="business-growth-section">
      <h2 className="business-growth-heading">
        Engineered for <span>AI</span>. Tailored to your <br />
        business growth
      </h2>

      <div className="accordion-wrapper">
        {accordionData.map(({ id, title, content }) => {
          const isActive = activeIndex === id;
          return (
            <div
              key={id}
              className={`accordion-item ${isActive ? 'active' : ''} ${id === 1 ? 'yellow-bg' : ''}`}
              onClick={() => toggleAccordion(id)}
            >
              <div className="accordion-header">
                <span className="accordion-number">0{id}</span>
                <span className="accordion-title">{title}</span>
                <span className="accordion-icon">{isActive ? '−' : '+'}</span>
              </div>
              {/* Conditional rendering for the content and image */}
              {isActive && (
                <>
                  <hr className="accordion-divider" />
                  {/* The image is displayed here when the first item is active */}
                  {id === 1 && (
                    <div className="accordion-content-media">
                        <img src={DareAIImage} alt="AI Visibility Tracking" className="accordion-content-image" />
                    </div>
                  )}
                  <p className="accordion-content-text">{content}</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="business-button-wrapper">
        <button className="SStrategy-call-btn" onClick={handleScrollToSection}>Book your strategy call</button>
      </div>
    </section>
  );
};

export default BusinessGrowth;