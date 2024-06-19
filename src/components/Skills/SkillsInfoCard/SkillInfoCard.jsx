import React from "react";
import "./SkillInfoCard.css";

const getSkillLevel = (percentage) => {
  const value = parseInt(percentage, 10);
  if (value >= 80) return "Expert";
  if (value >= 60) return "Advanced";
  if (value >= 40) return "Intermediate";
  return "Beginner";
};

const getSkillLevelWidth = (level) => {
  switch (level) {
    case "Expert":
      return "100%";
    case "Advanced":
      return "75%";
    case "Intermediate":
      return "50%";
    case "Beginner":
      return "25%";
    default:
      return "0%";
  }
};

const SkillInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => {
          const skillLevel =
            heading === "Soft Skills" ? null : getSkillLevel(item.percentage);
          const skillWidth =
            heading === "Soft Skills" ? null : getSkillLevelWidth(skillLevel);
          return (
            <React.Fragment key={`skill_${index}`}>
              <div className="skill-info">
                <p>{item.skill}</p>
                {skillLevel && <p className="skill-level">{skillLevel}</p>}
              </div>
              {skillWidth && (
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress"
                    style={{ width: skillWidth }}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SkillInfoCard;
