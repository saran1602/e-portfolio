import React from 'react';
import { ShieldAlert, Eye, Server, Database, GitMerge, ExternalLink, GitBranch } from 'lucide-react';
import './SecurityProjects.css';

const SecurityProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'ComplyGraph AI',
      subtitle: 'Cybersecurity Compliance Intelligence Platform',
      description: 'An advanced AI-powered system that automates mapping organizational security policies to the ISO/IEC 27001:2022 framework. Leverages NLP, Knowledge Graphs, and Explainable AI to analyze unstructured policy documents, identify alignment with ISO controls, and detect compliance gaps.',
      metrics: ['Reduces audit time from weeks to minutes', 'Automated Risk Scoring Engine', 'Dynamic Gap Detection'],
      tech: ['Python', 'FastAPI', 'Neo4j', 'Sentence Transformers', 'LLMs', 'React', 'D3.js'],
      icon: <GitMerge size={32} />,
      githubLink: '#',
      externalLink: '#'
    },
    {
      id: 2,
      title: 'Sentinel / GroomGuard',
      subtitle: 'AI-Powered Child Safety Ecosystem',
      description: 'A comprehensive cybersecurity application protecting children from online threats. Features real-time notification interception to detect predatory behavior, drug slang normalization using NLP, and deepfake/synthetic identity detection. Includes a parental dashboard and automated emergency Twilio alerts.',
      metrics: ['Real-time Threat Interception', 'Deepfake & Synthetic Media Detection', 'Contextual NLP Threat Analysis'],
      tech: ['React Native', 'Node.js', 'Python', 'Twilio', 'Gemini AI', 'NLP'],
      icon: <Eye size={32} />,
      githubLink: 'https://github.com/saran1602/sentinel',
      externalLink: '#'
    }
  ];

  return (
    <section id="security" className="sec-proj-section">
      <div className="container">
        <h2 className="section-title mono"><span className="gradient-text">02.</span> Core Security Projects</h2>
        
        <div className="sec-proj-grid">
          {projects.map((proj, index) => (
            <div key={proj.id} className="sec-proj-card glass-panel animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="sec-proj-header">
                <div className="sec-proj-icon">
                  {proj.icon}
                </div>
                <div className="sec-proj-links">
                  <a href={proj.githubLink} target={proj.githubLink !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" aria-label="GitHub"><GitBranch size={20} /></a>
                  <a href={proj.externalLink} target={proj.externalLink !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" aria-label="External Link"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div className="sec-proj-content">
                <h3 className="sec-proj-title">{proj.title}</h3>
                <h4 className="sec-proj-subtitle mono">{proj.subtitle}</h4>
                
                <div className="sec-proj-desc">
                  <p>{proj.description}</p>
                </div>
                
                <ul className="sec-proj-metrics">
                  {proj.metrics.map((metric, i) => (
                    <li key={i}><ShieldAlert size={14} className="metric-icon" /> {metric}</li>
                  ))}
                </ul>
              </div>
              
              <div className="sec-proj-tech">
                {proj.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityProjects;
