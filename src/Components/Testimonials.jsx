import React, { useState } from 'react';
import './Testimonials.css';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },

    
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-carousel">
        <div className="testimonials-wrapper">
          {testimonialsData.map((testimonial, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
            const isNext = index === (currentIndex + 1) % testimonialsData.length;

            return (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  isActive ? 'active' : isPrev || isNext ? 'adjacent' : 'hidden'
                }`}
              >
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-position">{testimonial.position}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="testimonials-controls">
          <button className="arrow-button" onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <div className="testimonial-dots">
            {testimonialsData.map((_, index) => (
              <FaStar
                key={index}
                className={`star-icon ${index === currentIndex ? 'active-star' : ''}`}
              />
            ))}
          </div>
          <button className="arrow-button" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
