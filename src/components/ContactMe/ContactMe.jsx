import "./ContactMe.css";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm/ContactForm";

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
        <div className="form-wrap">
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
