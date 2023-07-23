import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron";

function Footer() {
  return (
    <>
      <div className="flex justify-between sticky bottom-0">
        <p className="mr-4">©2023 RAJA HUSSAIN</p>

        <div className="mr-4">
          <Jumbotron />
        </div>
      </div>
    </>
  );
}

export default Footer;
