import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import image from "../../assets/construction.png";
function Blog() {
  return (
    <>
      <div className="mx-auto p-20">
        <h1>blog</h1>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="Example" />
      </div>

      <div className="mx-auto p-20"></div>
      <Link to="/Main">
        <div className="mx-auto p-60">
          <h4>
            <div className="section">home</div>
          </h4>
        </div>
      </Link>
    </>
  );
}

export default Blog;
