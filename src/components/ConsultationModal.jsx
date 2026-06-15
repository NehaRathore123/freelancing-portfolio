import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, Check } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Website',
    budget: '$500 - $1,000',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'WordPress Website',
        budget: '$500 - $1,000',
        notes: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 4000);
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '550px' }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div className="service-icon" style={{ margin: 0, width: '40px', height: '40px' }}>
              <Calendar size={18} />
            </div>
            <span className="badge badge-accent">15-Min Free Intake</span>
          </div>

          <h3 className="modal-title" style={{ marginBottom: '8px' }}>Book a Free Consultation</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Let's discuss your project parameters, outline milestones, and find the perfect development approach to scale your digital presence.
          </p>

          {submitSuccess ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '30px 0', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '16px' 
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: '#10b981', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Check size={32} />
              </div>
              <h4 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>Consultation Requested!</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '380px' }}>
                Thank you! Neha will reach out to you within 1 business day to schedule a time slot.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="modal-name">Full Name</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  style={{ borderColor: errors.name ? '#ef4444' : '' }}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">Business Email</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@company.com"
                  style={{ borderColor: errors.email ? '#ef4444' : '' }}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label htmlFor="modal-projectType">Project Type</label>
                  <select
                    id="modal-projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--border-radius-sm)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '14px'
                    }}
                  >
                    <option value="WordPress Website">WordPress Website</option>
                    <option value="Elementor Landing Page">Elementor Landing Page</option>
                    <option value="WooCommerce E-Commerce">WooCommerce E-Commerce</option>
                    <option value="React Web App">React Web App</option>
                    <option value="Speed Optimization">Speed Optimization</option>
                    <option value="Other Project">Other / Custom Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-budget">Estimated Budget</label>
                  <select
                    id="modal-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--border-radius-sm)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      fontSize: '14px'
                    }}
                  >
                    <option value="Less than $500">Less than $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="More than $2,500">More than $2,500</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-notes">Brief Project Brief / Requirements</label>
                <textarea
                  id="modal-notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share any details, reference websites, or timeline constraints..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', gap: '10px', marginTop: '10px' }}
              >
                {isSubmitting ? 'Requesting booking...' : 'Submit Booking Request'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
