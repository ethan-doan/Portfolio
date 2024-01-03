import React from "react";
import { useState } from "react";
import ContactMe from "./ContactMe.js";
import EducationPreview from "./EducationPreview.js";
import ExperiencePreview from "./ExperiencePreview.js";
import MainLandingContent from "./MainLandingContent.js";
import Navbar from "./Navbar.js";
import ProjectsPreview from "./ProjectsPreview.js";
import TitleCarousel from "./TitleCarousel.js";
import "../styles/MainContent.css";

function MainContent() {
  const [altScreen, setAltScreen] = useState(false);

  return (
    <div className="main-content-container">
      <div className="reveal-content">
        <Navbar altScreen={altScreen} setAltScreen={setAltScreen} />
        <MainLandingContent />
      </div>
      <TitleCarousel title={"Experience"} />
      <ExperiencePreview altScreen={altScreen} setAltScreen={setAltScreen} />
      <TitleCarousel title={"Projects"} />
      <ProjectsPreview />
      <TitleCarousel title={"Education"} />
      <EducationPreview />
      <TitleCarousel title={"Contact Me"} />
      <ContactMe />
    </div>
  );
}

export default MainContent;
