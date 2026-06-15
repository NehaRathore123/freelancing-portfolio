import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: 'Palette Wealth Management',
      tech: 'WordPress',
      category: 'WordPress',
      image: '/palette_mockup.png',
      challenge: 'The client needed a highly professional wealth management portal with complex service grids. Pages were loading slowly due to excessive widgets, and strict financial brand guidelines required pixel-perfect structures.',
      solution: 'Designed custom Elementor layouts with minimal third-party plugin dependencies. Engineered optimized asset-delivery structures, compressed images, and refactored custom responsive CSS for charts and cards.',
      results: [
        'Improved mobile page load speed score by 42%.',
        'Created 12 custom responsive service landing pages.',
        'Boosted call-to-action click-through rates by 20% through structured navigation.'
      ],
      tags: ['WordPress', 'Elementor Pro', 'Custom CSS', 'Speed Optimization'],
      sector: 'Wealth Management & Finance'
    },
    {
      title: 'Govedge Business Portal',
      tech: 'WordPress (RTL Arabic)',
      category: 'WordPress',
      image: '/govedge_mockup.png',
      challenge: 'Developing a dual-language Arabic and English corporate platform. The right-to-left layout suffered from alignment issues, font scaling inconsistencies, and incorrect icon directions in Arabic mode.',
      solution: 'Developed custom RTL stylesheets that load dynamically based on page locale. Implemented WPML translation routing, localized typography configurations using custom weights, and mirrored icons.',
      results: [
        'Delivered 100% compliant RTL and LTR responsive design interfaces.',
        'Structured multilingual content pages for seamless translation syncing.',
        'Achieved flawless rendering across Safari, Chrome, and Firefox mobile browsers.'
      ],
      tags: ['WordPress', 'Elementor Pro', 'RTL Layouts', 'WPML Multilingual'],
      sector: 'Business Consultancy'
    },
    {
      title: 'Vellymeta Agency',
      tech: 'WordPress',
      category: 'WordPress',
      image: '/vellymeta_mockup.png',
      challenge: 'The client wanted a high-end, premium portfolio website showing glowing UI cards and smooth scroll triggers. The page loaded slowly and animations stuttered on lower-end devices.',
      solution: 'Hand-coded JavaScript and CSS scroll animations. Cached assets aggressively, setup CDN delivery, and stripped bloated script files to maximize performance.',
      results: [
        'Optimized performance to achieve a 95+ Google PageSpeed Insights score.',
        'Created a responsive, modern glassmorphic interface that loads in under 1.2 seconds.',
        'Enhanced visitor session duration by 35% using engaging micro-animations.'
      ],
      tags: ['WordPress', 'Elementor Pro', 'CSS Glassmorphism', 'Speed Auditing'],
      sector: 'Digital Agency & Creative Tech'
    },
    {
      title: 'Medisync Health Dashboard',
      tech: 'React.js / REST API',
      category: 'React & Frontend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      challenge: 'Building an interactive clinic reception dashboard that displays patient statistics in real-time. Data rendering was sluggish and the dashboard panels broke layout constraints on tablet views.',
      solution: 'Developed custom React hooks to manage local component state. Built a modular, responsive grid layout and optimized API payloads using lightweight JSON structures.',
      results: [
        'Reduced dashboard rendering time by 50% using memoized states and components.',
        'Ensured seamless responsiveness from mobile smartphones up to large 4K displays.',
        'Completed 15+ restful API hookups for real-time charting.'
      ],
      tags: ['React.js', 'Node.js', 'Express.js', 'REST API', 'CSS Grid Layouts'],
      sector: 'Healthcare Tech / MERN Stack'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section">
      <div className="section-bg-glow"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore case studies of websites I have designed, developed, and optimized, showcasing my expertise across WordPress and modern Frontend architectures.
          </p>
        </div>

        {/* Filters */}
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'WordPress' ? 'active' : ''}`}
            onClick={() => setFilter('WordPress')}
          >
            WordPress
          </button>
          <button 
            className={`filter-btn ${filter === 'React & Frontend' ? 'active' : ''}`}
            onClick={() => setFilter('React & Frontend')}
          >
            React & Frontend
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="badge badge-accent">{project.tech}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.challenge.substring(0, 110)}...</p>
                <button 
                  className="project-link-btn" 
                  onClick={() => setSelectedProject(project)}
                >
                  View Case Study <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
