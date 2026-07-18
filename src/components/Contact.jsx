import { useState } from 'react';
import { Send, Github, Linkedin, Instagram, CheckCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [sendingState, setSendingState] = useState('idle'); // idle, sending, success
  
  // Real-time validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = {
    name: formData.name.trim().length < 2 ? 'Name must be at least 2 chars' : null,
    email: !emailRegex.test(formData.email) ? 'Enter a valid email node' : null,
    message: formData.message.trim().length < 10 ? 'Message must be at least 10 chars' : null,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Touch all fields to show validation errors if empty
    setTouched({ name: true, email: true, message: true });
    
    if (errors.name || errors.email || errors.message) {
      return;
    }

    setSendingState('sending');
    
    try {
      // Create payload for Web3Forms
      const payload = {
        access_key: '3d0002f7-895b-4c09-b619-2d69da6a7a41',
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Portfolio Message from ${formData.name}`,
        from_name: 'Portfolio Contact Form'
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSendingState('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setTimeout(() => setSendingState('idle'), 5000);
      } else {
        console.error('Web3Forms Error:', result);
        setSendingState('idle');
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSendingState('idle');
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">07 · GET IN TOUCH</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>
            Contact <span>Me</span>
          </h2>
          <p className="section-sub" style={{ margin: '14px auto 0', textAlign: 'center' }}>
            Feel free to reach out for collaborations, project discussions, or internship opportunities. I typically reply within 24 hours.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '40px',
            maxWidth: '950px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Panel: Contact Info */}
          <div
            className="slide-card"
            style={{
              padding: '40px',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#fff',
                  fontSize: '1.5rem',
                  marginBottom: '20px',
                  letterSpacing: '1px',
                }}
              >
                Get In Touch
              </h3>
              <p
                style={{
                  color: 'var(--text-primary)',
                  fontSize: '0.93rem',
                  lineHeight: 1.7,
                  marginBottom: '30px',
                }}
              >
                Whether it's a project collaboration, freelance work, event production, or just a conversation — my inbox is always open!
              </p>

              {/* Contact Details */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '36px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--teal-light)' }}>✉️</span>
                  <a href="mailto:adhnan.ct@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>adhnan.ct@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>📍</span>
                  <span>Kerala, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-green)' }}>🎓</span>
                  <span>MES College of Engineering, Kuttippuram</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--teal-light)' }}>💼</span>
                  <span>Available for Internships & Freelance</span>
                </div>
              </div>
            </div>

            {/* Social Circle Links */}
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                }}
              >
                {[
                  { icon: Github, link: 'https://github.com/adhnan-adz11', label: 'GitHub', color: 'var(--text-1)' },
                  { icon: Linkedin, link: 'https://www.linkedin.com/in/adhnan-ct', label: 'LinkedIn', color: 'var(--gold)' },
                  { icon: Instagram, link: 'https://www.instagram.com/_a__d__z_/', label: 'Instagram', color: 'var(--orange)' },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="social-btn"
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Contact Form */}
          <div
            className="slide-card"
            style={{
              padding: '40px',
              background: 'var(--bg-card)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Name field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '8px', fontWeight: 500 }}>
                  Sender Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('name')}
                  placeholder="Your Identifier"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    outline: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className={`form-input ${touched.name && errors.name ? 'invalid' : touched.name && !errors.name ? 'valid' : ''}`}
                />
                {touched.name && errors.name && (
                  <div style={{ color: 'var(--accent-red)', fontSize: '0.75rem', marginTop: '6px', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertTriangle size={12} /> {errors.name.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Email field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '8px', fontWeight: 500 }}>
                  Email Node Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="identifier@domain.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    outline: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className={`form-input ${touched.email && errors.email ? 'invalid' : touched.email && !errors.email ? 'valid' : ''}`}
                />
                {touched.email && errors.email && (
                  <div style={{ color: 'var(--accent-red)', fontSize: '0.75rem', marginTop: '6px', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertTriangle size={12} /> {errors.email.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Message field */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#fff', marginBottom: '8px', fontWeight: 500 }}>
                  Message Core
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('message')}
                  placeholder="Write your transmission contents here..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    outline: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    resize: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className={`form-input ${touched.message && errors.message ? 'invalid' : touched.message && !errors.message ? 'valid' : ''}`}
                />
                {touched.message && errors.message && (
                  <div style={{ color: 'var(--accent-red)', fontSize: '0.75rem', marginTop: '6px', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertTriangle size={12} /> {errors.message.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Submit Ticker Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={sendingState === 'sending' || sendingState === 'success'}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  background: sendingState === 'success' ? 'var(--accent-green)' : 'var(--teal-bright)',
                  boxShadow: sendingState === 'success' ? '0 0 15px rgba(78,241,88,0.3)' : '0 4px 15px rgba(26,122,154,0.4)',
                  color: sendingState === 'success' ? '#16171d' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: (sendingState === 'sending' || sendingState === 'success') ? 'not-allowed' : 'pointer',
                }}
              >
                {sendingState === 'idle' && (
                  <>
                    <Send size={18} /> Initiate Transmission
                  </>
                )}
                {sendingState === 'sending' && (
                  <>
                    <div className="spinner-loader" /> UPLOADING PACKET_01...
                  </>
                )}
                {sendingState === 'success' && (
                  <>
                    <CheckCircle size={18} /> TRANSMISSION SUCCESSFUL [200 OK]
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .form-input:focus {
          border-color: rgba(255,255,255,0.2) !important;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
        }
        .form-input.valid {
          border-color: var(--accent-green) !important;
          box-shadow: 0 0 12px rgba(78, 241, 88, 0.15) !important;
        }
        .form-input.invalid {
          border-color: var(--accent-red) !important;
          box-shadow: 0 0 12px rgba(143, 46, 29, 0.2) !important;
        }
        .social-btn:hover {
          color: #fff !important;
          border-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        .spinner-loader {
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin-loader-anim 1s infinite linear;
        }
        @keyframes spin-loader-anim {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
