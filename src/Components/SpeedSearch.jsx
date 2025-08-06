import React from 'react';
import './SpeedSearch.css'; // This will be the new CSS file

// Import the actual icon images
import illustration1 from '../assets/icon_1.webp';
import illustration2 from '../assets/icon_2.webp';
import illustration3 from '../assets/icon_3.webp';


const features = [
  {
    iconSrc: illustration1, // Using iconSrc for image path
    title: "Elevates Strategic Planning Accuracy",
    description: "Transforms overwhelming market noise into structured, decision-ready insights, empowering both short-term and long-term planning across teams with reliable intelligence.",
  },
  {
    iconSrc: illustration2, // Using iconSrc for image path
    title: "Accelerates the Insight-to-Action Cycle",
    description: "Extracs key highlights, facts, and insights from raw data, providing instant answers to ad-hoc business queries and boosting the insight-to-action timeline by up to 40%",
  },
  {
    iconSrc: illustration3, // Using iconSrc for image path
    title: "Enables Proactive Market Foresight",
    description: "Continuously analyzes and provides actionable insights, such as emerging trends, key events, and more, to help teams anticipate threats and capitalize on business opportunities.",
  },
];

function SpeedSearch() {
  return (
    <section className="athena-ai-section">
      <h2 className="athena-ai-heading">What Athena AI does for you</h2>

      <div className="athena-ai-cards-container">
        {features.map((feature, index) => (
          <div className="athena-ai-card" key={index}>
            <div className="athena-ai-icon-circle">
              {/* Using an img tag for the illustration */}
              <img src={feature.iconSrc} alt={`Illustration for ${feature.title}`} className="athena-ai-illustration" />
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
