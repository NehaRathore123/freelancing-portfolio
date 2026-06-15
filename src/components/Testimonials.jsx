import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Marketing Director, FinTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      content: 'Neha did an incredible job redesigning our wealth management platform. She took our complex service layouts and converted them into a fast, responsive, and beautiful experience. Our client inquiry rate went up by 25% within weeks of launching.'
    },
    {
      name: 'Tariq Al-Mansoor',
      role: 'Founder, Govedge Consulting (Dubai)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      content: 'We struggled for months to find a designer who could build a high-quality Arabic RTL layout without breaking our main English design. Neha resolved the translation routing and RTL CSS alignments perfectly. Highly recommended for international web projects!'
    },
    {
      name: 'Marc Tremblay',
      role: 'Product Manager, Vellymeta Creative',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      content: 'Working with Neha was a breeze. Her React and CSS skills are top-notch. She built our digital agency website with beautiful glassmorphism and smooth animations that perform flawlessly on mobile. She met every milestone ahead of schedule.'
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">Client Reviews</h2>
          <p className="section-desc">
            Read what agency partners, international clients, and project directors say about my development quality, responsive styling, and project management.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="testimonial-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" stroke="none" />
                ))}
              </div>
              <p className="testimonial-content">"{rev.content}"</p>
              <div className="testimonial-client">
                <div className="client-avatar">
                  <img src={rev.avatar} alt={rev.name} />
                </div>
                <div>
                  <h4 className="client-name">{rev.name}</h4>
                  <span className="client-role">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
