import React from "react";
import { Link } from "react-router-dom";
import BlueboxForumDemo from "../videos/BlueboxForumDemo.mp4";
import ProjectsPreviewCard from "./ProjectsPreviewCard.js";
import "../styles/ProjectsPreview.css";

function ProjectsPreview({ setAltScreen }) {
  return (
    <div className="projects-preview-container">
      <div className="projects-preview-grid">
        <Link
          to="/project/bluebox-forum"
          onClick={() => setAltScreen(true)}
          style={{ textDecoration: "none" }}
        >
          <ProjectsPreviewCard
            title="Bluebox Forum | In Production"
            video={BlueboxForumDemo}
          ></ProjectsPreviewCard>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPreview;
