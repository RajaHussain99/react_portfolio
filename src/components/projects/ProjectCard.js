import React from "react";

function ProjectCard({ title, description, tags, link, image }) {
  const CardWrapper = ({ children }) => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {children}
        </a>
      );
    }
    return <div>{children}</div>;
  };

  return (
    <CardWrapper>
      <div className="card">
        {image && (
          <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProjectCard;
