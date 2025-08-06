// src/StaticTestimonials.jsx
import React from 'react';
import './StaticTestimonials.css';
import partner3 from '../assets/partner33.png';
import partner2 from '../assets/partner2.png';
import partner1 from '../assets/partner1.png';

const testimonials = [
  {
    quote: "With their expertise in digital marketing and keenness to understand the client's business in-depth, Digidarts not only solved this problem but scaled our reseller acquisition to new levels",
    name: "Sudhanshu Shekhar",
    designation: "Vice President - Marketing at Meesho",
    src: partner1,
  },
  {
    quote: "The experience of working with Digidarts has set the benchmark, as far as I am concerned, with respect to the ways they service clients. I have worked with many agencies in the past, and I found Digidarts to be the best.",
    name: "Sriram Somayajula",
    designation: "Co-Founder & CEO at Indigo Learn",
    src: partner2,
  },
  {
    quote: "Digidarts spearheaded our full-funnel marketing and we are extremely satisfied with their performance. They have enabled our growth month after month and consistently achieve targets. I find the team to be diligent, creative and equipped to solve our queries.",
    name: "Mukund Rao",
    designation: "Co-Founder at Muvin",
    src: partner3,
  },
];

const StaticTestimonials = () => {
  return (
    <div className="static-testimonials-section">
      <h2 className="section-title">You're in Good Company</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">“</div>
            <img src={testimonial.src} alt="Company Logo" className="company-logo" />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <p className="author-name">{testimonial.name}</p>
              <p className="author-designation">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="waitlist-button">Join the waitlist</button>
    </div>
  );
};

export default StaticTestimonials;