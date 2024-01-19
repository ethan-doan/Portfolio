import React from "react";
import ContactItem from "./ContactItem.js";
import "../styles/ContactMe.css";

function ContactMe() {
  return (
    <div className="contact-me-container">
      <div className="contact-me-list">
        <ContactItem platform="Platform" link="Link" />
        <ContactItem
          platform="Email"
          link="contact@ethandoan.com"
          href="mailto:contact@ethandoan.com"
        />
        <ContactItem
          platform="Linkedin"
          link="linkedin.com/in/ethandoan20"
          href="https://www.linkedin.com/in/ethandoan20/"
        />
        <ContactItem
          platform="Github"
          link="github.com/ethan-doan"
          href="https://github.com/ethan-doan/"
        />
      </div>
    </div>
  );
}

export default ContactMe;
