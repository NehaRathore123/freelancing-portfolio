import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onOpenConsultation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section tracking for active state
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          Neha Rathore<span className="logo-dot"></span>
        </a>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('portfolio'); }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contact
            </a>
          </li>
          {/* Mobile Only: Book Consultation CTA and Theme Toggle inside menu for convenience */}
          <li className="mobile-only" style={{ margin: '20px 0' }}>
            <button className="btn btn-primary" onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}>
              <Calendar size={16} /> Book Consultation
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn-icon-only"
            aria-label="Toggle light/dark theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Book Consultation Button */}
          <button className="btn btn-primary" onClick={onOpenConsultation}>
            <Calendar size={16} /> Book Consultation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
