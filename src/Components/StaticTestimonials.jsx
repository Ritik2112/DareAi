// src/StaticTestimonials.jsx
import React, { useState, useRef, useEffect } from 'react';
import './StaticTestimonials.css';

import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner3.png';
import partner3 from '../assets/partner2.png';

const testimonials = [
  {
    quote: `As our AI-driven visibility grew, we saw gains in qualified traffic and add-to-cart rate. Sales pacing aligned with forecasts, while acquisition efficiency improved. The impact is measurable and repeatable. GEO is now core to our go-to-market strategy with DareAISearch.`,
    name: 'Marketing Manager',
    designation: 'E-Commerce\nASICS',
    src: partner1,
  },
  {
    quote: `Working with DareAISearch has set a new benchmark for partnership and delivery in our experience. The team is responsive, methodical, and focused on outcomes that matter. We've engaged multiple providers over the years, and this engagement stands out for consistency and impact.`,
    name: 'Marketing Head',
    designation: 'Retail & Digital Marketplaces\nSkin111',
    src: partner2,
  },
  {
    quote: `Partnering with DareAISearch on GEO has driven reliable month-on-month results. AI-Search presence grew, qualified sessions improved, and targets were consistently achieved. The team is proactive, solution-oriented, and quick to address business needs.`,
    name: 'Senior Marketing Manager',
    designation: 'Global Market Places\nTide',
    src: partner3,
  },
];

const StaticTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollLeft = scrollRef.current.scrollLeft;
      // Get the first testimonial card's width
      const cardWidth = scrollRef.current.querySelector('.testimonial-card').offsetWidth;
      // Get the gap between cards
      const gap = parseInt(window.getComputedStyle(scrollRef.current.querySelector('.testimonials-inner-grid')).gap || 0);

      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(newIndex);
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="static-testimonials-section">
      <h2 className="section-title">Trusted By Industry Leaders Worldwide
</h2>

      <div className="testimonials-scroll-wrapper" ref={scrollRef}>
        <div className="testimonials-inner-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-and-logo">
                <div className="quote-icon">“</div>
                <img
                  src={testimonial.src}
                  alt={`${testimonial.name} logo`}
                  className="company-logo-circle"
                />
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-designation">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dot-indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StaticTestimonials;