// src/StaticTestimonials.jsx
import React, { useState, useRef, useEffect } from 'react';
import './StaticTestimonials.css';

import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner33.png';

const testimonials = [
  {
    quote:
      "With their expertise in digital marketing and keenness to understand the client's business in-depth, Digidarts not only solved this problem but scaled our reseller acquisition to new levels.",
    name: 'Sudhanshu Shekhar',
    designation: 'Meesho\nVice President - Marketing',
    src: partner1,
  },
  {
    quote:
      'The experience of working with Digidarts has set the benchmark, as far as I am concerned, with respect to the ways they service clients. I have worked with many agencies in the past, and I found Digidarts to be the best.',
    name: 'Sriram Somayajula',
    designation: 'Indigo Learn\nCo-Founder & CEO',
    src: partner2,
  },
  {
    quote:
      'Digidarts spearheaded our full-funnel marketing and we are extremely satisfied with their performance. They have enabled our growth month after month and consistently achieve targets. I find the team to be diligent, creative and equipped to solve our queries.',
    name: 'Mukund Rao',
    designation: 'Muvin\nCo-Founder',
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
      <h2 className="section-title">You're in Good Company</h2>

      <div className="testimonials-scroll-wrapper" ref={scrollRef}>
        <div className="testimonials-inner-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-and-logo">
                <div className="quote-icon">“</div>
                <img
                  src={testimonial.src}
                  alt="Company Logo"
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