import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './FeatureSection.css';

import featureHeartsImage from '../assets/Revenue.webp';
import AiDrivendiscovery from '../assets/Ai_driven_discovery.webp';
import ZeroClick from '../assets/Zero_click_feature.webp';
import Traditional from '../assets/Traditional_SEO.webp';

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function FeatureSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="features-section">
      <motion.div
        className="features-header"
        initial="hiddenLeft"
        animate={isInView ? "visible" : "hiddenLeft"}
        variants={animationVariants}
      >
        <h2>Why should your brand care <br /> about AI-Search Engines?</h2>
      </motion.div>

      <div className="features-grid">
        {/* Card 1 */}
        <motion.div
          className="feature-card Ai_Driven"
          initial="hiddenLeft"
          animate={isInView ? "visible" : "hiddenLeft"}
          variants={animationVariants}
        >
          <div className="card-content">
            <h3 className="card-title">
              <span className="highlight-text">AI Driven<br />Discovery</span>
            </h3>
            <p>
              Gen AI search is most popular among Gen Z, who perform up to 31% of their searches on platforms like ChatGPT
            </p>
          </div>
          <img src={AiDrivendiscovery} alt="AI discovery" className="card-illustration-corner" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="feature-card Zero-click"
          initial="hiddenRight"
          animate={isInView ? "visible" : "hiddenRight"}
          variants={animationVariants}
        >
          <div className="card-content">
            <h3 className="card-title">
              <span className="highlight-text2">Zero Click<br />Future</span>
            </h3>
            <p>
              60% of searches now complete without users clicking through to websites due to AI overviews.
            </p>
          </div>
          <img src={ZeroClick} alt="Zero click" className="card-illustration-corner" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="feature-card2 Revenue"
          initial="hiddenLeft"
          animate={isInView ? "visible" : "hiddenLeft"}
          variants={animationVariants}
        >
          <div className="card-content2">
            <h3 className="card-title">
              <span className="highlight-text2">Revenue<br />Implications</span>
            </h3>
            <p className="revenuecolor">
              Website visitors from AI search are 4.4 times more valuable than those from organic search.
            </p>
          </div>
          <img src={featureHeartsImage} alt="Revenue" className="card-illustration-corner" />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="feature-card Traditional"
          initial="hiddenRight"
          animate={isInView ? "visible" : "hiddenRight"}
          variants={animationVariants}
        >
          <div className="card-content">
            <h3 className="card-title">
              <span className="highlight-text4">Traditional<br />SEO Decline</span>
            </h3>
            <p>
              AI searches have reduced traditional organic web traffic by 15% to 25%
            </p>
          </div>
          <img src={Traditional} alt="SEO decline" className="card-illustration-corner" />
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureSection;
