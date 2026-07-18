import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Videos', id: 'videos' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  // { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(s => obs.observe(s));

    // Also detect bottom-of-page to activate last nav item (Contact)
    const lastId = navItems[navItems.length - 1].id;
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 80;
      if (atBottom) setActive(lastId);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      sections.forEach(s => obs.unobserve(s));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: '16px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      width: '94%',
      maxWidth: '1080px',
    }}>
      {/* Glass pill */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '10px 22px' : '13px 26px',
        borderRadius: '50px',
        /* Glassmorphism core */
        background: scrolled
          ? 'rgba(14, 14, 16, 0.82)'
          : 'rgba(18, 18, 20, 0.45)',
        backdropFilter: 'blur(24px) saturate(160%)',
        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: scrolled
          ? '0 8px 32px rgba(0,0,0,0.40), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05)',
        transition: 'all 0.35s ease',
      }}>

        {/* Logo */}
        <a href="#home" onClick={e => scrollTo(e, 'home')} style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--orange)', letterSpacing: '2px' }}>A</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', color: 'var(--white)', letterSpacing: '2px' }}>CT</span>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: 'var(--gold)',
            marginLeft: '4px', display: 'inline-block', flexShrink: 0,
          }} />
        </a>

        {/* Desktop links */}
        <div className="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => scrollTo(e, item.id)}
              style={{
                position: 'relative',
                padding: '6px 13px',
                textDecoration: 'none',
                fontSize: '0.83rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                color: active === item.id ? '#fff' : 'rgba(216,210,206,0.7)',
                background: active === item.id
                  ? 'rgba(255,255,255,0.08)'
                  : 'transparent',
                borderRadius: '30px',
                border: active === item.id
                  ? '1px solid rgba(255,255,255,0.12)'
                  : '1px solid transparent',
                transition: 'all 0.2s ease',
                backdropFilter: active === item.id ? 'blur(8px)' : 'none',
              }}
              onMouseEnter={e => {
                if (active !== item.id) {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={e => {
                if (active !== item.id) {
                  e.currentTarget.style.color = 'rgba(216,210,206,0.7)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px',
            cursor: 'pointer',
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer — also glass */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          right: 0,
          background: 'rgba(14, 14, 16, 0.92)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '18px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        }}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => scrollTo(e, item.id)}
              style={{
                padding: '11px 16px',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                fontFamily: 'var(--font-body)',
                color: active === item.id ? '#fff' : 'rgba(216,210,206,0.75)',
                background: active === item.id ? 'rgba(255,255,255,0.08)' : 'transparent',
                borderLeft: active === item.id ? '2px solid var(--orange)' : '2px solid transparent',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
