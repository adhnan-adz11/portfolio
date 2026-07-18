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
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '110px 0 60px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '56px', alignItems: 'center' }} className="hero-grid">

          {/* LEFT */}
          <div>
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
              <button onClick={() => scroll('projects')} className="btn btn-primary">
                View Projects <ChevronRight size={15} />
              </button>
              <a href="/resume.pdf" download="Adhnan_CT_Resume.pdf" className="btn btn-gold" style={{ textDecoration: 'none' }}>
                Download CV <Download size={15} />
              </a>
              <button onClick={() => scroll('contact')} className="btn btn-outline">
                Contact <Send size={15} />
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
          <div className="slide-card" style={{
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
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to top, rgba(11,11,13,0.98) 0%, rgba(11,11,13,0.4) 40%, transparent 70%)' }} />
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to right, rgba(11,11,13,0.5) 0%, transparent 25%, transparent 75%, rgba(11,11,13,0.5) 100%)' }} />

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
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
