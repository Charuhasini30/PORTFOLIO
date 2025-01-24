/* src/App.js */

import React from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Courses from './Components/Courses';  // Import Courses component
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Courses />  {/* Add Courses section here */}
      <Contact />
    </div>
  );
}

export default App;
