import React from 'react';
import { 
  Globe, 
  Layout, 
  Sparkles, 
  Smartphone, 
  Code, 
  ShoppingCart, 
  Search, 
  FileCheck2 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'WordPress Website Development',
      desc: 'End-to-end custom site setups using industry best practices for structure, security, and editing flexibility.',
      icon: Globe
    },
    {
      title: 'Elementor Website Design',
      desc: 'Pixel-perfect pages tailored to your brand, constructed cleanly using Elementor Pro for easy future edits.',
      icon: Layout
    },
    {
      title: 'Landing Page Design',
      desc: 'High-converting single pages optimized for specific campaigns, lead capture, and immediate user actions.',
      icon: FileCheck2
    },
    {
      title: 'Website Redesign',
      desc: 'Modernizing outdated interfaces to improve accessibility, responsive alignment, branding, and sales metrics.',
      icon: Sparkles
    },
    {
      title: 'Responsive Website Development',
      desc: 'Ensuring your site renders beautifully and functions flawlessly across mobile, tablet, laptop, and ultra-wide screens.',
      icon: Smartphone
    },
    {
      title: 'Frontend Development',
      desc: 'Translating Figma designs into responsive, clean React, HTML, CSS, JavaScript, and Bootstrap architectures.',
      icon: Code
    },
    {
      title: 'WooCommerce Store Development',
      desc: 'Secure e-commerce stores equipped with payment processing, stock tracking, and user-friendly product dashboards.',
      icon: ShoppingCart
    },
    {
      title: 'SEO-Friendly Website Design',
      desc: 'Optimizing sites with proper heading tags, semantic elements, fast speeds, and schema readiness for high search indexing.',
      icon: Search
    }
  ];

  return (
    <section id="services" className="section">
      <div className="section-bg-glow"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-desc">
            Helping startups, agencies, and international businesses build highly effective, responsive, and aesthetically pleasing web assets.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="service-card glass-card">
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
