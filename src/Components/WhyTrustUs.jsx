import React from 'react';
import './WhyTrustUs.css';
import googleLogo from '../assets/partner_img1.svg';
import metaLogo from '../assets/partner_img2.svg';
import microsoftLogo from '../assets/partner_img3.svg';
import semRushLogo from '../assets/partner_img4.svg';

function WhyTrustUs() {
  const partnerLogos = [
    { src: googleLogo, alt: 'Google' },
    { src: metaLogo, alt: 'Meta' },
    { src: microsoftLogo, alt: 'Microsoft' },
    { src: semRushLogo, alt: 'SemRush' },
  ];

  return (
    <section className="why-trust-us-section">
      <div className="partners-container">
        
        
        <div className="partners-logos">
          {partnerLogos.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="partners-logo-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTrustUs;