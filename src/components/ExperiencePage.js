import React from "react";
import { useParams } from "react-router-dom";
import ExperienceContent from "./ExperienceContent.js";
import Navbar from "./Navbar";
import TitleCarousel from "./TitleCarousel";
import "../styles/ExperiencePage.css";

function ExperiencePage() {
  const { experienceId } = useParams(); // Get the URL parameter

  return (
    <div className="experience-page-container">
      <Navbar invert={true} />
      {experienceId === "gallup" ? (
        <>
          <TitleCarousel title="Gallup" invert={true} />
          <ExperienceContent
            role="Software Developer Intern"
            company="Gallup"
            tenure="June 2023 – Present"
            location="Omaha, Nebraska"
          >
            <li className="experience-page-description-item">
              Develop end-to-end enterprise applications of Gallup’s Survey
              Platforms using C#, .NET, and React
            </li>
            <li className="experience-page-description-item">
              Deploy responsive front end web features using TypeScript,
              JavaScript, and React based on provided wireframes, business
              needs, and stakeholder feedback
            </li>
            <li className="experience-page-description-item">
              Leverage Test-Driven Development methodologies to drive the
              functionality and reliability of web platforms and REST APIs,
              resulting in improved code quality and accelerated development
              cycles
            </li>
            <li className="experience-page-description-item">
              Design and integrate scalable APIs and background workers to
              streamline proprietary subscription management and improve user
              experience using .NET
            </li>
            <li className="experience-page-description-item">
              Upheld and implemented web accessibility standards across Gallup's
              Survey Platforms, enhancing user experiences for individuals with
              disabilities through accessible navigation, keyboard-friendly
              controls, and screenreader compatibility.
            </li>
            <li className="experience-page-description-item">
              Optimize development efficiency through Agile practices including
              pair programming, code review, unit/integration testing, and
              load/stress testing{" "}
            </li>
          </ExperienceContent>
        </>
      ) : experienceId === "mutual-of-omaha" ? (
        <>
          <TitleCarousel title="Mutual of Omaha" invert={true} />
          <ExperienceContent
            role="Full–Stack Software Engineer Intern"
            company="Mutual of Omaha"
            tenure="May 2022 – June 2023"
            location="Omaha, Nebraska"
          >
            <li className="experience-page-description-item">
              Organized, initiated, and created fully functional front and back
              end features, effectively streamlining actuary and underwriter
              workload
            </li>
            <li className="experience-page-description-item">
              Incorporated 100% coverage unit tests and integration tests to
              ensure correct population of data models and execution of
              persistence logic, leading to a 15% reduction of bugs in
              production code
            </li>
            <li className="experience-page-description-item">
              Created, documented, and tested REST APIs to facilitate quality
              assurance, implement features, and assist client decision making
              with Swagger and Spring
            </li>
            <li className="experience-page-description-item">
              Addressed regular production bugs and improvements in existing
              Groovy services using CI/CD pipelines to rapidly iterate
            </li>
          </ExperienceContent>
        </>
      ) : experienceId === "valmont-industries" ? (
        <>
          <TitleCarousel title="Valmont Industries" invert={true} />
          <ExperienceContent
            role="Financial Planning Analyst Intern"
            company="Valmont Industires, Inc."
            tenure="January 2022 – May 2022"
            location="Omaha, Nebraska"
          >
            {" "}
            <li className="experience-page-description-item">
              Developed machine learning algorithms with Python to forecast the
              commodities market
            </li>
            <li className="experience-page-description-item">
              Applied economic research conducted through Bloomberg Terminal to
              improve vector autoregression forecasting accuracy and identify
              optimal buying strategies for commodities
            </li>
            <li className="experience-page-description-item">
              Used descriptive and predictive statistics to strategize methods
              to minimize cash conversion cycle length for the irrigation
              industry
            </li>
            <li className="experience-page-description-item">
              Built and presented financial models to predict potential
              irrigation industry revenues using Power BI to support management
              level decision making
            </li>
          </ExperienceContent>
        </>
      ) : experienceId === "union-pacific-railroad" ? (
        <>
          <TitleCarousel title="Union Pacific Railroad" invert={true} />
          <ExperienceContent
            role="Finance / Information Technology Intern"
            company="Union Pacific Railroad"
            location="Omaha, Nebraska"
          >
            {" "}
            <li className="experience-page-description-item">
              Performed ad-hoc data analysis through Tableau for a wide variety
              of departments involving reporting, modeling, and forecasting
            </li>
            <li className="experience-page-description-item">
              Worked on projects that required technical directives, implemented
              stakeholder input, and produced tangible outcomes that increased
              the efficiency and accuracy of client services while automating
              their workload
            </li>
            <li className="experience-page-description-item">
              Curated cohesive and meaningful Tableau Scorecards and Dashboards
              effectively utilizing Treemaps, Geographical Maps, Donut Charts,
              and Gantt Charts
            </li>
            <li className="experience-page-description-item">
              Designed and developed KPIs to build stories around building
              occupancy, railcar efficiency, data warehousing, and more for
              executive level stakeholders
            </li>
            <li>
              Managed Tableau Server data sources and wrote custom SQL to create
              efficient databases for use by various company initiatives
            </li>
            <li>
              Thrived in a fast-paced and dynamic environment providing Tableau
              administrative support, project management, and technical
              troubleshooting for a multitude of departments
            </li>
          </ExperienceContent>
        </>
      ) : null}
    </div>
  );
}

export default ExperiencePage;
