import React, { useState } from "react";
import "./ProjectsCard.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsCard = ({
  title,
  imageUrl,
  description,
  githubUrl,
  videoUrl,
}) => {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(imageUrl && !imgError);

  return (
    <div className="projects-card">
      <div className="project-media">
        {hasImage ? (
          <img
            src={imageUrl}
            alt={title}
            className="project-image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="project-no-image"
            role="img"
            aria-label={`Sem imagem}`}></div>
        )}
      </div>

      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link project-link--pill"
          aria-label={`Open ${title} on GitHub`}>
          <span className="project-link__text">View on GitHub</span>
          <span className="project-link__icon" aria-hidden="true">
            <FontAwesomeIcon icon={faGithub} />
          </span>
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
