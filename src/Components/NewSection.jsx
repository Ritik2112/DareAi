import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './NewSection.css';

import DareAIImage1 from '../assets/DareAi2.webp';
import DareAIImage2 from '../assets/DareAi3.webp';
import DareAIImage3 from '../assets/DareAi1.webp';

const tabData = {
  1: {
    title: 'Empower strategic decisions with actionable intelligence',
    features: [
      'Stay updated on critical developments across your competitive and industry landscape.',
      'Identify emerging competitors early by tracking mentions in sales calls, news, and forums and take timely actions.',
      'Monitor industry M&As and partnerships to uncover potential strategic alliances.',
    ],
    image: DareAIImage1,
  },
  2: {
    title: 'Build better products with market-driven insights',
    features: [
      'Analyze user feedback at scale to prioritize your roadmap.',
      'Track competitor product launches and feature updates in real-time.',
      'Identify gaps in the market and validate new product ideas.',
    ],
    image: DareAIImage2,
  },
  3: {
    title: 'Optimize marketing campaigns with competitive data',
    features: [
      'Understand competitor messaging, positioning, and content strategies.',
      'Discover new marketing channels and tactics that are working for others.',
      'Measure your campaign performance against industry benchmarks.',
    ],
    image: DareAIImage3,
  },
  4: {
    title: 'Win more deals with tailored sales strategies',
    features: [
      'Get timely alerts on competitor pricing changes and promotions.',
      'Craft compelling battle cards with up-to-date competitive intelligence.',
      'Identify key decision-makers and their priorities.',
    ],
    image: DareAIImage2,
  },
  5: {
    title: 'Centralize Market & Competitive Intelligence',
    features: [
      'Automate the collection of data from millions of sources.',
      'Collaborate with your team to analyze trends and generate reports.',
      'Distribute actionable insights to stakeholders across the organization.',
    ],
    image: DareAIImage1,
  },
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const NewSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const currentContent = tabData[activeTab];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="new-section-container" ref={ref}>
      <div className="new-section-content">
        <h1 className="main-heading">
          Engineered for AI. Tailored to your <br />
          business growth
        </h1>

        {/* Tabs */}
        <div className="tabs-nav">
          {Object.keys(tabData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(Number(key))}
              className={`tab-circle ${activeTab === Number(key) ? 'active' : ''}`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Content Grid with AnimatePresence */}
        <div className="content-grid">
          <AnimatePresence mode="wait">
            {/* Text */}
            <motion.div
              key={`text-${activeTab}`}
              className="text-content"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="sub-heading">{currentContent.title}</h2>
              <ul className="feature-list">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <div className="icon-wrapper">
                      <CheckIcon />
                    </div>
                    <span className="feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              key={`image-${activeTab}`}
              className="image-container"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <img
                src={currentContent.image}
                alt={`Dashboard UI ${activeTab}`}
                className="dashboard-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/800x600/e2e8f0/334155?text=Image+Not+Found';
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
