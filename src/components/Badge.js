import React from "react";
import "../styles/Badge.css";

function Badge({ text }) {
  return (
    <div className="badge-container">
      <div className="badge-text">{text}</div>
    </div>
  );
}

export default Badge;
