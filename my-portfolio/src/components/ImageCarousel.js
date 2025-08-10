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

  // Reset currentIndex if it's out of bounds
  const safeCurrentIndex = currentIndex >= images.length ? 0 : currentIndex;
  const currentImage = images[safeCurrentIndex];

  // Safety check - if currentImage is undefined, return early or handle gracefully
  if (!currentImage) {
    return (
      <div className="carousel-empty">
        <p>Image not found.</p>
      </div>
    );
  }

  const hasTitle = currentImage.title && currentImage.title.trim() !== "";
  const hasDescription =
    currentImage.description && currentImage.description.trim() !== "";
  const shouldShowOverlay = hasTitle || hasDescription;

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          ‹
        </button>

        <div className="carousel-main">
          <div className="carousel-image-container">
            <img
              src={currentImage.src}
              alt={currentImage.title || "Image"}
              className="carousel-image"
            />
            {shouldShowOverlay && (
              <div className="image-overlay">
                {hasTitle && <h3>{currentImage.title}</h3>}
                {hasDescription && <p>{currentImage.description}</p>}
              </div>
            )}
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
            className={`indicator ${
              index === safeCurrentIndex ? "active" : ""
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {safeCurrentIndex + 1} / {images.length}
      </div>

      {viewMoreLink && (
        <div className="view-more-container">
          <a
            href={viewMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            View more →
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
