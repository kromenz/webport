import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import ShinyText from "../../blocks/ShinyText/ShinyText";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const sentence =
    "Passionate Software Developer. Transforming ideas into seamless and visually engaging web solutions.";
  const words = sentence.split(" ");
  return (
    <motion.section
      id="home"
      className="hero-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="hero-content">
        <h2 className="text-white">
          <ShinyText
            text="Building Digital Experiences That Inspire"
            disabled={false}
            speed={3}
            colors={["#FFFFFF", "#FFD700", "#FFFFFF"]}
          />
        </h2>

        <motion.p
          className="animated-text"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          style={{ display: "inline-block", overflow: "hidden" }}>
          {words.map((word, wi) => {
            const letters = word.split("");
            return (
              <motion.span
                key={wi}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  marginRight: "0.25rem",
                }}
                variants={textContainer}>
                {letters.map((char, li) => (
                  <motion.span
                    key={li}
                    variants={letterVariants}
                    style={{ display: "inline-block" }}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/atom.png" alt="" />
          </div>
          <img src="./assets/images/ai_profile.jpg" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css-3.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
