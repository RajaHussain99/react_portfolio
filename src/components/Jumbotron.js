import React, { useState } from "react";
import "../App.css";
import "../animation.css";

const Jumbotron = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Email", href: "mailto:rhussain@umd.edu" },
    { label: "GitHub", href: "https://github.com/RajaHussain99" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rajashussain" },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn">
        Contact
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content fade-in-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              ×
            </button>

            <h3 className="text-center mb-6" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Get in Touch
            </h3>

            <div className="flex flex-col gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jumbotron;
