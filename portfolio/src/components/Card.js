import React from "react";
import "../styles/Card.css";

function Card({ title, isActive, style, children }) {
  return (
    <div className={`card ${isActive ? "active" : ""}`} style={style}>
      <div className="previewTitle">{title}</div>
      <div className="previewFade"></div>
      <div className="previewContent">{children}</div>
    </div>
  );
}

export default Card;
