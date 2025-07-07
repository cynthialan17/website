import React, { useState } from "react";
import "./Projects.css";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("product-design");

  const tabs = [
    { id: "product-design", label: "Product Design" },
    { id: "marketing", label: "Marketing" },
    { id: "graphics", label: "Graphics" },
    { id: "photography", label: "Photography" },
    { id: "other", label: "Other" },
  ];

  // Sample project data - you'll replace this with your actual projects
  const projects = {
    "product-design": [
      {
        id: 1,
        title: "Mobile App Redesign",
        description: "Complete UX overhaul for a fitness tracking app",
        image: "/api/placeholder/300/200",
        link: "#",
      },
      {
        id: 2,
        title: "Dashboard Interface",
        description: "Clean, data-driven dashboard for analytics platform",
        image: "/api/placeholder/300/200",
        link: "#",
      },
    ],
    marketing: [
      {
        id: 3,
        title: "Product Launch Campaign",
        description: "Go-to-market strategy for new SaaS product",
        image: "/api/placeholder/300/200",
        link: "#",
      },
      {
        id: 4,
        title: "Social Media Strategy",
        description: "Content calendar and engagement strategy",
        image: "/api/placeholder/300/200",
        link: "#",
      },
    ],
    graphics: [
      {
        id: 5,
        title: "Brand Identity Design",
        description: "Logo and visual identity for startup",
        image: "/api/placeholder/300/200",
        link: "#",
      },
    ],
    photography: [
      {
        id: 6,
        title: "Product Photography",
        description: "Commercial photography for e-commerce brand",
        image: "/api/placeholder/300/200",
        link: "#",
      },
    ],
    other: [
      {
        id: 7,
        title: "Research Project",
        description: "User research study on mobile shopping habits",
        image: "/api/placeholder/300/200",
        link: "#",
      },
    ],
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>My Work</h2>

        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects[activeTab]?.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
