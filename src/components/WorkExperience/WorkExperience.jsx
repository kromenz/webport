import React, { useRef, useState, useEffect } from "react";
import "./WorkExperience.css";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();
  const [workExperience, setWorkExperience] = useState([]);
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    const sortedExperience = [...WORK_EXPERIENCE].sort(
      (a, b) =>
        new Date(b.date.split(" - ")[0]) - new Date(a.date.split(" - ")[0])
    );
    setWorkExperience(sortedExperience);
  }, []);

  const toggleSortOrder = () => {
    const sortedExperience = [...workExperience].reverse();
    setWorkExperience(sortedExperience);
    setIsAscending(!isAscending);
  };

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
      id="work"
      className="experience-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="experience-header">
        <h5>Work Experience</h5>
        <button onClick={toggleSortOrder} className="sort-button">
          {isAscending ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className="experience-content">
        <div className="arrow-right-we" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left-we" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {workExperience.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
