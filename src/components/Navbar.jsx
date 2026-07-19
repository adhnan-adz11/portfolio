import { useState, useEffect } from 'react';
import { Home, User, Code, FolderGit2, Youtube, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'About', id: 'about', icon: User },
  { label: 'Skills', id: 'skills', icon: Code },
  { label: 'Projects', id: 'projects', icon: FolderGit2 },
  { label: 'Videos', id: 'videos', icon: Youtube },
  { label: 'Experience', id: 'experience', icon: Briefcase },
  { label: 'Achievements', id: 'achievements', icon: Award },
  // { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar-container" style={{
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
        <a href="#home" className="logo-link" onClick={e => scrollTo(e, 'home')} style={{
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

        {/* Mobile links (Icons only) */}
        <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '14px', overflowX: 'auto', padding: '4px 8px' }}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === navItems.length - 1;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => scrollTo(e, item.id)}
                style={{
                  color: active === item.id ? '#fff' : 'rgba(216,210,206,0.6)',
                  padding: '8px',
                  background: active === item.id ? 'var(--orange)' : 'transparent',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  boxShadow: active === item.id ? '0 4px 12px rgba(235,94,40,0.3)' : 'none',
                  marginRight: isLast ? '16px' : '0', // Extra margin so it's not squashed against the right edge
                }}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Hide scrollbar for horizontal mobile nav */
        .mobile-nav::-webkit-scrollbar { display: none; }
        .mobile-nav { -ms-overflow-style: none; scrollbar-width: none; }

        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .logo-link { display: none !important; } /* Hide logo to make room for icons */
          .mobile-nav { display: flex !important; width: 100%; justify-content: flex-start; }
          
          /* Move the main navbar to bottom like a floating footer */
          .navbar-container {
            top: auto !important;
            bottom: 24px !important;
          }
          /* Adjust pill padding for icons */
          .navbar-container > div {
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </nav>
  );
}
