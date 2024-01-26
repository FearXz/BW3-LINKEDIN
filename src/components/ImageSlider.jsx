import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia immagine ogni 10 secondi

    return () => clearInterval(timer); // Pulizia alla dismissione del componente
  }, [images.length]);

  return (
    <div id="slider" style={{ width: "100%", overflow: "hidden" }}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Slide ${index}`}
          style={{ width: "100%", height: "100%", display: currentIndex === index ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
