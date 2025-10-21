import React, { useState } from "react";
import "./navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import PDF from "../../Rafael_Andre_CV.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const openPDF = () => {
    window.open(PDF, "_blank");
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
