import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import image from "../../assets/construction.png";
import Footer from "../footer/Footer";
import "../../animation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <>
      {/* <div className="mx-auto p-20"></div> */}

      <div className="mx-auto max-w-2xl p-10 items-center justify-center">
        {/* <h1>projects</h1> */}

        <div className="justify-center items-center">
          <p className="about fade-in-body font_8 wixui-rich-text__text">
            cooking up...
          </p>
          <br />
          <p className="about fade-in-about font_8 wixui-rich-text__text">
            meanwhile, checkout my{" "}
            <a href="https://github.com/RajaHussain99" className="github-link">
              Github
            </a>
            .
          </p>
          <div className="flex justify-center items-center p-10">
            <div className="w-20 h-20 border-t-4 border-black-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
        <div className="mx-auto p-10"></div>
        <div className="mx-auto p-5"></div>
        <div className="mx-auto p-40"></div>
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
