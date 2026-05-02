import React from 'react';
import { Terminal, Lock, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container grid grid-cols-2 align-center">
        <div className="hero-content animate-fade-up">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span className="mono status-text">SYSTEM_ONLINE :: IT_STUDENT</span>
          </div>
          
          <h1 className="hero-title">
            <span className="text-light">Hi, I'm</span> <br />
            <span className="gradient-text">SARAN E M</span>
          </h1>
          
          <h2 className="hero-subtitle">
            B.Tech Information Technology @ SRM IST
          </h2>
          
          <p className="hero-description">
            Passionate about Cybersecurity, Artificial Intelligence, and Full-Stack Development. 
            Building intelligent platforms to secure networks and optimize complex workflows.
          </p>
          
          <div className="hero-cta">
            <a href="#security" className="btn btn-primary">
              <Lock size={18} />
              <span>View Security Projects</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline">
              <Terminal size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-up" style={{animationDelay: '0.2s'}}>
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <div className="terminal-title mono">saran@root:~</div>
            </div>
            <div className="terminal-body mono">
              <p><span className="prompt">$</span> whoami</p>
              <p className="output">SARAN E M | B.Tech IT '27</p>
              
              <p><span className="prompt">$</span> cat skills.txt | grep "Security"</p>
              <p className="output highlight">Cybersecurity, Intrusion Detection, Cryptography</p>
              
              <p><span className="prompt">$</span> ./run_portfolio.sh</p>
              <p className="output loading">Initializing Secure Environment<span className="blink">...</span></p>
              <p className="output success">ACCESS GRANTED</p>
            </div>
          </div>
          
          <div className="floating-badge badge-1 glass-panel">
            <Lock size={20} color="var(--accent-cyan)" />
            <span>Encrypted</span>
          </div>
          <div className="floating-badge badge-2 glass-panel">
            <Shield size={20} color="var(--accent-purple)" />
            <span>Secured</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Assuming Shield is imported above but we used it here, let's import it properly
import { Shield } from 'lucide-react';

export default Hero;
