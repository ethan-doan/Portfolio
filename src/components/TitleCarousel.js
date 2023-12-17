import React from "react";
import "../styles/TitleCarousel.css";

function TitleCarousel({ title, invert }) {
  const titles = Array(5).fill(title);

  return (
    <div
      className="title-carousel-container"
      style={{
        backgroundColor: invert ? "#212121" : "#f5f5f5",
        color: invert ? "#f5f5f5" : "#212121",
      }}
    >
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
