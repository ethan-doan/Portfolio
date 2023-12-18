import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import TitleCarousel from "./TitleCarousel";
import "../styles/ExperiencePage.css";

function ExperiencePage() {
  const { experienceId } = useParams(); // Get the URL parameter
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <>
      <Navbar invert={true} />
      {experienceId === "gallup" ? (
        <div className="experience-page-container">
          <a onClick={goBack} className="back-button">
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
          </a>
          <TitleCarousel title="Gallup" invert={true} />
          <div className="experience-page-content">
            <div className="experience-page-details">
              <div className="experience-page-details-item">
                <div>Role: </div>
                <div>Software Developer Intern</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Company:</div>
                <div>Gallup</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Tenure: </div>
                <div>June 2023 – Present</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Location: </div>
                <div>Omaha, Nebraska</div>
              </div>
              <hr />
            </div>
            <div className="experience-page-description">
              <div className="experience-page-description-header">
                Responsibilities:
              </div>
              <hr />
              <ul className="experience-page-description-item-container">
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
                  streamline proprietary subscription management and improve
                  user experience using .NET
                </li>
                <li className="experience-page-description-item">
                  Optimize development efficiency through Agile practices
                  including pair programming, code review, unit/integration
                  testing, and load/stress testing{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : experienceId === "mutual-of-omaha" ? (
        <div className="experience-page-container">
          <a onClick={goBack} className="back-button">
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
          </a>
          <TitleCarousel title="Mutual of Omaha" invert={true} />
          <div className="experience-page-content">
            <div className="experience-page-details">
              <div className="experience-page-details-item">
                <div>Role: </div>
                <div>Full–Stack Software Engineer Intern</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Company:</div>
                <div>Mutual of Omaha</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Tenure: </div>
                <div>May 2022 – June 2023</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Location: </div>
                <div>Omaha, Nebraska</div>
              </div>
              <hr />
            </div>
            <div className="experience-page-description">
              <div className="experience-page-description-header">
                Responsibilities:
              </div>
              <hr />
              <ul className="experience-page-description-item-container">
                <li className="experience-page-description-item">
                  Organized, initiated, and created fully functional front and
                  back end features, effectively streamlining actuary and
                  underwriter workload
                </li>
                <li className="experience-page-description-item">
                  Incorporated 100% coverage unit tests and integration tests to
                  ensure correct population of data models and execution of
                  persistence logic, leading to a 15% reduction of bugs in
                  production code
                </li>
                <li className="experience-page-description-item">
                  Created, documented, and tested REST APIs to facilitate
                  quality assurance, implement features, and assist client
                  decision making with Swagger and Spring
                </li>
                <li className="experience-page-description-item">
                  Addressed regular production bugs and improvements in existing
                  Groovy services using CI/CD pipelines to rapidly iterate
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : experienceId === "valmont-industries" ? (
        <div className="experience-test-container">
          <a onClick={goBack} className="back-button">
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
          </a>
          <TitleCarousel title="Valmont Industries" invert={true} />
          <div className="experience-page-content">
            <div className="experience-page-details">
              <div className="experience-page-details-item">
                <div>Role: </div>
                <div>Financial Planning Analyst Intern</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Company:</div>
                <div>Valmont Industries, Inc.</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Tenure: </div>
                <div>January 2022 – May 2022</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Location: </div>
                <div>Omaha, Nebraska</div>
              </div>
              <hr />
            </div>
            <div className="experience-page-description">
              <div className="experience-page-description-header">
                Responsibilities:
              </div>
              <hr />
              <ul className="experience-page-description-item-container">
                <li className="experience-page-description-item">
                  Developed machine learning algorithms with Python to forecast
                  the commodities market
                </li>
                <li className="experience-page-description-item">
                  Applied economic research conducted through Bloomberg Terminal
                  to improve vector autoregression forecasting accuracy and
                  identify optimal buying strategies for commodities
                </li>
                <li className="experience-page-description-item">
                  Used descriptive and predictive statistics to strategize
                  methods to minimize cash conversion cycle length for the
                  irrigation industry
                </li>
                <li className="experience-page-description-item">
                  Built and presented financial models to predict potential
                  irrigation industry revenues using Power BI to support
                  management level decision making
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : experienceId === "union-pacific-railroad" ? (
        <div className="experience-test-container">
          <a onClick={goBack} className="back-button">
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
          </a>
          <TitleCarousel title="Union Pacific Railroad" invert={true} />
          <div className="experience-page-content">
            <div className="experience-page-details">
              <div className="experience-page-details-item">
                <div>Role: </div>
                <div>Finance / Information Technology Intern</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Company:</div>
                <div>Union Pacific Railroad</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Tenure: </div>
                <div>August 2021 – January 2022</div>
              </div>
              <hr />
              <div className="experience-page-details-item">
                <div>Location: </div>
                <div>Omaha, Nebraska</div>
              </div>
              <hr />
            </div>
            <div className="experience-page-description">
              <div className="experience-page-description-header">
                Responsibilities:
              </div>
              <hr />
              <ul className="experience-page-description-item-container">
                <li className="experience-page-description-item">
                  Performed ad-hoc data analysis through Tableau for a wide
                  variety of departments involving reporting, modeling, and
                  forecasting
                </li>
                <li className="experience-page-description-item">
                  Worked on projects that required technical directives,
                  implemented stakeholder input, and produced tangible outcomes
                  that increased the efficiency and accuracy of client services
                  while automating their workload
                </li>
                <li className="experience-page-description-item">
                  Curated cohesive and meaningful Tableau Scorecards and
                  Dashboards effectively utilizing Treemaps, Geographical Maps,
                  Donut Charts, and Gantt Charts
                </li>
                <li className="experience-page-description-item">
                  Designed and developed KPIs to build stories around building
                  occupancy, railcar efficiency, data warehousing, and more for
                  executive level stakeholders
                </li>
                <li>
                  Managed Tableau Server data sources and wrote custom SQL to
                  create efficient databases for use by various company
                  initiatives
                </li>
                <li>
                  Thrived in a fast-paced and dynamic environment providing
                  Tableau administrative support, project management, and
                  technical troubleshooting for a multitude of departments
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ExperiencePage;
