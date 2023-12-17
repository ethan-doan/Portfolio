import React from "react";
import BlueboxForumDemo from "../videos/BlueboxForumDemo.mp4";
import "../styles/ProjectsPreview.css";

function ProjectsPreview() {
  return (
    <div className="projects-preview-container">
      <div className="projects-preview-item">
        <div className="projects-preview-item-title">
          Bluebox Forum | In Production
        </div>
        <video
          className="bluebox-forum-video"
          autoPlay
          muted
          playsInline
          loop
          src={BlueboxForumDemo}
          type="video/mp4"
        />
      </div>
    </div>
  );
}

export default ProjectsPreview;
