import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <motion.section
      id="contact"
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
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
    </motion.section>
  );
};

export default ContactMe;
