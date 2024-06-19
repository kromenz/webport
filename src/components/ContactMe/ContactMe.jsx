import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="/assets/images/email.png"
            text="andrerafael892@gmail.com"
            href="mailto:andrerafael892@gmail.com"
          />
          <ContactInfoCard
            iconUrl="/assets/images/github.png"
            text="github.com/kromenz"
            href="https://github.com/kromenz"
          />
          <ContactInfoCard
            iconUrl="/assets/images/linkdin.png"
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
