import React, { useState, useEffect } from "react";
import "./../App.css";
import "./../animation.css";

const Jumbotron = () => {
  const [isJumbotronOpen, setIsJumbotronOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleJumbotron = () => {
    setIsJumbotronOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <button
        onClick={toggleJumbotron}
        className="mr-4 bg-white text-black text-md text-bold py-2 px-4 rounded-lg hover:bg-gray-100"
      >
        {isJumbotronOpen ? "CONTACT" : "CONTACT"}
      </button>

      {isJumbotronOpen && (
        <div className="fade-in-jumbo fixed inset-20 mx-auto p-20 items-center justify-center transition-opacity duration-2000">
          <div className="bg-black text-white p-4 rounded-lg max-w-sm mx-auto relative min-jumbotron-width">
            <button
              onClick={toggleJumbotron}
              className="absolute top-0 right-0 p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white hover:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center mt-8">
              <div className="flex flex-col space-y-4">
                <a
                  href="rhussain@umd.edu@example.com"
                  className={`fade-in-email flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800`}
                >
                  <div
                    className={`jumbo-text-container ${
                      windowWidth <= 640 ? "text-xs" : "text-base"
                    }`}
                  >
                    EMAIL
                  </div>
                </a>
                <a
                  href="https://github.com/RajaHussain99"
                  className={`fade-in-github flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800`}
                >
                  <div
                    className={`jumbo-text-container ${
                      windowWidth <= 640 ? "text-xs" : "text-base"
                    }`}
                  >
                    GITHUB
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/rajashussain"
                  className={`fade-in-linkedin flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800`}
                >
                  <div
                    className={`jumbo-text-container ${
                      windowWidth <= 640 ? "text-xs" : "text-base"
                    }`}
                  >
                    LINKEDIN
                  </div>
                </a>
                <a
                  href="https://calendly.com/your-calendly-username"
                  className={`fade-in-calendly flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800`}
                >
                  <div
                    className={`jumbo-text-container ${
                      windowWidth <= 640 ? "text-xs" : "text-base"
                    }`}
                  >
                    CALENDLY
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
