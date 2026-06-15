import React from 'react';
import { Code, LayoutTemplate, Sparkles } from 'lucide-react';

export default function Skills() {
  const frontendSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'Bootstrap', level: 90 },
    { name: 'React.js', level: 85 },
  ];

  const cmsSkills = [
    { name: 'WordPress', level: 95 },
    { name: 'Elementor', level: 98 },
    { name: 'WooCommerce', level: 88 },
  ];

  const additionalSkills = [
    { name: 'Responsive Design', level: 98 },
    { name: 'SEO Optimization', level: 88 },
    { name: 'Mobile-First Development', level: 95 },
    { name: 'Website Performance Optimization', level: 90 },
    { name: 'RTL Website Development', level: 92 },
    { name: 'API Integration', level: 82 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Expertise</span>
          <h2 className="section-title">Technical Skills & Tools</h2>
          <p className="section-desc">
            A comprehensive overview of my capabilities in Frontend Development, Content Management Systems, and specialized web engineering methodologies.
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend Development */}
          <div className="skills-category glass-card">
            <div className="category-header">
              <Code size={24} />
              <h3 className="category-title">Frontend Development</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CMS & Builders */}
          <div className="skills-category glass-card">
            <div className="category-header">
              <LayoutTemplate size={24} />
              <h3 className="category-title">CMS & Website Builders</h3>
            </div>
            <div className="skills-list">
              {cmsSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="skills-category glass-card">
            <div className="category-header">
              <Sparkles size={24} />
              <h3 className="category-title">Additional Skills</h3>
            </div>
            <div className="skills-list">
              {additionalSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
