import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${visible ? "visible" : ""}`}>
      © {currentYear} Rafael André
    </div>
  );
};

export default Footer;
