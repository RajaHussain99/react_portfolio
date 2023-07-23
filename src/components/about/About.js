import React from "react";
import "../../App.css";
import "../../animation.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Sankyu from "../../fonts/Sankyu.ttf";

function About() {
  return (
    <>
      {/* <div className="mx-auto p-20"></div> */}

      <div className="mx-auto max-w-2xl p-10 items-center justify-center">
        {/* <h1 style={{ fontFamily: "Sankyu" }}>about me</h1> */}
        <p className="about fade-in-body font_8 wixui-rich-text__text">
          I'm Raja, a software engineer based out of Washington D.C. Previously,
          I went to the{" "}
          <a href="https://www.rhsmith.umd.edu/" className="github-link">
            University of Maryland - College Park
          </a>
          , picking up a bachelors in Information Systems, while doing a lot of{" "}
          <a
            href="http://www.vimtechllc.com.s3-website-us-east-1.amazonaws.com"
            className="github-link"
          >
            cool things along the way
          </a>
          . As an engineer trying to level up, I experiment making, and breaking
          things via{" "}
          <Link to="/Projects">
            <u className="github-link">my current projects</u>.
          </Link>
          {/* . In addition, I'm exploring my creative side by putting together a{" "}
          <Link to="/Blog">
            <u>tech blog</u>
          </Link>
          , alongside a few{" "}
          <Link to="/Misc">
            <u>other things</u>
          </Link>
          . */}
        </p>
        <br></br>
        <p className="about fade-in-about font_8 wixui-rich-text__text">
          I have limited social media at the moment, but I can be found on
          LinkedIn{" "}
          <a href="https://github.com/RajaHussain99" className="github-link">
            here
          </a>
          .{" "}
        </p>
        <div className="mx-auto p-20"></div>
        <Link to="/">
          <div className="mx-auto">
            <h4>
              <div className="section">
                <FontAwesomeIcon icon={faHome} size="lg" />
              </div>
            </h4>
          </div>
        </Link>
        <br></br>
        <Footer />
      </div>
    </>
  );
}

export default About;
