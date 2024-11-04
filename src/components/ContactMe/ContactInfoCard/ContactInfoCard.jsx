import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="contact-details-card">
      <div className="icon">
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "white", fontSize: "30px" }}
          />
        ) : (
          <span>{text}</span>
        )}
      </div>
    </div>
  </a>
);

export default ContactInfoCard;
