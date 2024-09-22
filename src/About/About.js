import React from "react";
import './About.css';
import MyImage from "./WhatsApp Image 2024-09-13 at 04.07.06_5a4c9f1f.jpg"; // Correct image import

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm Ahmed Medhat, a passionate web developer specializing in modern and responsive web applications. I enjoy working with technologies like React, CSS, and JavaScript to create intuitive user experiences.
        </p>
        <p>
          With a strong background in UI/UX design, I focus on building applications that are visually appealing and easy to use. I'm constantly learning new tools and techniques to improve my skills and deliver better results.
        </p>
        <button className="contact-button">Get in Touch</button>
      </div>
      <div className="about-image">
        <img src={MyImage} alt="Ahmed Medhat" />
      </div>
    </div>
  );
}

export default About;
