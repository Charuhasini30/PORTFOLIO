import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Accicare - The Life Saviour',
    description: 'Developed an app using Python, React Native, AWS, Firebase, Raspberry Pi, and Arduino for accident detection and medical alerts.',
    link: 'https://github.com/your-repo', // Replace with actual link
  },
  {
    title: 'Python Django Chat Application',
    description: 'A real-time chat app with Python, Django, and WebSocket for secure messaging and notifications.',
    link: 'https://github.com/your-repo', // Replace with actual link
  },
  {
    title: 'WindpulseEV – Optimized AI/ML Models for Battery Consumption',
    description: 'Designed a solution integrating an Archimedes wind turbine with electric vehicles to extend their battery life.',
    link: 'https://github.com/your-repo', // Replace with actual link
  },
  {
    title: 'SIEM Deployment with ELK Stack',
    description: 'Deployed a SIEM system using the ELK Stack for real-time security event monitoring and analysis.',
    link: 'https://github.com/your-repo', // Replace with actual link
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
