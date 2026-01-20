import React from "react";
import "./projectCard.css";

function ProjectCard({ title, description, tags, link, image }) {
  const CardContent = () => (
    <div className="project-card">
      {image && (
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        {tags && tags.length > 0 && (
          <div className="project-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}

export default ProjectCard;
