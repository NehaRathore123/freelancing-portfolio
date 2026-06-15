import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Web Designer & Frontend Developer',
      company: 'FODUU – Web Design Company India',
      location: 'India (Remote / Hybrid)',
      duration: 'November 2024 – Present',
      responsibilities: [
        'Designing and developing responsive, high-performance WordPress websites.',
        'Building complex multilingual websites (Arabic, French, German) for global markets.',
        'Creating semantic, pixel-perfect RTL layouts for Arabic business platforms.',
        'Customizing advanced WordPress themes, styles, and templates using Elementor Pro.',
        'Developing and refactoring custom frontend user interfaces using React.js, HTML, CSS, Bootstrap, and JavaScript.',
        'Auditing and improving core website performance metrics, load speeds, and user experiences.'
      ]
    },
    {
      role: 'MERN Stack Developer Intern',
      company: 'Ypsilon IT Solution Pvt. Ltd.',
      location: 'Indore, India',
      duration: 'September 2023 – March 2024',
      responsibilities: [
        'Developed, tested, and secured RESTful APIs using Node.js and Express.js.',
        'Designed database schemas and managed collections in MongoDB.',
        'Built interactive, reusable UI components using React.js and modern state management.',
        'Collaborated on full-stack web application development following Agile sprint models.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc">
            A history of my professional roles, contract engagements, and agency work in frontend development and web design.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-role">{exp.role}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    <span className="job-date">{exp.duration}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="job-responsibilities">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
