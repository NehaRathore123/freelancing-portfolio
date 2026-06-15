import React from 'react';
import { CheckCircle2, Globe, Languages, Zap, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Stat Graphics */}
          <div className="about-graphics">
            <div className="about-card glass-card">
              <div className="about-card-stat">
                <span className="stat-number">30<span>+</span></span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="about-card-stat">
                <span className="stat-number">3<span>+</span></span>
                <span className="stat-label">International Languages (inc. RTL)</span>
              </div>
              <div className="about-card-stat">
                <span className="stat-number">100<span>%</span></span>
                <span className="stat-label">On-time Delivery Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="about-content">
            <span className="section-subtitle">About Me</span>
            <h2 className="about-title">Translating Client Goals Into High-Performance Digital Solutions</h2>
            <p className="about-desc">
              I am a passionate Web Designer and Frontend Developer with experience in WordPress, Elementor, HTML, CSS, JavaScript, Bootstrap, React.js, and WooCommerce. 
            </p>
            <p className="about-desc" style={{ marginTop: '-15px', marginBottom: '30px' }}>
              I specialize in creating visually appealing, responsive, SEO-friendly websites that provide excellent user experiences. I have worked on complex multilingual websites including Arabic (RTL), French, and German projects for international clients, ensuring semantic compliance and pixel-perfect design across all markets.
            </p>

            <div className="about-features">
              <div className="about-feature-item">
                <Languages size={18} />
                <span>Multilingual & RTL (Arabic) Expertise</span>
              </div>
              <div className="about-feature-item">
                <Zap size={18} />
                <span>Speed & SEO Optimization</span>
              </div>
              <div className="about-feature-item">
                <Globe size={18} />
                <span>International Delivery Standards</span>
              </div>
              <div className="about-feature-item">
                <ShieldCheck size={18} />
                <span>Clean, Maintainable Codebases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
