import React, { useState } from "react";
import "./../App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./../animation.css";

const Jumbotron = () => {
  const [isJumbotronOpen, setIsJumbotronOpen] = useState(false);

  const toggleJumbotron = () => {
    setIsJumbotronOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <button
        onClick={toggleJumbotron}
        className="mr-4 bg-white text-black text-md text-bold py-2 px-4 rounded-lg hover:bg-gray-100"
      >
        {isJumbotronOpen ? "CONTACT" : "CONTACT"}
      </button>

      {isJumbotronOpen && (
        <div className="fade-in-jumbo fixed inset-0 mx-auto p-80 items-center justify-center transition-opacity duration-2000">
          <div className="bg-black text-white p-4 rounded-lg max-w-sm mx-auto relative">
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
                  href="mailto:your-email@example.com"
                  className="fade-in-email flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  {/* <i className="fas fa-envelope text-xl mr-2"></i> */}
                  {/* <div className="jumbo-quotes">"</div> */}
                  <span className="jumbo-text">EMAIL</span>
                  {/* <div className="jumbo-quotes">"</div> */}
                </a>
                <a
                  href="https://github.com/your-github-username"
                  className="fade-in-github flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  {/* <i className="fab fa-github text-xl mr-2"></i> */}
                  {/* <div className="jumbo-quotes">" </div> */}
                  <span className="jumbo-text"> GITHUB </span>
                  {/* <div className="jumbo-quotes"> "</div> */}
                </a>
                <a
                  href="https://www.linkedin.com/in/your-linkedin-username"
                  className="fade-in-linkedin flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  {/* <i className="fab fa-linkedin-in text-xl mr-2"></i> */}
                  {/* <div className="jumbo-quotes">" </div> */}
                  <span className="jumbo-text">LINKEDIN</span>
                  {/* <div className="jumbo-quotes"> "</div> */}
                </a>
                <a
                  href="https://calendly.com/your-calendly-username"
                  className="fade-in-calendly flex items-center justify-center bg-gray text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                >
                  {/* <i className="far fa-calendar-alt text-xl mr-2"></i> */}
                  {/* <div className="jumbo-quotes">"</div> */}
                  <span className="jumbo-text">CALENDLY</span>
                  {/* <div className="jumbo-quotes">"</div> */}
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
