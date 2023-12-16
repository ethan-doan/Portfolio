import React from "react";
import "../styles/TitleCarousel.css";

function TitleCarousel({ title }) {
  const titles = Array(5).fill(title);

  return (
    <div className="title-carousel-container">
      <div className="carousel">
        {titles.map((item, index) => (
          <span key={index} className="title-item">
            {item}
          </span>
        ))}
      </div>
      <div className="carousel">
        {titles.map((item, index) => (
          <span key={index} className="title-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TitleCarousel;
