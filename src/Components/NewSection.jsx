import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './NewSection.css';
import DareAIImage1 from '../assets/DareAi2.webp';
import DareAIImage2 from '../assets/DareAi3.webp';
import DareAIImage3 from '../assets/DareAi1.webp';

const tabData = {
  1: {
    title: 'AI Visibility Tracking',
    features: [
      'We track your brand’s visibility across Google AI Overviews, ChatGPT, and Perplexity - measuring presence in the AI search results that influence customer decisions and convert to revenue.',
    ],
    label: 'Track',
    image: DareAIImage1,
  },
  2: {
    title: 'AI Competitive Intelligence',
    features: [
      'Understand your market position by analyzing competitor performance in generative search. We identify content gaps and opportunities to help you dominate the AI landscape.',
    ],
    label: 'Engage',
    image: DareAIImage2,
  },
  3: {
    title: 'Brand Reputation Intelligence',
    features: [
      'Monitor how your brand is perceived by AI platforms and in AI-generated content. Ensure your brand story is accurately and positively represented in the new search paradigm.',
    ],
    label: 'Adapt',
    image: DareAIImage3,
  },
};

const NewSection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const currentContent = tabData[activeTab];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="ai-tabs-section" ref={ref}>
      <div className="ai-tabs-section__content">
        <h1 className="ai-tabs-section__heading">
          Engineered for AI. Tailored to your <br />
          business growth
        </h1>

        {/* Tabs */}
        <div className="ai-tabs-section__nav">
          {Object.keys(tabData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(Number(key))}
              className={`ai-tabs-section__tab ${
                activeTab === Number(key) ? 'ai-tabs-section__tab--active' : ''
              }`}
            >
              {tabData[key].label}
            </button>
          ))}
        </div>

        {/* Content Grid with AnimatePresence */}
        <div className="ai-tabs-section__grid">
          <AnimatePresence mode="wait">
            {/* Text */}
            <motion.div
              key={`text-${activeTab}`}
              className="ai-tabs-section__text-col"
              initial={{ opacity: 0, x: -100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="ai-tabs-section__subheading">{currentContent.title}</h2>
              <ul className="ai-tabs-section__feature-list">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="ai-tabs-section__feature-item">
                    <span className="ai-tabs-section__feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              key={`image-${activeTab}`}
              className="ai-tabs-section__image-col"
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <img
                src={currentContent.image}
                alt={`Dashboard UI ${activeTab}`}
                className="ai-tabs-section__image"
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