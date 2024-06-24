import React, { useState } from "react";
import "./navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import PDF from "../../CV.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const openPDF = () => {
    window.open(PDF, "_blank");
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" alt="" />

          <ul>
            <li>
              <AnchorLink className="anchor-link" href="#home">
                <a className="menu-item">Home</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#skills">
                <a className="menu-item">Skills</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#projects">
                <a className="menu-item">Projects</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#work">
                <a className="menu-item">Work Experience</a>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                <a className="menu-item">Contact Me</a>
              </AnchorLink>
            </li>

            <button className="contact-btn" onClick={openPDF}>
              My CV
            </button>
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
