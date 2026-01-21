import React from "react";
import "../../App.css";
import "../../animation.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function About() {
  const expertise = [
    "6+ years building distributed systems on AWS",
    "Strong DevOps background — Docker, CI/CD, observability, infra automation",
    "Experienced in high-scale data pipelines — Spark, Snowflake, Databricks",
  ];

  const techStack = {
    Core: "Python, Node.js, React, SQL, PySpark",
    Infrastructure: "AWS, Docker, PostgreSQL, DynamoDB, MongoDB",
    "AI/LLM": "OpenAI, Claude, Gemini, Bedrock",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container-narrow py-16">
        {/* Back Link */}
        <Link to="/" className="fade-in-header inline-flex items-center gap-2 mb-12 nav-link">
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
          <span>Back</span>
        </Link>

        {/* Title Tags */}
        <div className="fade-in-header flex flex-wrap gap-3 mb-8">
          {["Senior Software Engineer", "AWS SME", "DevOps", "AI Products"].map(
            (tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            )
          )}
        </div>

        {/* Headline */}
        <h1 className="fade-in-body mb-8" style={{ lineHeight: 1.3 }}>
          I design and ship scalable cloud systems and AI-powered products — from architecture to production.
        </h1>

        {/* Expertise */}
        <div className="fade-in-about mb-12">
          <ul className="space-y-3">
            {expertise.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">—</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="fade-in-projects">
          <div className="border-t border-gray-200 pt-8">
            {Object.entries(techStack).map(([label, items], i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
                <span className="text-xs uppercase tracking-wider text-gray-500 sm:w-24 shrink-0">
                  {label}
                </span>
                <p className="text-sm">{items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="fade-in-footer">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default About;
