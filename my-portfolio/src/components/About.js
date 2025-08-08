import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hi! My name is Cynthia, and I’m from San Jose, California. I’m a
              junior majoring in Information Science at Cornell University
              (concentration in UX design) and minoring in Business and
              Cognitive Science. I’m interested in product management,
              marketing, and front-end development.
            </p>
            <p>
              In my free time, I love weightlifting, photography, and baking
              custom cakes! This website displays some of my creative work
              across recent leadership positions, classes, and other activities.
              For any inquiries, please contact me below.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <h3>Education</h3>
              <div className="detail-item">
                <h4>Cornell University</h4>
                <p>B.S. Information Science • Expected May 2027</p>
                <p>
                  Relevant Coursework: Web Development & Design, Digital Product
                  Design, Human Computer Perception, Business Management
                </p>
              </div>
            </div>

            <div className="detail-card">
              <h3>Recent Experience</h3>
              <div className="detail-item">
                <h4>Product Manager</h4>
                <p>
                  Cornell Digital Tech & Innovation •{" "}
                  <em>Sep 2024 - Present</em>
                </p>
                <p>
                  Leading team through launch process of digital product for
                  student community
                </p>
              </div>
              <div className="detail-item">
                <h4>Lab Assistant</h4>
                <p>
                  Cornell DECALab • <em>Mar 2025 - Present</em>
                </p>
                <p>Designed lab website and developed database tool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
