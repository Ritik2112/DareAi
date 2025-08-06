import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion'; // 👈 Add this
import heroImage1 from '../assets/hero_image3.png';
import heroImage2 from '../assets/hero_image1.png';
import heroImage3 from '../assets/hero_image2.png';
import mobileHeroImage from '../assets/hero_image1.png';

const HeroSection = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById('Book-A-Demo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* ✅ Animated Text Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Rank Your Brand #1 on AI-Search
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Built for modern brands to win the era of AI-search with precision, scalability, and real-time control.
        </motion.p>
        <motion.button
          className="hero-button"
          onClick={handleScrollToSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Get your AI score now
        </motion.button>
      </motion.div>

      {/* ✅ Mobile Image Fade In */}
      <motion.div
        className="hero-mobile-image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <img src={mobileHeroImage} alt="DareAISearch" className="hero-mobile-image" />
      </motion.div>

      {/* ✅ Animated Stack Images */}
      <motion.div
        className="hero-images-stack"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >
        <motion.div
          className="hero-card card-yellow"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src={heroImage1} alt="AI Search" className="hero-image-card" />
        </motion.div>

        <motion.div
          className="hero-card card-blue"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <img src={heroImage2} alt="Data Analysis" className="hero-image-card" />
        </motion.div>

        <motion.div
          className="hero-card card-red"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <img src={heroImage3} alt="Growth" className="hero-image-card" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
