import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import SecurityProjects from './components/SecurityProjects';
import OtherProjects from './components/OtherProjects';
import Skills from './components/Skills';
import './index.css';

function App() {
  // Add a simple intersection observer for fade-up animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.glass-panel:not(.navbar)');
    elements.forEach(el => {
      if (!el.classList.contains('animate-fade-up')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <SecurityProjects />
        <OtherProjects />
        <Skills />
      </main>
      
      <footer style={{
        textAlign: 'center', 
        padding: '2rem', 
        color: 'var(--text-muted)',
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.85rem',
        marginTop: '4rem',
        borderTop: '1px solid var(--glass-border)'
      }}>
        <p>Built with React & Vite.</p>
        <p>Secured by SARAN E M &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
