import React from "react";
import "../styles/ContactItem.css";

function ContactItem({ platform, link, href }) {
  return (
    <>
      <div className="contact-item-container">
        <div className="contact-me-item-platform">{platform}</div>
        <div className="contact-me-item-link">
          <a href={href} target="_blank" rel="noreferrer">
            {link}
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ContactItem;
