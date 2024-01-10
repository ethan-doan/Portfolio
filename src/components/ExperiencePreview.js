import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ExperiencePreviewCard from "./ExperiencePreviewCard.js";
import "../styles/ExperiencePreview.css";

function ExperiencePreview({ setAltScreen }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            // Reset Fade In
            // entry.target.classList.remove("visible");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Observe each experience-description
    const descriptions = ref.current.querySelectorAll(
      ".experience-description"
    );
    descriptions.forEach((desc) => {
      observer.observe(desc);
    });

    // Cleanup observer on component unmount
    return () => {
      descriptions.forEach((desc) => {
        observer.unobserve(desc);
      });
    };
  }, []);

  return (
    <div className="experience-preview-container" ref={ref}>
      <div className="experience-preview-grid">
        <Link
          to="/experience/gallup"
          onClick={() => setAltScreen(true)}
          style={{ textDecoration: "none" }}
        >
          <ExperiencePreviewCard
            title="01 Software Developer Intern | Gallup"
            timeline="June 2023 – Present"
          >
            In my role as a Software Developer Intern at Gallup, I engage in
            crafting comprehensive enterprise solutions for Gallup's survey
            systems, employing a blend of technologies like C#, .NET, and React
            for holistic application development. My responsibilities include
            engineering dynamic front-end elements in alignment with user
            requirements and feedback. Additionally, I bolster the robustness
            and efficiency of our web platforms and APIs through rigorous
            Test-Driven Development practices, complemented by my involvement in
            API design and system optimization tasks to enhance user
            interactions. My approach is deeply rooted in Agile methodologies,
            ensuring streamlined and high-quality software development cycles.
          </ExperiencePreviewCard>
        </Link>
        <Link
          to={"/experience/mutual-of-omaha"}
          onClick={() => setAltScreen(true)}
          style={{ textDecoration: "none" }}
        >
          <ExperiencePreviewCard
            title="02 Full–Stack Software Engineer Intern | Mutual of Omaha"
            timeline="May 2022 – June 2023"
          >
            At Mutual of Omaha, I spearheaded the development of comprehensive
            front-end and back-end solutions, significantly enhancing the
            efficiency of actuarial and underwriting processes. My
            implementation of exhaustive unit and integration testing resulted
            in a notable decrease in production code bugs by 15%, ensuring data
            model accuracy and reliable logic execution. Additionally, I
            developed and meticulously documented REST APIs, utilizing Swagger
            and Spring to bolster feature implementation, support client
            decision-making, and maintain quality assurance, while consistently
            tackling production bugs and refining Groovy services through
            efficient CI/CD workflows.
          </ExperiencePreviewCard>
        </Link>
        <Link
          to={"/experience/valmont-industries"}
          onClick={() => setAltScreen(true)}
          style={{ textDecoration: "none" }}
        >
          <ExperiencePreviewCard
            title="03 Financial Planning Analyst Intern | Valmont Industries Inc."
            timeline="January 2022 – May 2022"
          >
            During my time at Valmont Industries, I developed machine learning
            algorithms using Python to accurately forecast the commodities
            market. Through extensive economic research via the Bloomberg
            Terminal, I enhanced the accuracy of vector autoregression forecasts
            and pinpointed the most effective commodity buying strategies. I
            employed both descriptive and predictive statistics to devise
            strategies aimed at reducing the cash conversion cycle length in the
            irrigation industry. Additionally, I constructed and presented
            detailed financial models using Power BI, predicting potential
            revenue streams in the irrigation sector to aid in high-level
            managerial decision-making.
          </ExperiencePreviewCard>
        </Link>
        <Link
          to={"/experience/union-pacific-railroad"}
          onClick={() => setAltScreen(true)}
          style={{ textDecoration: "none" }}
        >
          <ExperiencePreviewCard
            title="04 Finance / Information Technology Intern | Union Pacific Railroad"
            timeline="August 2021 – January 2022"
          >
            In my role, I conducted diverse ad-hoc data analyses using Tableau
            across various departments, focusing on reporting, modeling, and
            forecasting. I created impactful Tableau Scorecards and Dashboards,
            incorporating visual elements like Treemaps and Gantt Charts, to
            streamline processes and enhance client service efficiency. I also
            managed Tableau Server data sources, developed KPIs for
            executive-level decision-making, and thrived in a dynamic
            environment, providing administrative support and technical
            troubleshooting in Tableau for numerous departmental projects.
          </ExperiencePreviewCard>
        </Link>
      </div>
    </div>
  );
}

export default ExperiencePreview;
