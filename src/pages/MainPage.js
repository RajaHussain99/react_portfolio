import React from "react";
import "./../App.css";
import "./../animation.css";
import { Link } from "react-router-dom";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import line from "../assets/line.png";
import Jumbotron from "../components/Jumbotron";
import exampleImage from "../assets/construction.png";
import VideoPlayer from "../components/video/VideoPlayer";
import Sankyu from "../fonts/Sankyu.ttf";
import "../fonts/fonts.css";
function MainPage() {
  const videoUrl = process.env.PUBLIC_URL + "/videos/Render_3.mp4";
  //const gifUrl = process.env.PUBLIC_URL + "/videos/Friday_3.gif";
  return (
    <>
      <div className="mx-auto max-w-2xl">

        {/* <video src={videoUrl} autoPlay loop muted /> */}
        <div className="mx-auto max-w-2xl">
        <VideoPlayer videoUrl={videoUrl} />
        </div>
        {/* </div> */}
        {/* <ScrollArrow /> */}

        <div className="mx-auto ">
          <Link to="/About">
            <div className="fade-in-about mx-auto max-w-lg p-20">
              <h2 style={{ fontFamily: "Sankyu" }}>
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
              <h2 style={{ fontFamily: "Sankyu" }}>
                <div className="section">
                  {/* <div className="quotes">"</div> */}
                  PROJECTS
                  {/* <div className="quotes">"</div> */}
                </div>
              </h2>
            </div>
          </Link>

          {/* <Link to="/Blog">
          <div className="fade-in-blog mx-auto max-w-lg p-10">
            <h2>
              <div className="section">BLOG</div>
            </h2>
          </div>
        </Link>

        <Link to="/Misc">
          <div className="fade-in-misc mx-auto max-w-lg p-10">
            <h2>
              <div className="section">MISC</div>
            </h2>
          </div>
        </Link> */}
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

        <div className="mx-auto max-w-2xl p-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
