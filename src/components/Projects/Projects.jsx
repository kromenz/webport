import React, { useRef } from "react";
import Slider from "react-slick";
import "./Projects.css";
import { motion } from "framer-motion";
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <h5>My Projects</h5>
      <div className="arrow-right" onClick={slideRight}>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>

      <div className="arrow-left" onClick={slideLeft}>
        <span className="material-symbols-outlined">chevron_left</span>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {PROJECTS.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            githubUrl={project.githubUrl}
            videoUrl={project.videoUrl}
          />
        ))}
      </Slider>
    </motion.section>
  );
};

export default Projects;
