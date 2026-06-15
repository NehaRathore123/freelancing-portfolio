import React from 'react';
import { ArrowRight, Briefcase, Award, Star } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section section">
      <div className="section-bg-glow"></div>
      <div className="container hero-grid">
        {/* Left Side Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Available for Freelance Projects
          </div>
          <h1 className="hero-title">
            Hi, I'm <span>Neha Rathore</span> <br />
            Freelance Web Designer & <br />
            Frontend Developer
          </h1>
          <p className="hero-tagline">
            "Creating Modern, Responsive & User-Friendly Websites That Drive Results."
          </p>
          <div className="hero-btns">
            <button 
              className="btn btn-primary" 
              onClick={() => handleScrollTo('contact')}
            >
              Hire Me <ArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => handleScrollTo('portfolio')}
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hero-illustration">
          <div className="hero-glow-blob"></div>
          <div className="hero-circle-accent circle-1"></div>
          <div className="hero-circle-accent circle-2"></div>
          
          <div className="hero-avatar-card glass-card animate-float">
            <img 
              src="/neha_avatar.png" 
              alt="Neha Rathore - Web Designer & Frontend Developer"
              onError={(e) => {
                // fallback if image has issue loading
                e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
              }}
            />
          </div>

          {/* Floating Badges */}
          <div className="hero-floating-badge badge-experience glass-card">
            <div className="hero-floating-icon" style={{ color: 'var(--color-primary)' }}>
              <Briefcase size={20} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '800' }}>3+ Years</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Experience</div>
            </div>
          </div>

          <div className="hero-floating-badge badge-clients glass-card">
            <div className="hero-floating-icon" style={{ color: 'var(--color-accent)' }}>
              <Star size={20} fill="var(--color-accent)" />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '800' }}>100%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
