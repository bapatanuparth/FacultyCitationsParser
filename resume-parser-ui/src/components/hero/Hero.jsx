import React from "react";
import "./hero.css";

const Hero = ({ scrollToHomeContainer }) => {
  return (
    <div className="heroWrapper">
      <span className="title">CitationParser</span>
      <span className="info">
        Extract Publications, Conferences, Book Chapters and Elite Journal
        Publications easily for any year from resume.
      </span>
      <button className="back-button hero-button" onClick={scrollToHomeContainer}>
        <i className="pi pi-arrow-down" style={{ fontSize: "1rem" }}></i>
      </button>
    </div>
  );
};

export default Hero;
