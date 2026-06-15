import React from 'react';
import { Check, X, Sparkles, Send } from 'lucide-react';

export default function Pricing({ onOpenConsultation }) {
  const packages = [
    {
      name: 'Starter Package',
      price: '$299',
      duration: '3-5 Days Delivery',
      desc: 'Perfect for startups and professionals looking for a modern, high-converting single-page landing page.',
      popular: false,
      features: [
        { text: '1 Custom Landing Page Design', enabled: true },
        { text: 'Elementor / Custom CSS Setup', enabled: true },
        { text: '100% Responsive Design', enabled: true },
        { text: 'Basic SEO Setup (Meta Tags)', enabled: true },
        { text: 'WhatsApp Chat Integration', enabled: true },
        { text: 'Contact Form Integration', enabled: true },
        { text: 'Multilingual / Arabic RTL Setup', enabled: false },
        { text: 'WooCommerce Store Setup', enabled: false },
        { text: '30 Days Post-Launch Support', enabled: false }
      ]
    },
    {
      name: 'Professional Business',
      price: '$599',
      duration: '7-10 Days Delivery',
      desc: 'Great for growing businesses needing a professional multi-page website with advanced styling and features.',
      popular: true,
      features: [
        { text: 'Up to 5 Custom Developed Pages', enabled: true },
        { text: 'Elementor Pro / React Frontend', enabled: true },
        { text: '100% Responsive Design', enabled: true },
        { text: 'Advanced SEO & Schema Markup', enabled: true },
        { text: 'WhatsApp & Social Integration', enabled: true },
        { text: 'Interactive Inquiry Forms', enabled: true },
        { text: 'Multilingual Support (LTR & RTL)', enabled: true },
        { text: 'WooCommerce Store Setup', enabled: false },
        { text: '30 Days Post-Launch Support', enabled: false }
      ]
    },
    {
      name: 'Scale & E-Commerce',
      price: '$999',
      duration: '14-21 Days Delivery',
      desc: 'Ultimate package for full e-commerce stores, WooCommerce setups, or custom React.js web applications.',
      popular: false,
      features: [
        { text: 'Unlimited Pages / Custom React.js app', enabled: true },
        { text: 'WooCommerce / Store Development', enabled: true },
        { text: 'Payment Gateway Integration', enabled: true },
        { text: 'Advanced Multi-Language (Arabic RTL)', enabled: true },
        { text: 'Speed Audit & CDN Optimizations', enabled: true },
        { text: 'Third-Party API Integrations', enabled: true },
        { text: 'Advanced Form Validations', enabled: true },
        { text: 'Admin Product Dashboards', enabled: true },
        { text: '30 Days Post-Launch Support', enabled: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Fair & Transparent</span>
          <h2 className="section-title">Pricing Packages</h2>
          <p className="section-desc">
            Choose a package that fits your project scope, or book a consultation to request a fully custom quote tailored to your business needs.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`pricing-card glass-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && (
                <div className="pricing-popular-badge">
                  <Sparkles size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  Most Popular
                </div>
              )}
              <div className="pricing-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <div className="pricing-price">
                  {pkg.price}
                  <span>/ project</span>
                </div>
                <div className="job-date" style={{ display: 'inline-block', marginTop: '12px' }}>
                  {pkg.duration}
                </div>
                <p className="pricing-desc">{pkg.desc}</p>
              </div>

              <div className="pricing-features">
                {pkg.features.map((feat, fIdx) => (
                  <div 
                    key={fIdx} 
                    className={`pricing-feature-item ${feat.enabled ? '' : 'disabled'}`}
                  >
                    {feat.enabled ? <Check size={16} /> : <X size={16} />}
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`btn pricing-btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                onClick={onOpenConsultation}
              >
                Inquire Package <Send size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
