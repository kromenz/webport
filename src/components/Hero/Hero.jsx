import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import ShinyText from "../../blocks/ShinyText/ShinyText";
import DecryptText from "../../blocks/DecryptText/DecryptText";

const Hero = () => {
  const sentence =
    "A passionate Software Developer.\n" +
    "Transforming ideas into seamless\n" +
    "and visually engaging web solutions.";

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
          Hello I'm
          <br />
          <ShinyText
            text="Rafael André"
            disabled={false}
            speed={3}
            colors={["#FFFFFF", "#FFD700", "#FFFFFF"]}
          />
        </h2>

        <DecryptText
          text={sentence}
          speed={60}
          threshold={0.3}
          className="animated-text"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" },
        }}
        className="hero">
        <div className="image">
          <div className="avatar">
            <img src="./assets/images/ai_profile.jpg" alt="Rafael André" />
          </div>

          <motion.svg
            className="avatar-ring"
            viewBox="-2 -2 104 104"
            preserveAspectRatio="xMidYMid meet"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            aria-hidden>
            <defs>
              <linearGradient
                id="ringGradOuter"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%">
                <stop offset="0%" stopColor="#7c66e3" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>

            <motion.circle
              cx="50"
              cy="50"
              r="50"
              fill="none"
              stroke="url(#ringGradOuter)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25",
                  "16 25 92 72",
                  "4 250 22 22",
                  "16 10 6 12",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
