import React from 'react';
import './Courses.css'; // Assuming you'll have a CSS file for styling

const courses = [
  {
    title: 'Data Structures and Algorithms',
    description: 'A comprehensive certificate course covering data structures and algorithms.',
    certificateLink: 'file:///C:/Users/charu/Downloads/udemy%20certificate.pdf'
  },
  {
    title: 'CSS Crash Course for Beginners',
    description: 'A beginner-friendly CSS crash course certificate.',
    certificateLink: 'file:///C:/users/charu/Downloads/css%20udemy%20certificate.jpg'
  },
  {
    title: 'Pandas for Data Analysis',
    description: 'A complete course on data manipulation and analysis using Pandas.',
    certificateLink: 'file:///C:/users/charu/Downloads/pandas%20certificate.png'
  },
  {
    title: 'C++ Programming',
    description: 'Master the basics of C++ programming with hands-on exercises.',
    certificateLink: 'file:///C:/Users/charu/Downloads/C%20++%20certificate.pdf'
  },
];

const Courses = () => {
  return (
    <section id="courses">
      <h2>Courses I've Completed</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.certificateLink} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
