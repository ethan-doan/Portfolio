import React from "react";
import "../styles/ExperiencePreviewCard.css";

function ExperienceCardPreview({ onClick, title, timeline, children }) {
  return (
    <div className="experience-card-preview-container" onClick={onClick}>
      <div className="experience-preview-item">
        <div className="experience-title">{title}</div>
        <div className="experience-timeline">{timeline}</div>
        <div className="experience-description">{children}</div>
        <div className="more-info">More Info</div>
      </div>
    </div>
  );
}

export default ExperienceCardPreview;
