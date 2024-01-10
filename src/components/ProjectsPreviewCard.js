import React from "react";
import "../styles/ProjectsPreviewCard.css";

function ProjectsPreviewCard({ title, video, children }) {
  return (
    <div className="projects-preview-card-container">
      <div className="projects-preview-item">
        <div className="projects-preview-item-title">{title}</div>
        <video
          className="projects-video"
          autoPlay
          muted
          playsInline
          loop
          src={video}
          type="video/mp4"
        />
        <div className="projects-preview-card-description">{children}</div>
        <div className="more-info">More Info</div>
      </div>
    </div>
  );
}

export default ProjectsPreviewCard;
