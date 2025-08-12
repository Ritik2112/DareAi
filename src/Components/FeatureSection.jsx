import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './FeatureSection.css'; // Your CSS file

import featureHeartsImage from '../assets/8.webp';
import AiDrivendiscovery from '../assets/2.webp';
import ZeroClick from '../assets/6.webp';
import Traditional from '../assets/4.webp';

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function FeatureSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="why-ai-section">
      <motion.div
        className="why-ai-section__header"
        initial="hiddenLeft"
        animate={isInView ? "visible" : "hiddenLeft"}
        variants={animationVariants}
      >
        <h2>Why should your brand care <br /> about AI-Search Engines?</h2>
      </motion.div>

      <div className="why-ai-section__grid">
        {/* Card 1 */}
        <motion.div
          className="why-ai-section__card why-ai-section__card--ai-driven"
          initial="hiddenLeft"
          animate={isInView ? "visible" : "hiddenLeft"}
          variants={animationVariants}
        >
          <div className="why-ai-section__card-content">
            <h3 className="why-ai-section__card-title">
              <span className="why-ai-section__highlight why-ai-section__highlight--yellow">AI Driven <br /> Discovery</span>
            </h3>
            <p>
              Gen AI search is most popular among Gen Z, who perform up to 31% of their searches on platforms like ChatGPT
            </p>
          </div>
          <img src={AiDrivendiscovery} alt="AI discovery" className="why-ai-section__card-image" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="why-ai-section__card why-ai-section__card--zero-click"
          initial="hiddenRight"
          animate={isInView ? "visible" : "hiddenRight"}
          variants={animationVariants}
        >
          <div className="why-ai-section__card-content">
            <h3 className="why-ai-section__card-title">
              <span className="why-ai-section__highlight why-ai-section__highlight--white">Zero Click <br /> Future</span>
            </h3>
            <p>
              60% of searches now complete without users clicking through to websites due to AI overviews.
            </p>
          </div>
          <img src={ZeroClick} alt="Zero click" className="why-ai-section__card-image" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="why-ai-section__card why-ai-section__card--revenue"
          initial="hiddenLeft"
          animate={isInView ? "visible" : "hiddenLeft"}
          variants={animationVariants}
        >
          <div className="why-ai-section__card-content">
            <h3 className="why-ai-section__card-title">
              <span className="why-ai-section__highlight why-ai-section__highlight--white">Revenue <br /> Implications</span>
            </h3>
            <p>
              Website visitors from AI search are 4.4 times more valuable than those from organic search.
            </p>
          </div>
          <img src={featureHeartsImage} alt="Revenue" className="why-ai-section__card-image" />
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="why-ai-section__card why-ai-section__card--traditional"
          initial="hiddenRight"
          animate={isInView ? "visible" : "hiddenRight"}
          variants={animationVariants}
        >
          <div className="why-ai-section__card-content">
            <h3 className="why-ai-section__card-title">
              <span className="why-ai-section__highlight why-ai-section__highlight--dark-yellow">Traditional <br /> SEO Decline</span>
            </h3>
            <p>
              AI searches have reduced traditional organic web traffic by 15% to 25%
            </p>
          </div>
          <img src={Traditional} alt="SEO decline" className="why-ai-section__card-image" />
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureSection;