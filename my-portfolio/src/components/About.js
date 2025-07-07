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
              I'm a passionate student at Cornell University with a love for
              creating meaningful digital experiences. I blend creativity with
              strategic thinking to solve problems through design, marketing,
              and product development.
            </p>
            <p>
              When I'm not designing or coding, you can find me exploring new
              coffee shops, taking photos around campus, or diving into the
              latest product launches.
            </p>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <h3>Education</h3>
              <div className="detail-item">
                <h4>Cornell University</h4>
                <p>Bachelor of Science • Expected 2025</p>
                <p>
                  Relevant Coursework: Product Management, Marketing Analytics,
                  UX Design
                </p>
              </div>
            </div>

            <div className="detail-card">
              <h3>Experience</h3>
              <div className="detail-item">
                <h4>Product Marketing Intern</h4>
                <p>Company Name • Summer 2024</p>
                <p>Led go-to-market strategy for new product features</p>
              </div>
              <div className="detail-item">
                <h4>Design Intern</h4>
                <p>Company Name • Summer 2023</p>
                <p>Created marketing materials and social media content</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
