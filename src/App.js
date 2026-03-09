import React from 'react';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Internship from './components/Internship';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Internship />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} Phani Kumar Bathina.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
