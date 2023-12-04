import React from "react";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <div>
      <ul className="navBody">
        <li className="navItem">
          <span className="altFont">01 </span>
          <span className="navFont">About Me</span>
          <div className="previewCard">Content for About Me</div>
        </li>
        <li className="navItem">
          <span className="altFont">02 </span>
          <span className="navFont">Experience</span>
          <div className="previewCard">Content for Experience</div>
        </li>
        <li className="navItem">
          <span className="altFont">03 </span>
          <span className="navFont">Education</span>
          <div className="previewCard">Content for Education</div>
        </li>
        <li className="navItem">
          <span className="altFont">04 </span>
          <span className="navFont">Projects</span>
          <div className="previewCard">Content for Projects</div>
        </li>
        <li className="navItem">
          <span className="altFont">05 </span>
          <span className="navFont">Other</span>
          <div className="previewCard">Content for Other</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
