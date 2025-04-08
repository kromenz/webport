import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.responsibilities.map((item, index) => {
          // If the item is an array, render a nested list
          if (Array.isArray(item)) {
            return (
              <ul key={index} className="nested-list">
                {item.map((subItem, subIndex) => (
                  <li key={subIndex}>{subItem}</li>
                ))}
              </ul>
            );
          }
          // Otherwise, render a normal list item
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
