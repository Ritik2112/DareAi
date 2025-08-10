import React from 'react';
import './SpeedSearch.css';

import illustration1 from '../assets/icon_1.webp';
import illustration2 from '../assets/icon_2.webp';
import illustration3 from '../assets/icon_3.webp';

const features = [
  {
    iconSrc: illustration1,
    title: "Outrank Your Competitors on AI",
    points: [
      "Track your brand’s visibility and presence across critical AI-driven platforms, including Google AI Overviews, ChatGPT, and Perplexity.",
      "Measure your influence on customer decisions by analyzing your brand's footprint in the AI search results that matter.",
      "Link your AI search performance directly to revenue, identifying how visibility in these new search formats translates into business growth."
    ]
  },
  {
    iconSrc: illustration2,
    title: "Drive 100% Untapped AI-SEO Traffic",
    points: [
      "Gain a competitive edge by monitoring how your brand is presented against competitors on ChatGPT, Perplexity, and Google AI.",
      "Download actionable insights that provide a clear roadmap to enhancing your AI search performance and outmaneuvering the competition.",
      "Accelerate revenue growth by using a data-driven strategy to win the customers who are using AI to make their purchasing decisions."
    ]
  },
  {
    iconSrc: illustration3,
    title: "Maximize Revenue from AI Search",
    points: [
      "Pinpoint the negative sources that are actively influencing how AI platforms perceive your brand.",
      "Receive strategic and actionable guidance to neutralize the impact of these negative sources.",
      "Transform negative perceptions into positive customer experiences, building a stronger and more resilient brand reputation in the AI era."
    ]
  }
];

function SpeedSearch() {
  return (
    <section className="athena-ai-section">
      <h2 className="athena-ai-heading">Meet DareAISearch - World’s Leading AI-SEO Solution</h2>

      <div className="athena-ai-cards-container">
        {features.map((feature, index) => (
          <div
            className={`athena-ai-card ${index !== features.length - 1 ? 'with-divider' : ''}`}
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
            <ul className="athena-ai-card-description">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpeedSearch;
