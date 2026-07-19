import { useState, useEffect } from 'react';
import { ChevronRight, Download, Send, ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const professions = [
  'MERN Stack Developer',
  'Creative Media Lead',
  'AI Enthusiast',
  'Video Creator',

];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [profIdx, setProfIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = professions[profIdx];
    const speed = isDeleting ? 30 : 80;
    let t;
    if (!isDeleting && typedText === word) {
      t = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setProfIdx(p => (p + 1) % professions.length);
    } else {
      t = setTimeout(() => {
        setTypedText(isDeleting
          ? word.substring(0, typedText.length - 1)
          : word.substring(0, typedText.length + 1));
      }, speed);
    }
    return () => clearTimeout(t);
  }, [typedText, isDeleting, profIdx]);

  const scroll = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '110px 0 60px' }}>
      <div className="container" style={{ width: '100%' }}>
        {/* Mobile only label */}
        <div className="mobile-only-label" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          <span className="section-label" style={{ marginBottom: 0 }}>PORTFOLIO 2026 · KERALA, INDIA</span>
        </div>

        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '56px', alignItems: 'center' }}>

          {/* LEFT */}
          <div className="hero-text-col">
            {/* Label (Desktop) */}
            <div className="desktop-only-label" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <span className="section-label">PORTFOLIO 2026 · KERALA, INDIA</span>
            </div>

            {/* Role line */}
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-2)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
              MERN Stack Developer · Creative Media Lead
            </p>

            {/* Name */}
            <h1 className="display-title" style={{ marginBottom: '4px' }}>
              ADHNAN <span>CT</span>
            </h1>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '24px 0' }} />

            {/* Typewriter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: 3, height: 32, background: 'var(--gold)', borderRadius: 2, flexShrink: 0 }} />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--off-white)', fontWeight: 500 }}>
                {typedText}<span className="typing-cursor" />
              </p>
            </div>

           

            {/* CTAs */}
            <div className="hero-ctas" style={{ display: 'flex', flexWrap: 'nowrap', gap: '8px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '4px', scrollbarWidth: 'none' }}>
              <button onClick={() => scroll('projects')} className="btn btn-primary hero-btn">
                Projects <ChevronRight size={14} />
              </button>
              <a href="/resume.pdf" download="Adhnan_CT_Resume.pdf" className="btn btn-gold hero-btn" style={{ textDecoration: 'none' }}>
                CV <Download size={14} />
              </a>
              <button onClick={() => scroll('contact')} className="btn btn-outline hero-btn">
                Contact <Send size={14} />
              </button>
            </div>

            {/* Contact quick links */}
            <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {[
                { icon: Mail, label: 'adhnan.ct@gmail.com', href: 'mailto:adhnan.ct@gmail.com' },
                { icon: Github, label: 'adhnan-adz11', href: 'https://github.com/adhnan-adz11' },
                { icon: Linkedin, label: 'adhnan-ct', href: 'https://linkedin.com/in/adhnan-ct' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '7px',
                  color: 'var(--text-2)', textDecoration: 'none',
                  fontSize: '0.8rem', fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                >
                  <Icon size={13} /> {label}
                </a>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '36px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[['5+', 'Events Managed'], ['3+', 'Leadership Roles'], ['B.Tech', 'CS & Engg.']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--white)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — photo card */}
          <div className="slide-card hero-image-col" style={{
            height: '480px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top labels */}
            <div style={{ position: 'absolute', top: '14px', left: '18px', zIndex: 3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '3px' }}>MES COLLEGE OF ENGINEERING</span>
            </div>
            <div style={{ position: 'absolute', top: '14px', right: '18px', zIndex: 3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '3px' }}>KUTTIPPURAM · KERALA</span>
            </div>

            {/* Photo — half body, blended edges */}
            <img
              src="/adhnan.png"
              alt="Adhnan CT"
              className="hero-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'scale(1.22) translate(-45px, -60px)',
                position: 'absolute',
                top: 0, left: 0,
                zIndex: 1,
              }}
            />

            {/* Blend overlays — fade edges into card */}
            <div className="blend-bottom" style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to top, rgba(11,11,13,0.98) 0%, rgba(11,11,13,0.4) 40%, transparent 70%)' }} />
            <div className="blend-sides" style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to right, rgba(11,11,13,0.5) 0%, transparent 25%, transparent 75%, rgba(11,11,13,0.5) 100%)' }} />

            {/* Bottom info */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '20px 24px',
              zIndex: 3,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--white)', letterSpacing: '3px' }}>ADHNAN CT</div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 16px', borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(16px) saturate(140%)',
                WebkitBackdropFilter: 'blur(16px) saturate(140%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderTopColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'block', boxShadow: '0 0 6px var(--green)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--white)', fontWeight: 600, letterSpacing: '1px' }}>OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <button onClick={() => scroll('about')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
            color: 'var(--text-muted)',
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { 
          .hero-section { padding: 90px 0 40px !important; }
          .mobile-only-label { display: flex !important; }
          .desktop-only-label { display: none !important; }
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .hero-image-col {
            height: 400px !important;
            width: 100% !important;
            max-width: 400px;
            margin: 0 auto;
            /* Keep the original slide-card glass look */
          }
          .hero-img {
            /* Scale the photo so it sits nicely in the mobile card */
            transform: scale(1.2) translate(-20px, -15px) !important;
            object-position: top center !important;
          }
          /* Original blend overlays matching the card background */
          .blend-bottom {
            background: linear-gradient(to top, rgba(11,11,13,0.98) 0%, rgba(11,11,13,0.4) 40%, transparent 70%) !important;
          }
          .blend-sides {
            background: linear-gradient(to right, rgba(11,11,13,0.5) 0%, transparent 25%, transparent 75%, rgba(11,11,13,0.5) 100%) !important;
          }
        }
        @media (max-width: 480px) {
          .hero-image-col { height: 360px !important; }
          .hero-img { transform: scale(1.15) translate(-15px, -5px) !important; }
          .hero-ctas::-webkit-scrollbar { display: none; }
          .hero-btn { padding: 10px 14px !important; font-size: 0.8rem !important; gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}
