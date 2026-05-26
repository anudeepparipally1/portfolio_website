import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import ConnectWithMe from './ConnectWithMe';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {activeSection === 'home' && (
          <section id="home" className="hero-section">
            <h1>Welcome to My Portfolio</h1>
            <p>Crafting beautiful and functional digital experiences</p>
          </section>
        )}
        
        {activeSection === 'skills' && <Skills />}
        
        {activeSection === 'projects' && <Projects />}
        
        {activeSection === 'education' && <Education />}
        
        {activeSection === 'experience' && <Experience />}
        
        {activeSection === 'connect' && <ConnectWithMe />}
      </main>
    </div>
  );
}

export default App;
