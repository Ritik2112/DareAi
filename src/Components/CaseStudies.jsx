import React from 'react';
import './CaseStudies.css';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner3.png';
import partner3 from '../assets/partner2.png';

const caseStudies = [
  {
    title: 'ASICS LOGO',
    desc: (
      <>
        Achieved an <strong>80% growth in AI-Search traffic</strong> quarter-on-quarter, strengthening visibility and revenue.
      </>
    ),
    img: partner1,
    highlight: true,
  },
  {
    title: 'SKIN111 Logo',
    desc: (
      <>
        Recorded a <strong>103% growth in AI-driven sessions within one quarter</strong>, proving the high intent of AI-Search users.
      </>
    ),
    img: partner2,
    highlight: false,
  },
  {
    title: 'Insurance Samadhan Logo',
    desc: (
      <>
        Grew <strong>32% in AI-Search traffic quarter-on-quarter</strong>, boosting credibility and discovery across platforms.
      </>
    ),
    img: partner3,
    highlight: true,
  },
];

export default function CaseStudies() {
  const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="case-section">
      <h2 className="case-heading">Case Study Snapshots</h2>

      <div className="case-grid">
        {caseStudies.map((c, i) => (
          <div key={i} className={`case-card ${c.highlight ? 'highlight' : ''}`}>
            <div className="case-logo-wrap">
              <img src={c.img} alt={`${c.title} logo`} className="case-logo-circle" />
            </div>
            {/* title removed intentionally - logo will represent the brand */}
            <p className="case-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="case-button-wrapper">
        <button className="strategy-call-btn" onClick={handleScrollToSection}>Book a Demo</button>
      </div>
    </section>
  );
}
