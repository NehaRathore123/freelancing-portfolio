import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme;
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // WhatsApp helper redirect link
  const whatsappNumber = '917223055830'; 
  const whatsappMessage = encodeURIComponent('Hi Neha, I visited your portfolio and would like to discuss a web development project!');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {/* Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenConsultation={() => setIsConsultationOpen(true)} 
      />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Pricing onOpenConsultation={() => setIsConsultationOpen(true)} />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Neha Rathore. All rights reserved.
          </p>
          <p className="footer-text">
            Designed & Developed with <span className="footer-heart">❤</span> in React.js
          </p>
        </div>
      </footer>

      {/* Booking Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

      {/* Floating WhatsApp Action Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float animate-float"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.371a9.994 9.994 0 004.779 1.21h.005c5.505 0 9.989-4.478 9.99-9.983A9.99 9.99 0 0012.012 2zm5.835 14.288c-.241.68-.1.218-.621.844-.45.54-1.258.917-2.183.917-1.077 0-2.457-.597-4.437-2.578-1.98-1.98-2.578-3.36-2.578-4.437 0-.925.378-1.733.917-2.183.626-.522.164-.38.844-.621.135-.049.278-.061.385-.027.135.04.53.645.717 1.01.189.366.31.782.115 1.173-.095.19-.247.38-.4.55-.17.19-.36.33-.5.5-.16.2-.07.4.05.6.3.5.7 1 1.2 1.5.5.5 1 .9 1.5 1.2.2.12.4.21.6.05.17-.14.31-.33.5-.5.17-.153.36-.305.55-.4.39-.195.807-.074 1.173.115.365.187.97.582 1.01.717.034.107.022.25-.027.385z" />
        </svg>
      </a>
    </>
  );
}
