import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Newtestimonials.css';

// Import your local image file
import partner3 from '../assets/partner3.webp';
import partner2 from '../assets/partner2.png';
import partner1 from '../assets/partner1.png'; // Assuming you have a local image for partner1

const testimonials = [
  {
    quote: "With their expertise in digital marketing and keenness to understand the client's business in-depth, Digidarts not only solved this problem but scaled our reseller acquisition to new levels",
    name: "Sudhanshu Shekhar",
    designation: " Vice President - Marketing at Meesho",
    src: partner1,
  },
  {
    quote: "The experience of working with Digidarts has set the benchmark, as far as I am concerned, with respect to the ways they service clients. I have worked with many agencies in the past, and I found Digidarts to be the best.",
    name: "Sriram Somayajula",
    designation: " Co-Founder & CEO at Indigo Learn",
    src: partner2,
  },
  {
    quote: "Digidarts spearheaded our full-funnel marketing and we are extremely satisfied with their performance. They have enabled our growth month after month and consistently achieve targets. I find the team to be diligent, creative and equipped to solve our queries. ",
    name: "Mukund Rao",
    designation: "Co-Founder at Muvin",
    src: partner3, // Using your local image here
  },
 
 
];

const AnimatedTestimonials = ({ testimonials, autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const isActive = (index) => index === active;
  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="testimonials-container">
      <div className="testimonial-grid">
        {/* Image Section */}
        <div className="testimonial-image-wrapper">
          <div className="testimonial-image-container">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index) ? 10 : 5,
                    rotate: isActive(index) ? '0deg' : randomRotate(),
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="testimonial-image-slide"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(0)}`;
                      e.currentTarget.onerror = null;
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
        <div className="testimonial-text-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="testimonial-text-container"
            >
              <h3>{testimonials[active].name}</h3>
              <p className="designation">{testimonials[active].designation}</p>
              <motion.p className="quote">"{testimonials[active].quote}"</motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-nav">
            <button onClick={handlePrev} aria-label="Previous">
              <ArrowLeft />
            </button>
            <button onClick={handleNext} aria-label="Next">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Newtestimonials() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}