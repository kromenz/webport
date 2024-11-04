import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            icon={faEnvelope}
            text="andrerafael892@gmail.com"
            href="mailto:andrerafael892@gmail.com"
          />
          <ContactInfoCard
            icon={faGithub}
            text="github.com/kromenz"
            href="https://github.com/kromenz"
          />
          <ContactInfoCard
            icon={faLinkedin}
            text="linkdin"
            href="https://linkedin.com/in/rafael-andré/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
