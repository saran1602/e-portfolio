import React from 'react';
import { Folder, ExternalLink, GitBranch } from 'lucide-react';
import './OtherProjects.css';

const OtherProjects = () => {
  const projects = [
    {
      title: 'CareFlowAI',
      description: 'A MERN healthcare platform with doctor/patient dashboards, appointments, and PDF prescriptions. Features a Digital Medical Locker with OCR extraction and a Random Forest risk prediction model using biomarkers.',
      tech: ['MERN Stack', 'Random Forest', 'OCR', 'Machine Learning'],
      link: 'https://github.com/saran1602/caresphereFinal.git',
      github: 'https://github.com/saran1602'
    },
    {
      title: 'SkillMapAI',
      description: 'An AI-powered career intelligence platform for resume parsing, skill gap analysis, and personalized learning roadmaps. Integrates an LLM-based interview simulator and real-time GitHub/LeetCode analytics.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'NLP', 'LLM'],
      link: 'https://github.com/saran1602',
      github: 'https://github.com/saran1602'
    },
    {
      title: 'CivicTrack',
      description: 'A Smart Public Complaint Lifecycle System to manage citizen complaints. Features a layered Spring Boot backend with workflow state transitions, JWT authentication, role-based dashboards, and SLA escalation schedulers.',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'JWT'],
      link: 'https://github.com/saran1602',
      github: 'https://github.com/saran1602'
    }
  ];

  return (
    <section id="projects" className="other-proj-section">
      <div className="container">
        <h2 className="section-title mono"><span className="gradient-text">03.</span> Additional Projects</h2>
        
        <div className="other-proj-grid">
          {projects.map((proj, index) => (
            <div key={index} className="other-proj-card glass-panel animate-fade-up" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="other-proj-header">
                <Folder size={36} className="folder-icon" />
                <div className="other-proj-links">
                  <a href={proj.github} aria-label="GitHub"><GitBranch size={20} /></a>
                  <a href={proj.link} aria-label="External Link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="other-proj-title">{proj.title}</h3>
              <div className="other-proj-desc">
                <p>{proj.description}</p>
              </div>
              
              <ul className="other-proj-tech">
                {proj.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
