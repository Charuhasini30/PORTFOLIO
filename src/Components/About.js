import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate software developer specializing in web development, AI, and cybersecurity. I love learning new technologies and solving complex problems.
          </p>
          <p>
            I strive to build solutions that are both functional and user-friendly. My primary focus is on creating impactful applications using the latest tech stacks.
          </p>
        </div>
        <div className="profile-img">
          <img src="your-profile-image.jpg" alt="Your profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
