import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />

      <h1>Raja -- Hussain™</h1>

      <div className="hero-btns">
        <Link to="/main">
          <button className="button relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Enter
            </span>
          </button>
        </Link>
        {/* <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              contact
            </Button> */}
      </div>
    </div>
  );
}

export default Home;
