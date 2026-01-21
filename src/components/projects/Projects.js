import React from "react";
import "../../App.css";
import "../../animation.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Follic",
      description:
        "AI-powered hair loss assessment tool that analyzes patterns, connects users with nearby clinics, and enables progress tracking over time.",
      tags: ["AI", "React", "Healthcare"],
      link: null,
      image: "/projects/follic.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-16">
        {/* Back Link */}
        <Link to="/" className="fade-in-header inline-flex items-center gap-2 mb-12 nav-link">
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          <span>Back</span>
        </Link>

        {/* Header */}
        <div className="fade-in-header section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            things I've built.{" "}
            <a
              href="https://github.com/RajaHussain99"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              see github
            </a>{" "}
            for more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="fade-in-body grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="fade-in-footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Projects;
