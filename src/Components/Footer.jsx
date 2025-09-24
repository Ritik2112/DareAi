// src/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; Copyright {currentYear} DareAISearch</p>
    </footer>
  );
};

export default Footer;
