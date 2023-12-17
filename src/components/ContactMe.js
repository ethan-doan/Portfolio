import React from "react";
import "../styles/ContactMe.css";

function ContactMe() {
  return (
    <div className="contact-me-container">
      <div className="contact-me-list">
        <div className="contact-me-item">
          <div className="contact-me-item-platform">Platform</div>
          <div className="contact-me-item-link">Link</div>
        </div>
        <hr />
        <div className="contact-me-item">
          <div className="contact-me-item-platform">Email</div>
          <div className="contact-me-item-link">
            <a href="mailto:contact@ethandoan.com">contact@ethandoan.com</a>
          </div>
        </div>
        <hr />
        <div className="contact-me-item">
          <div className="contact-me-item-platform">Linkedin</div>
          <div className="contact-me-item-link">
            <a
              href="https://www.linkedin.com/in/ethandoan20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/ethandoan20/
            </a>
          </div>
        </div>
        <hr />
        <div className="contact-me-item">
          <div className="contact-me-item-platform">Github</div>
          <div className="contact-me-item-link">
            <a
              href="https://github.com/ethan-doan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ethan-doan/
            </a>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ContactMe;
