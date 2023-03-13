import React, { useState } from "react";
import "./Slider.css";

const images = [
  "https://picsum.photos/id/1015/300/200",
  "https://picsum.photos/id/1016/300/200",
  "https://picsum.photos/id/1018/300/200",
  "https://picsum.photos/id/1021/300/200",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    const index = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const index = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(index);
  };

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex}`}
        className="carousel-image"
      />
      <button className="carousel-arrow carousel-arrow--prev" onClick={prevImage}>
        &#8249;
      </button>
      <button className="carousel-arrow carousel-arrow--next" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;
