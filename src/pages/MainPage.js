import React from "react";
import "./../App.css";
import "./../animation.css";
import { Link } from "react-router-dom";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import line from "../assets/line.png";
import Jumbotron from "../components/Jumbotron";
import exampleImage from "../assets/construction.png";
import ScrollArrow from "../components/arrow/arrow";

function MainPage() {
  return (
    <>
      {/* <div className="mx-auto max-w-lg items-center justify-center"> */}
      <div className="items-center justify-center">
        <video src="/videos/Render_3.mp4" autoPlay loop muted />
      </div>
      {/* <ScrollArrow /> */}

      <div className="mx-auto ">
        <Link to="/About">
          <div className="fade-in-about mx-auto max-w-lg p-10">
            <h2>
              <div className="section">
                {/* <div className="quotes">"</div> */}
                ABOUT
                {/* <div className="quotes">"</div> */}
              </div>
            </h2>
          </div>
        </Link>

        <Link to="/Projects">
          <div className="fade-in-projects mx-auto max-w-lg p-10">
            <h2>
              <div className="section">
                {/* <div className="quotes">"</div> */}
                PROJECTS
                {/* <div className="quotes">"</div> */}
              </div>
            </h2>
          </div>
        </Link>

        <Link to="/Blog">
          <div className="fade-in-blog mx-auto max-w-lg p-10">
            <h2>
              <div className="section">
                BLOG
                {/* <h2 className="quotes">"</h2>BLOG
                <h2 className="quotes">"</h2> */}
              </div>
            </h2>
          </div>
        </Link>

        <Link to="/Misc">
          <div className="fade-in-misc mx-auto max-w-lg p-10">
            <h2>
              <div className="section">
                MISC
                {/* <div className="quotes">"</div>MISC */}
                {/* <div className="quotes">"</div> */}
              </div>
            </h2>
          </div>
        </Link>
      </div>

      {/* <Link to="/Contact">
          <div className="fade-in-contact mx-auto max-w-lg p-20">
            <h2>
              <div className="section">
                <div className="quotes">"</div>CONTACT
                <div className="quotes">"</div>
              </div>
            </h2>
          </div>
        </Link> */}

      <Footer />
    </>
  );
}

export default MainPage;
