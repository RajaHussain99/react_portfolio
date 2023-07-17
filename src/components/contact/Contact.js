import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import image from "../../assets/construction.png";
import "@fortawesome/fontawesome-free/css/all.css";

function Contact() {
  return (
    <>
      <div className="mx-auto p-20">
        <h1>contact me</h1>
      </div>

      {/* 
      social:
        email
        github
        LinkedIn
        calendly


       */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <i className="fas fa-envelope text-xl mr-2"></i>
            Email
          </a>
          <a
            href="https://github.com/your-github-username"
            className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          >
            <i className="fab fa-github text-xl mr-2"></i>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            <i className="fab fa-linkedin-in text-xl mr-2"></i>
            LinkedIn
          </a>
          <a
            href="https://calendly.com/your-calendly-username"
            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            <i className="far fa-calendar-alt text-xl mr-2"></i>
            Calendly
          </a>
        </div>
      </div>
      <div className="mx-auto">
        <Link to="/">
          <div className="mx-auto p-60">
            <h4>
              <div className="section">back 2 home</div>
            </h4>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Contact;
