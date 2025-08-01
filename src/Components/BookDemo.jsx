// src/BookDemo.jsx
import React from 'react';
import './BookDemo.css';
import demoImage from '../assets/demo_img.webp'; // The starburst image on the right

const BookDemo = () => {
  return (
    <section className="book-demo-section">
      <h2 className="book-demo-heading">Book Your Demo</h2>
      <div className="book-demo-wrapper">
        <form className="book-demo-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="form-field">
            <label htmlFor="brand">Brand Name</label>
            <input type="text" id="brand" placeholder="Brand Name" />
          </div>
          <div className="form-field">
            <label htmlFor="website">Website URL</label>
            <input type="url" id="website" placeholder="Website URL" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Phone" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>

        <div className="form-illustration">
          <img src={demoImage} alt="Decorative Graphic" />
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
