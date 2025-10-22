import PDF from "../../../Rafael_Andre_CV.pdf";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const openPDF = () => {
    window.open(PDF, "_blank");
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        <div className="mobile-menu-container">
          <img src="./assets/images/logo.png" alt="" className="logo" />
          <ul>
            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.3 }}>
              <AnchorLink className="anchor-link" href="#home">
                <motion.a className="menu-item">Home</motion.a>
              </AnchorLink>
            </motion.li>
            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.3 }}>
              <AnchorLink className="anchor-link" offset={50} href="#skills">
                <motion.a className="menu-item">Skills</motion.a>
              </AnchorLink>
            </motion.li>

            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.3 }}>
              <AnchorLink className="anchor-link" offset={50} href="#projects">
                <motion.a className="menu-item">Projects</motion.a>
              </AnchorLink>
            </motion.li>

            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.3 }}>
              <AnchorLink className="anchor-link" offset={50} href="#work">
                <motion.a className="menu-item">Work Experience</motion.a>
              </AnchorLink>
            </motion.li>

            <motion.li
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5, duration: 0.3 }}>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <motion.a className="menu-item">Contact Me</motion.a>
              </AnchorLink>
            </motion.li>
            <motion.button
              className="cv-btn"
              onClick={openPDF}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}>
              My CV
            </motion.button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
