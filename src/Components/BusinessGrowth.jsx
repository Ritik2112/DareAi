// src/BusinessGrowth.jsx
import React, { useState } from 'react';
import './BusinessGrowth.css';

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
              {isActive && content && (
                <>
                  <hr className="accordion-divider" />
                  <p className="accordion-content">{content}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BusinessGrowth;
