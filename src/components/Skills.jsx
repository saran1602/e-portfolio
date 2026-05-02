import React from 'react';
import { Terminal, Database, Code, Shield } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['JavaScript', 'Python', 'C++', 'C']
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal size={24} />,
      skills: ['PostgreSQL', 'MongoDB', 'Git & GitHub', 'REST API', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database size={24} />,
      skills: ['React.js', 'Express.js', 'Spring Boot', 'Flask', 'Bootstrap', 'Streamlit']
    },
    {
      title: 'Core Fundamentals',
      icon: <Shield size={24} />,
      skills: ['Data Structures & Algorithms (C++)', 'MERN Stack', 'Cybersecurity Basics', 'Network Security']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title mono"><span className="gradient-text">04.</span> Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel animate-fade-up" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="skill-cat-header">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-cat-title">{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet mono">{`>`}</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
