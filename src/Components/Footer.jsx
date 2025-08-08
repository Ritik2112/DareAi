// src/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; Copyright {currentYear} Digidarts Marketing Pvt. Ltd.</p>
    </footer>
  );
};

export default Footer;
