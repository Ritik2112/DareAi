import React from 'react';
import './SpeedSearch.css';

// Import the actual icon images
import illustration1 from '../assets/icon_1.webp';
import illustration2 from '../assets/icon_2.webp';
import illustration3 from '../assets/icon_3.webp';

const features = [
  {
    iconSrc: illustration1,
    title: "Elevates Strategic Planning",
    description:
      "Transforms overwhelming market noise into structured, decision-ready insights, empowering both short-term and long-term planning across teams with reliable intelligence.",
  },
  {
    iconSrc: illustration2,
    title: "Accelerates the Insight-to-Action",
    description:
      "Extracs key highlights, facts, and insights from raw data, providing instant answers to ad-hoc business queries and boosting the insight-to-action timeline by up to 40%",
  },
  {
    iconSrc: illustration3,
    title: "Enables Proactive Market Foresight",
    description:
      "Continuously analyzes and provides actionable insights, such as emerging trends, key events, and more, to help teams anticipate threats and capitalize on business opportunities.",
  },
];

function SpeedSearch() {
  return (
    <section className="athena-ai-section">
      <h2 className="athena-ai-heading">But is your company prepared to adapt to the speed of AI search?</h2>

      <div className="athena-ai-cards-container">
        {features.map((feature, index) => (
          <div
            className={`athena-ai-card ${
              index !== features.length - 1 ? 'with-divider' : ''
            }`}
            key={index}
          >
            <div className="athena-ai-icon-circle">
              <img
                src={feature.iconSrc}
                alt={`Illustration for ${feature.title}`}
                className="athena-ai-illustration"
              />
            </div>
            <h3 className="athena-ai-card-title">{feature.title}</h3>
            <p className="athena-ai-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpeedSearch;
