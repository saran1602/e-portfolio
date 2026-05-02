import React from 'react';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      id: 1,
      provider: 'OpenLearn',
      date: 'May 2026',
      status: 'Completed',
      title: 'Network security',
      description: 'Completed an advanced 25-hour course discussing network security and the intricacies of maintaining system resilience.',
      skills: ['Network Security', 'System Resilience', 'Cyber Defense'],
      link: '/Network_sec_Statement.pdf'
    },
    {
      id: 2,
      provider: 'NPTEL',
      date: 'Pending',
      status: 'Exam Written - Awaiting Certificate',
      title: 'Cryptography and Network Security',
      description: 'Comprehensive certification covering advanced cryptographic protocols, network security models, encryption standards (AES, RSA), key management, and secure communication protocols.',
      skills: ['Cryptography', 'Network Security', 'Encryption', 'Authentication'],
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="cert-section">
      <div className="container">
        <h2 className="section-title mono"><span className="gradient-text">01.</span> Certifications</h2>
        
        <div className="cert-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {certs.map((cert, index) => (
            <div key={cert.id} className="cert-card glass-panel animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="cert-icon-container">
                <div className="hexagon">
                  {cert.status === 'Completed' ? <ShieldCheck size={40} className="cert-icon" /> : <Award size={40} className="cert-icon" style={{ opacity: 0.7 }} />}
                </div>
              </div>
              
              <div className="cert-content">
                <div className="cert-header">
                  <span className="cert-provider mono">{cert.provider}</span>
                  <span className="cert-date mono">{cert.status}</span>
                </div>
                
                <h3 className="cert-title">{cert.title}</h3>
                
                <p className="cert-description">
                  {cert.description}
                </p>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="cert-action">
                <a href={cert.link} target={cert.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="btn btn-primary btn-icon-only" title={cert.status === 'Completed' ? "View Credential" : "Link Pending"}>
                  <ExternalLink size={20} style={{ opacity: cert.link !== '#' ? 1 : 0.5 }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
