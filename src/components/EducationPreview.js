import React from "react";
import "../styles/EducationPreview.css";

function EducationPreview() {
  return (
    <div className="education-preview-container">
      <div className="education-content-item">
        <div className="education-content-item-title">Creighton University</div>
        <div className="education-content-item-degree">
          Bachelor of Arts – BA, Computer Science
        </div>
        <div className="education-content-item-degree">
          Bachelor of Science in Business Administration – BSBA, Fintech
          (Finance and Technology)
        </div>
        <div className="education-content-item-tenure">
          August 2020 – May 2024
        </div>
        <hr />
        <div className="education-content-item-extra">
          Extracurriculars: Computer Science Club, Practicum in International
          Development, Portfolio Practicum, Formula One Club, Creighton
          Investment Banking Society, Institute for Economic Inquiry
        </div>
      </div>
      <div className="education-content-item">
        <div className="education-content-item-title">
          University High School
        </div>
        <div className="education-content-item-degree">High School Diploma</div>
        <div className="education-content-item-tenure">
          August 2016 – June 2020
        </div>
        <hr />
        <div className="education-content-item-extra">
          Extracurriculars: Basketball Photographer / Videographer, Baseball
          Photographer / Videographer, Lacrosse
        </div>
      </div>
      <div className="education-content-item">
        <div className="education-content-item-title">Certifications</div>
        <div className="certifications-container">
          <div className="certifications-item">
            <div className="certifications-title">Title</div>
            <div className="certifications-distributor">Distributor</div>
            <div className="certifications-received">Received</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">
              Bloomberg Market Concepts (BMC)
            </div>
            <div className="certifications-distributor">Bloomberg LP</div>
            <div className="certifications-received">March 2022</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">Tableau Author</div>
            <div className="certifications-distributor">Tableau</div>
            <div className="certifications-received">May 2021</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">Tableau Designer</div>
            <div className="certifications-distributor">Tableau</div>
            <div className="certifications-received">May 2021</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">
              JavaScript Algorithms and Data Structures
            </div>
            <div className="certifications-distributor">freeCodeCamp</div>
            <div className="certifications-received">January 2021</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">Responsive Web Design</div>
            <div className="certifications-distributor">freeCodeCamp</div>
            <div className="certifications-received">December 2020</div>
          </div>
          <hr />
          <div className="certifications-item">
            <div className="certifications-title">
              Scientific Computing with Python
            </div>
            <div className="certifications-distributor">freeCodeCamp</div>
            <div className="certifications-received">December 2020</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default EducationPreview;
