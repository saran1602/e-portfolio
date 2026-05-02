import React from 'react';
import { Shield, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <div className="nav-logo">
          <Shield className="logo-icon" size={28} />
          <span className="mono gradient-text logo-text">SARAN_E_M</span>
        </div>
        
        <div className="nav-links">
          <a href="#about" className="nav-link">// About</a>
          <a href="#certifications" className="nav-link">// Certifications</a>
          <a href="#security" className="nav-link">// Security</a>
          <a href="#projects" className="nav-link">// Projects</a>
          <a href="#skills" className="nav-link">// Skills</a>
        </div>
        
        <div className="mobile-menu">
          <Menu size={24} color="var(--accent-cyan)" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
