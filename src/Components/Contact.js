import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
