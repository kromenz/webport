import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({
  title,
  imageUrl,
  description,
  githubUrl,
  videoUrl,
}) => {
  return (
    <div className="projects-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link">
          View on GitHub
          <img
            src="./assets/images/arrow.png"
            alt="GitHub Icon"
            className="github-icon"
          />
        </a>
        {videoUrl && (
          <div className="project-video-indicator">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link">
              Video available for this project!
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
