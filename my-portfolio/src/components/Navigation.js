import React, { useState, useEffect } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <button onClick={() => scrollToSection("home")}>Cynthia</button>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("work")}>Work</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
