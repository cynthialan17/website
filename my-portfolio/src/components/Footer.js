import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, projects, or just
              having a chat about design and product.
            </p>
            <div className="footer-contact">
              <a href="mailto:your.email@cornell.edu" className="contact-link">
                your.email@cornell.edu
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
              <a href="#" target="_blank" rel="noopener noreferrer">
                Behance
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>

            <div className="footer-section-links">
              <h4>Quick Links</h4>
              <a href="#" download>
                Resume
              </a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Cynthia. Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
