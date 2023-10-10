import React from "react";

import "./Footer.css"; // Import your custom CSS file
import logo from '../image/logo.jpeg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: "flex" }}>
          <div className="col-md-6 col-sm-3">
            <div className="logo-section">
            <img src={logo} alt="Company Logo" className="logo" />
            </div>
          </div>
          <div className="contact-info">
            <h5>Contact Us</h5>
            <p>Email: katariyakhushi373@gmail.com</p>
            <p>Phone: (91) 6266449472</p>
          </div>
          <div className="social-links">
            <h5>Follow Us</h5>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
