import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import BlurText from "../../blocks/BlurText/BlurText";
import ShinyText from "../../blocks/ShinyText/ShinyText";

const Hero = () => {
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

        <p>
          <BlurText
            as="h2"
            text="Passionate Frontend Devoloper. Transforming Ideas into Seamless and
            Visually Web Solutions."
            delay={150}
            animateBy="words"
            direction="top"
          />
        </p>
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
