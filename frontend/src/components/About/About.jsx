// About.js
import React from "react";
import "./about.scss"; // Create this file for About-specific styles if needed

const About = () => {
  return (
    <div className="aboutPage">
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to Denver Real Estate, your ultimate destination for finding
          the perfect property in the Mile-High City.
        </p>
        <p>
          Our mission is to provide comprehensive listings of homes and
          apartments across Denver's diverse neighborhoods, catering to every
          lifestyle and budget.
        </p>
        <p>
          Whether you're looking to buy, sell, or rent, our dedicated team of
          agents is here to guide you through every step of the process.
        </p>
        <p>
          Explore our user-friendly search tools, connect with experienced
          agents, and embark on your journey to finding your dream home in
          Denver today!
        </p>
      </div>
    </div>
  );
};

export default About;
