import React from "react";
import "./ContactMe.css";
import { motion } from "framer-motion";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const cardVariants = {
  offscreen: (custom) => ({
    opacity: 0,
    x: custom === 0 ? -100 : 100,
  }),
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const springVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

const ContactMe = () => {
  const cards = [
    {
      icon: faEnvelope,
      text: "andrerafael892@gmail.com",
      href: "mailto:andrerafael892@gmail.com",
    },
    {
      icon: faGithub,
      text: "github.com/kromenz",
      href: "https://github.com/kromenz",
    },
    {
      icon: faLinkedin,
      text: "linkedin",
      href: "https://linkedin.com/in/rafael-andré/",
    },
  ];
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
          {cards.map((item, index) => (
            <motion.div
              key={item.text}
              custom={index}
              variants={springVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              style={{ marginBottom: "1rem" }}>
              <ContactInfoCard
                icon={item.icon}
                text={item.text}
                href={item.href}
              />
            </motion.div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
