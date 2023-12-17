import React from "react";
import TitleCarousel from "./TitleCarousel";
import "../styles/ExperiencePage.css";

function ExperiencePage({
  title,
  company,
  time,
  location,
  setAltScreen,
  children,
}) {
  return (
    <div className="experience-page-container">
      <div className="back-button" onClick={() => setAltScreen("")}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10 L10 25 L30 40"
            stroke="#f5f5f5"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="back-button-text">Return</span>
      </div>
      <TitleCarousel title={company} invert={true} />
      <div className="experience-page-content">
        <div className="experience-page-details">
          <div className="experience-page-details-item">
            <div>Role: </div>
            <div>{title}</div>
          </div>
          <hr />
          <div className="experience-page-details-item">
            <div>Company:</div>
            <div>{company}</div>
          </div>
          <hr />
          <div className="experience-page-details-item">
            <div>Tenure: </div>
            <div>{time}</div>
          </div>
          <hr />
          <div className="experience-page-details-item">
            <div>Location: </div>
            <div>{location}</div>
          </div>
          <hr />
        </div>
        <div className="experience-page-description">
          <div className="experience-page-description-header">
            Responsibilities:
          </div>
          <hr />
          {children}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
