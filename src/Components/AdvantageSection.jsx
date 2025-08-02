import React from 'react';
import './AdvantageSection.css';

const advantages = [
  {
    title: 'Dedicated Experts',
    description: 'Dedicated SEO and AI specialists deliver targeted optimizations aligned with your business goals.',
    highlight: true,
  },
  {
    title: 'Personalized Support',
    description: 'A single account manager provides weekly updates and direct expert access for clear communication.',
    highlight: false,
  },
  {
    title: 'Cost-Effective Teams',
    description: 'Access a full team of strategists, analysts, and developers at a fraction of in-house costs.',
    highlight: true,
  },
  {
    title: 'Rapid Delivery',
    description: 'Implement AI-SEO strategies in 4–6 weeks with quick optimizations driving visibility gains.',
    highlight: false,
  },
  {
    title: 'Agile Optimization',
    description: 'Through ongoing performance monitoring, we enhance conversion rates, focusing on high-impact refinements for maximum ROI.',
    highlight: true,
  },
  {
    title: 'Cross-Industry Insights',
    description: 'Drawing from experience of 10+ years, we identify sector-specific opportunities and mitigate risks to support your long-term growth.',
    highlight: false,
  },
];

export default function AdvantageSection() {

     const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="advantage-section">
      <h2 className="advantage-title">
        The <span>DareAISearch</span> Advantage
      </h2>

      <div className="advantage-grid">
        {advantages.map((item, index) => (
          <div
            key={index}
            className={`advantage-card ${item.highlight ? 'highlight' : ''}`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="advantage-button-wrapper">
        <button className="strategy-call-btn" onClick={handleScrollToSection}>Book your strategy call</button>
      </div>
    </section>
  );
}
