import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyTrustUs.css';
import googleLogo from '../assets/partner_img1.svg';
import metaLogo from '../assets/partner_img2.svg';
import microsoftLogo from '../assets/partner_img3.svg';
import semRushLogo from '../assets/partner_img4.svg';

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -90 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.1,
      ease: 'easeOut',
      type: 'spring',
      stiffness: 100,
    }
  })
};

function WhyTrustUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const partnerLogos = [
    { src: googleLogo, alt: 'Google' },
    { src: metaLogo, alt: 'Meta' },
    { src: microsoftLogo, alt: 'Microsoft' },
    { src: semRushLogo, alt: 'SemRush' },
  ];

  return (
    <section className="why-trust-us-section" ref={ref}>
      <motion.div
        className="partners-container"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="partners-logos">
          {partnerLogos.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="partners-logo-item"
              custom={index}
              variants={logoVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default WhyTrustUs;
