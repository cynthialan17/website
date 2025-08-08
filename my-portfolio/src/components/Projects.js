import React, { useState } from "react";
import "./Projects.css";
import ImageCarousel from "./ImageCarousel";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("product-design");

  const tabs = [
    { id: "product-design", label: "Product Design" },
    { id: "marketing", label: "Marketing" },
    { id: "graphics", label: "Graphics" },
    { id: "photography", label: "Photography" },
    { id: "other", label: "Other" },
  ];

  const projects = {
    "product-design": [
      {
        id: 1,
        title: "Case Study: LinkedIn Live",
        description:
          "Redesigned LinkedIn's networking experience by conceptualizing and prototyping LinkedIn Live. Conducted research, competitive analysis, and usability testing to address the lack of community and genuine connections. The feature fosters mentorship and professional growth through real-time interactive sessions with industry leaders and peers.",
        image: "./images/casestudy.png",
        link: "https://medium.com/@cl2683/live-learn-connect-designing-linkedins-live-feature-d938da464071",
      },
      {
        id: 2,
        title: "Swapp Website",
        description:
          "Created the web interface for Swapp, a student-driven platform for sustainable item exchange, prioritizing responsive design and intuitive navigation.",
        image: "./images/swapp.png",
        link: "https://www.notion.so/Swapp-Project-Overview-232f39399d31801bae92e616e5e65a10?source=copy_link",
      },
    ],
    marketing: [
      {
        id: 3,
        title: "CornellGO Newsletter",
        description:
          "Designed an engaging, interactive newsletter for CornellGO to share app updates, event news, and exclusive content with student users. Created in Figma as part of my role as Product Marketing Manager.",
        image: "./images/cgo-preview.png",
        link: "https://www.notion.so/CornellGO-Newsletter-Pre-Launch-Engagement-Strategy-241f39399d31805ab328ecb2f97d5af2?source=copy_link",
      },
      {
        id: 4,
        title: "Tabling & Outreach Strategy: CUReviews",
        description:
          "Planned and executed on-campus marketing events for CUReviews, driving 150+ new reviews, raising $250, and strengthening team collaboration while deepening my product knowledge and user insights.",
        image: "./images/cureviews.png",
        link: "https://www.notion.so/Tabling-Outreach-Strategy-CUReviews-249f39399d3180e590c8d499d0919e27?source=copy_link",
      },
      {
        id: 5,
        title: "Diffusive.AI Branding",
        description:
          "Created comprehensive branding guidelines for Diffusive.ai, designing a slide deck that defined the company's visual identity, typography, color palette, and logo usage.",
        image: "./images/diffusive.png",
        link: "https://www.canva.com/design/DAGg6RdQD98/1Sp-R6Be4RtxbX5zmP_KIQ/edit?utm_content=DAGg6RdQD98&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
    other: [
      {
        id: 8,
        title: "DECALab Website Design",
        description:
          "Designed and built DECALab’s website on Wix, showcasing projects, publications, and resources, and developed an interactive audit tool to visualize playspace survey data.",
        image: "./images/decalab.png",
        link: "https://www.decalab-cornell.com/",
      },
    ],
  };

  const carouselImages = {
    graphics: [
      {
        src: "/api/placeholder/800/500",
        title: "Brand Identity Design",
        description:
          "Complete visual identity for tech startup including logo, color palette, and brand guidelines",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Social Media Templates",
        description: "Cohesive template set for Instagram and LinkedIn posts",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Marketing Brochure",
        description: "Multi-page brochure design for product launch campaign",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Event Poster Series",
        description: "Promotional materials for university event series",
      },
    ],
    photography: [
      {
        src: "/api/placeholder/800/500",
        title: "Product Photography",
        description:
          "Commercial photography for e-commerce brand showcasing lifestyle products",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Campus Architecture",
        description:
          "Architectural photography series featuring Cornell University buildings",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Portrait Series",
        description:
          "Professional headshots and creative portraits for local professionals",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Event Photography",
        description:
          "Coverage of university events and student organization activities",
      },
      {
        src: "/api/placeholder/800/500",
        title: "Street Photography",
        description:
          "Candid street photography exploring urban life and culture",
      },
    ],
  };

  const renderContent = () => {
    if (activeTab === "graphics" || activeTab === "photography") {
      const viewMoreLinks = {
        graphics: "https://your-behance-or-dribbble-link.com",
        photography: "https://your-instagram-or-portfolio-link.com",
      };

      return (
        <ImageCarousel
          images={carouselImages[activeTab]}
          category={activeTab}
          viewMoreLink={viewMoreLinks[activeTab]}
        />
      );
    }

    // Use cards for other sections
    return (
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
    );
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

        <div className="projects-content">{renderContent()}</div>
      </div>
    </section>
  );
};

export default ProjectTabs;
