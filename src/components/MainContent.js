import React from "react";
import { useState } from "react";
import ExperiencePage from "./ExperiencePage.js";
import ExperiencePreview from "./ExperiencePreview.js";
import MainLandingContent from "./MainLandingContent.js";
import Navbar from "./Navbar.js";
import TitleCarousel from "./TitleCarousel.js";
import "../styles/MainContent.css";

function MainContent({ animationProgress, isAnimationComplete }) {
  const [altScreen, setAltScreen] = useState("");

  return (
    <div className="main-content-container">
      <Navbar isAnimationComplete={isAnimationComplete} altScreen={altScreen} />
      <MainLandingContent isAnimationComplete={isAnimationComplete} />
      {isAnimationComplete && (
        <>
          <TitleCarousel title={"Experience"} />
          <ExperiencePreview
            altScreen={altScreen}
            setAltScreen={setAltScreen}
          />
          <TitleCarousel title={"Projects"} />
        </>
      )}
      {altScreen !== "" &&
        (altScreen === "gallup" ? (
          <ExperiencePage
            title="Software Developer Intern"
            company="Gallup"
            time="June 2023 – Present"
            location="Omaha, Nebraska"
            setAltScreen={setAltScreen}
          >
            <div className="experience-page-description-item-container">
              <div className="experience-page-description-item">
                – Develop end-to-end enterprise applications of Gallup’s Survey
                Platforms using C#, .NET, and React
              </div>
              <div className="experience-page-description-item">
                – Deploy responsive front end web features using TypeScript,
                JavaScript, and React based on provided wireframes, business
                needs, and stakeholder feedback
              </div>
              <div className="experience-page-description-item">
                – Leverage Test-Driven Development methodologies to drive the
                functionality and reliability of web platforms and REST APIs,
                resulting in improved code quality and accelerated development
                cycles
              </div>
              <div className="experience-page-description-item">
                – Design and integrate scalable APIs and background workers to
                streamline proprietary subscription management and improve user
                experience using .NET
              </div>
              <div className="experience-page-description-item">
                – Optimize development efficiency through Agile practices
                including pair programming, code review, unit/integration
                testing, and load/stress testing{" "}
              </div>
            </div>
          </ExperiencePage>
        ) : altScreen === "mutual-of-omaha" ? (
          <ExperiencePage
            title="Full–Stack Engineer Intern"
            company="Mutual of Omaha"
            time="May 2022 – June 2023"
            location="Omaha, Nebraska"
            setAltScreen={setAltScreen}
          >
            <div className="experience-page-description-item-container">
              <div className="experience-page-description-item">
                – Organized, initiated, and created fully functional front and
                back end features, effectively streamlining actuary and
                underwriter workload
              </div>
              <div className="experience-page-description-item">
                – Incorporated 100% coverage unit tests and integration tests to
                ensure correct population of data models and execution of
                persistence logic, leading to a 15% reduction of bugs in
                production code
              </div>
              <div className="experience-page-description-item">
                – Created, documented, and tested REST APIs to facilitate
                quality assurance, implement features, and assist client
                decision making with Swagger and Spring
              </div>
              <div className="experience-page-description-item">
                – Addressed regular production bugs and improvements in existing
                Groovy services using CI/CD pipelines to rapidly iterate
              </div>
            </div>
          </ExperiencePage>
        ) : altScreen === "valmont-industries" ? (
          <ExperiencePage
            title="Financial Planning Analyst Intern"
            company="Valmont Industries, Inc."
            time="January 2022 – May 2022"
            location="Omaha, Nebraska"
            setAltScreen={setAltScreen}
          >
            <div className="experience-page-description-item-container">
              <div className="experience-page-description-item">
                – Developed machine learning algorithms with Python to forecast
                the commodities market
              </div>
              <div className="experience-page-description-item">
                – Applied economic research conducted through Bloomberg Terminal
                to improve vector autoregression forecasting accuracy and
                identify optimal buying strategies for commodities
              </div>
              <div className="experience-page-description-item">
                – Used descriptive and predictive statistics to strategize
                methods to minimize cash conversion cycle length for the
                irrigation industry
              </div>
              <div className="experience-page-description-item">
                – Built and presented financial models to predict potential
                irrigation industry revenues using Power BI to support
                management level decision making
              </div>
            </div>
          </ExperiencePage>
        ) : altScreen === "union-pacific-railroad" ? (
          <ExperiencePage
            title="Finance / Information Technology Intern"
            company="Union Pacific Railroad"
            time="April 2021 – January 2022"
            location="Omaha, Nebraska"
            setAltScreen={setAltScreen}
          >
            <div className="experience-page-description-item-container">
              <div className="experience-page-description-item">
                – Performed ad-hoc data analysis through Tableau for a wide
                variety of departments involving reporting, modeling, and
                forecasting
              </div>
              <div className="experience-page-description-item">
                – Worked on projects that required technical directives,
                implemented stakeholder input, and produced tangible outcomes
                that increased the efficiency and accuracy of client services
                while automating their workload
              </div>
              <div className="experience-page-description-item">
                – Curated cohesive and meaningful Tableau Scorecards and
                Dashboards effectively utilizing Treemaps, Geographical Maps,
                Donut Charts, and Gantt Charts
              </div>
              <div className="experience-page-description-item">
                – Designed and developed KPIs to build stories around building
                occupancy, railcar efficiency, data warehousing, and more for
                executive level stakeholders
              </div>
              <div className="experience-page-description-item">
                – Managed Tableau Server data sources and wrote custom SQL to
                create efficient databases for use by various company
                initiatives
              </div>
              <div className="experience-page-description-item">
                – Thrived in a fast-paced and dynamic environment providing
                Tableau administrative support, project management, and
                technical troubleshooting for a multitude of departments
              </div>
            </div>
          </ExperiencePage>
        ) : null)}
    </div>
  );
}

export default MainContent;
