import React from "react";
import "../../App.css";
import "../../animation.css";
import "./about.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function About() {
  const titles = [
    "Senior Software Engineer",
    "AWS SME",
    "DevOps-Driven",
    "Building AI Products",
  ];

  return (
    <>
      <div className="mx-auto max-w-2xl p-10 items-center justify-center about-container">

        {/* Title Tags */}
        <div className="title-tags fade-in-header">
          {titles.map((title, index) => (
            <span key={index} className="title-tag">
              {title}
            </span>
          ))}
        </div>

        {/* Headline */}
        <p className="about-headline fade-in-body">
          I design and ship scalable cloud systems and AI-powered products end-to-end — from architecture to production.
        </p>

        {/* Experience Section */}
        <div className="experience-section fade-in-about">
          <div className="experience-item">
            <span className="experience-bullet">→</span>
            <span>6+ years building distributed systems on AWS</span>
          </div>
          <div className="experience-item">
            <span className="experience-bullet">→</span>
            <span>Strong DevOps background (Docker, CI/CD, observability, infra automation)</span>
          </div>
          <div className="experience-item">
            <span className="experience-bullet">→</span>
            <span>Experienced in high-scale data pipelines (Spark, Snowflake, Databricks)</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="tech-section fade-in-about">
          <div className="tech-row">
            <span className="tech-label">Tech</span>
            <span className="tech-items">Python, Node.js, React, SQL, PySpark | AWS, Docker | PostgreSQL, DynamoDB, MongoDB</span>
          </div>
          <div className="tech-row">
            <span className="tech-label">LLM APIs</span>
            <span className="tech-items">OpenAI, Claude, Gemini, Bedrock (Llama, Mistral)</span>
          </div>
        </div>

        <div className="mx-auto p-16"></div>

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

export default About;
