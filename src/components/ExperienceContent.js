import React from "react";
import "../styles/ExperienceContent.css";

function ExperienceContent({ role, company, tenure, location, children }) {
  return (
    <div className="experience-page-content">
      <div className="experience-page-details">
        <div className="experience-page-details-item">
          <div>Role:</div>
          <div>{role}</div>
        </div>
        <hr />
        <div className="experience-page-details-item">
          <div>Company:</div>
          <div>{company}</div>
        </div>
        <hr />
        <div className="experience-page-details-item">
          <div>Tenure:</div>
          <div>{tenure}</div>
        </div>
        <hr />
        <div className="experience-page-details-item">
          <div>Location:</div>
          <div>{location}</div>
        </div>
        <hr />
      </div>
      <div className="experience-page-description">
        <div className="experience-page-description-header">
          Responsibilities:
        </div>
        <hr />
        <ul className="experience-page-description-item-container">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceContent;
