import React from "react";
import "../styles/Card.css";

function Card({ title, isActive, style, children }) {
  return (
    <div className={`previewCard ${isActive ? "active" : ""}`} style={style}>
      <p className="previewTitle">{title}</p>
      {isActive && <p className="previewContent">{children}</p>}
    </div>
  );
}

export default Card;
