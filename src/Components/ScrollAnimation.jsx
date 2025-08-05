// src/Components/ScrollAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for bounce
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      style={{ willChange: 'transform, opacity' }} // GPU acceleration
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
