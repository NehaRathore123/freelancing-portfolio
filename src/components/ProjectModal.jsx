import React, { useEffect } from 'react';
import { X, Check, Award, Zap, ShieldAlert } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <span className="badge badge-accent" style={{ marginBottom: '12px' }}>
            {project.category}
          </span>
          <h3 className="modal-title">{project.title}</h3>
          
          <div className="case-study-meta">
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <strong>Client Sector:</strong> {project.sector || 'Commercial'}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <strong>Platform:</strong> {project.tech}
            </span>
          </div>

          <div style={{ borderRadius: 'var(--border-radius-md)', overflow: 'hidden', marginBottom: '24px', maxHeight: '300px', background: 'var(--bg-tertiary)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Challenge Section */}
          <div className="case-study-section">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={16} /> The Challenge
            </h4>
            <p>{project.challenge}</p>
          </div>

          {/* Solution Section */}
          <div className="case-study-section">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={16} /> My Solution
            </h4>
            <p>{project.solution}</p>
          </div>

          {/* Results Section */}
          <div className="case-study-section">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} /> Key Achievements & Results
            </h4>
            <ul>
              {project.results.map((result, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <Check size={14} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: '700', width: '100%', marginBottom: '4px', color: 'var(--text-primary)' }}>
              Tech Stack Used:
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
