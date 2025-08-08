import React, { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images, category, viewMoreLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="carousel-empty">
        <p>No {category} images to display yet.</p>
      </div>
    );
  }

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          ‹
        </button>

        <div className="carousel-main">
          <div className="carousel-image-container">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="carousel-image"
            />
            <div className="image-overlay">
              <h3>{images[currentIndex].title}</h3>
              <p>{images[currentIndex].description}</p>
            </div>
          </div>
        </div>

        <button className="carousel-btn next-btn" onClick={nextImage}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>

      {viewMoreLink && (
        <div className="view-more-container">
          <a
            href={viewMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            View more {category} →
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
