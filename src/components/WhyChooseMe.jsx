import React from 'react';
import { Smartphone, Zap, Search, Layout, Globe, Clock } from 'lucide-react';

export default function WhyChooseMe() {
  const benefits = [
    {
      title: 'Responsive & Mobile-First',
      desc: 'Flawless adapters. Your site will look stunning and read perfectly whether on a pocket smartphone or an ultra-wide screen.',
      icon: Smartphone
    },
    {
      title: 'Fast Page Load Speeds',
      desc: 'Speed matters for SEO and bounce rates. I compress assets, cache requests, and minimize script bloat for blazing quick load times.',
      icon: Zap
    },
    {
      title: 'SEO Optimized Development',
      desc: 'Semantics from scratch. I build clean HTML/JSX headings and schema-ready metadata setups that search engine crawlers favor.',
      icon: Search
    },
    {
      title: 'Clean & Modern UI/UX',
      desc: 'Tailored aesthetic. I avoid generic layouts, designing interfaces with custom glassmorphism, spacing, and micro-interactions.',
      icon: Layout
    },
    {
      title: 'International Experience',
      desc: 'Multi-lingual expert. Specializing in Arabic RTL (Right-to-Left), French, and German layouts with proper local text scaling.',
      icon: Globe
    },
    {
      title: 'Timely, Structured Delivery',
      desc: 'Dependable timelines. I structure milestones clearly, communicate updates frequently, and deliver projects on schedule.',
      icon: Clock
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Values</span>
          <h2 className="section-title">Why Choose Me</h2>
          <p className="section-desc">
            Combining design aesthetics with technical coding compliance to build websites that look amazing and achieve measurable business results.
          </p>
        </div>

        <div className="why-grid">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="why-card glass-card">
                <div className="why-icon">
                  <Icon size={22} />
                </div>
                <h3 className="why-title">{benefit.title}</h3>
                <p className="why-desc">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
