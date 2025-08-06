// src/BookDemo.jsx
import React, { useRef } from 'react';
import './BookDemo.css';
import demoImage from '../assets/book_DareAi.webp';
import useZohoForm from './useZohoForm';

const BookDemo = () => {
  const formRef = useRef(null);
  const { ZohoHiddenFields } = useZohoForm(formRef);

  const handleSubmit = (event) => {
    if (window.checkMandatory4051926000100401011 && window.checkMandatory4051926000100401011()) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  };

  return (
    <section className="book-demo-section">
      <h2 className="book-demo-heading">Claim your AI-Search Report Now</h2>
      <div className="book-demo-wrapper">
        <form
          className="book-demo-form"
          id="webform4051926000100401011"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads4051926000100401011"
          method="POST"
          onSubmit={handleSubmit}
          acceptCharset="UTF-8"
          ref={formRef}
        >
          {/* Zoho Hidden Fields */}
          <ZohoHiddenFields />

          {/* Form Fields */}
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Last Name" placeholder="Name" />
          </div>
          <div className="form-field">
            <label htmlFor="brand">Brand Name</label>
            <input type="text" id="brand" name="LEADCF8" placeholder="Brand Name" />
          </div>
          <div className="form-field">
            <label htmlFor="website">Website URL</label>
            <input type="url" id="website" name="Website" placeholder="Website URL" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="Phone" placeholder="Phone" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="Email" placeholder="Email" required />
          </div>
          
          {/* The button is now wrapped in a form-field div */}
          <div className="form-field">
            <button type="submit" className="send-button">Send Message</button>
          </div>

        </form>

        <div className="form-illustration">
          <div className="star-burst-container">
            <div className="star-burst-lines"></div>
            <img src={demoImage} alt="Decorative Graphic" className="star-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;