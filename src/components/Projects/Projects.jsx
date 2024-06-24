import React, { useRef } from "react";
import Slider from "react-slick";
import "./Projects.css";
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
    <section className="projects-container">
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
    </section>
  );
};

export default Projects;
