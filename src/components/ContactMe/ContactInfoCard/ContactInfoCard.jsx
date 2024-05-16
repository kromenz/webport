import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
    </div>
  </a>
);

export default ContactInfoCard;
