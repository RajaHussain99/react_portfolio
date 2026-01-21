import React from "react";
import "../App.css";
import "../animation.css";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import VideoPlayer from "../components/video/VideoPlayer";

function MainPage() {
  const videoUrl = process.env.PUBLIC_URL + "/videos/Render_3.mp4";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container-narrow py-16">
        {/* Logo/Video */}
        <div className="fade-in-header flex justify-center mb-16">
          <VideoPlayer videoUrl={videoUrl} />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-8">
          <Link to="/About" className="fade-in-about">
            <span className="nav-link">About</span>
          </Link>

          <Link to="/Projects" className="fade-in-projects">
            <span className="nav-link">Projects</span>
          </Link>

          <Link to="/Photography" className="fade-in-photography">
            <span className="nav-link">Travels</span>
          </Link>
        </nav>

        {/* Footer */}
        <div className="fade-in-footer mt-24">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
