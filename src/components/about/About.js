import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="mx-auto p-20">
        <h1>about me</h1>
      </div>

      <div className="mx-auto max-w-lg">
        <p className="about font_8 wixui-rich-text__text">
          I'm Raja, a software engineer and designer based out of Washington
          D.C. Previously, I went to the{" "}
          <u>University of Maryland - College Park</u>, picking up a bachelors
          in Information Systems, while doing a lot of{" "}
          <u>cool things along the way.</u> As an engineer trying to constantly
          improve, I experiment making, and breaking things via{" "}
          <Link to="/Projects">
            <u>my current projects</u>
          </Link>
          . In addition, I'm exploring my creative side by putting together a{" "}
          <Link to="/Blog">
            <u>tech blog</u>
          </Link>
          , alongside a few{" "}
          <Link to="/Misc">
            <u>other things</u>
          </Link>
          .
        </p>
        <br></br>
        <p className="about font_8 wixui-rich-text__text">
          I have limited social media at the moment, but I can be found on
          LinkedIn <u>here</u>.{" "}
        </p>
      </div>

      <div className="mx-auto p-20"></div>
      <Link to="/">
        <div className="mx-auto p-60">
          <h4>
            <div className="section">home</div>
          </h4>
        </div>
      </Link>
    </>
  );
}

export default About;
