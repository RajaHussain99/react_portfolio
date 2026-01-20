import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "../../animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";
import "./projectCard.css";

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
    <>
      <div className="mx-auto max-w-4xl p-10 items-center justify-center">
        <h2 className="fade-in-header page-title" style={{ marginTop: "0" }}>
          PROJECTS
        </h2>

        <p className="about fade-in-body text-center" style={{ marginBottom: "2rem" }}>
          A collection of things I've built.{" "}
          <a href="https://github.com/RajaHussain99" className="github-link">
            View my Github
          </a>{" "}
          for more.
        </p>

        <div className="projects-grid fade-in-about">
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

        <div className="mx-auto p-10"></div>

        <Link to="/">
          <div className="mx-auto">
            <h4>
              <div className="section">
                <FontAwesomeIcon icon={faHome} size="lg" />
              </div>
            </h4>
          </div>
        </Link>
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Projects;
