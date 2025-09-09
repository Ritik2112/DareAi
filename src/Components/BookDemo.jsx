// src/BookDemo.jsx
import React, { useRef, useState } from "react";
import "./BookDemo.css";
import demoImage from "../assets/Website_Footer_LP_DareAISearch_final.webp";
import useZohoForm from "./useZohoForm";

const BookDemo = () => {
  const formRef = useRef(null);
  const { ZohoHiddenFields, validateForm } = useZohoForm(formRef);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    const errorMessage = validateForm(); // run validation
    if (errorMessage) {
      event.preventDefault();
      setError(errorMessage); // show error message in UI
      return false;
    } else {
      setError(""); // clear error if no issue
      return true;
    }
  };

  return (
    <section className="book-demo-section">
      <h2 className="book-demo-heading">Book a Demo To See DareAISearch in Action
</h2>
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
            <input type="text" id="website" name="Website" placeholder="Website URL" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="Phone" placeholder="Phone" />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="Email" placeholder="Email" required />
          </div>

          {/* Error message display */}
          {error && <div className="error-message">{error}</div>}

          <div className="form-field">
            <button type="submit" className="send-button">Submit</button>
          </div>
        </form>

        {/* Image */}
        <div className="form-image">
          <img src={demoImage} alt="Decorative Graphic" />
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
