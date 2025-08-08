import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <h3>Let's Connect</h3>
            <p>I’m always open to new opportunities and exciting projects!</p>
            <div className="footer-contact">
              <a href="mailto:your.email@cornell.edu" className="contact-link">
                cl2683@cornell.edu
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section-links">
              <h4>Connect</h4>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>

            <div className="footer-section-links">
              <h4>Quick Links</h4>
              <a
                href="https://docs.google.com/document/d/1SY48r7z-953V_Urgi55IXVqBuIgeTo7wWq1r7cEarvU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Cynthia Lan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
