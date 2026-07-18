import { useState, useEffect, useRef } from 'react';
import { BookOpen, Briefcase, MapPin } from 'lucide-react';

function Counter({ target, suffix = '', from = 0, duration = 1200 }) {
  const [count, setCount] = useState(from);
  const [fired, setFired] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !fired) { setFired(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    const end = parseInt(target, 10);
    const start = parseInt(from, 10) || 0;
    const range = end - start;
    if (!range) return;
    const step = Math.max(Math.floor(duration / range), 16);
    let cur = start;
    const t = setInterval(() => { cur++; setCount(cur); if (cur >= end) { clearInterval(t); } }, step);
    return () => clearInterval(t);
  }, [fired, target, from, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: '5', suffix: '+', label: 'Events Managed' },
  { value: '3', suffix: '+', label: 'Leadership Roles' },
  { value: '50', suffix: '+', label: 'Media Productions' },
  { value: '2027', suffix: '', label: 'Grad. Year', from: 2023 },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">01 · INTRODUCTION</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>About <span>Me</span></h2>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '56px' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="slide-card" style={{ padding: '24px 18px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: i % 2 === 0 ? 'var(--gold)' : 'var(--teal)', lineHeight: 1, marginBottom: '6px' }}>
                <Counter target={s.value} suffix={s.suffix} from={s.from || 0} />
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '28px', alignItems: 'start' }} className="about-grid">

          {/* Bio */}
          <div className="slide-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-1)' }}>
                <Briefcase size={17} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', letterSpacing: '1px' }}>Professional Summary</h3>
            </div>

            <p style={{ color: 'var(--text-1)', lineHeight: 1.75, fontSize: '0.93rem', marginBottom: '18px' }}>
              Computer Science and Engineering student passionate about software development, AI, and full-stack web development. Proficient in the <strong style={{ color: 'var(--teal)' }}>MERN Stack</strong>, Python, C, and problem-solving.
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.75, fontSize: '0.88rem', marginBottom: '24px' }}>
              Brings strong leadership, teamwork, and creative media skills developed through organizing technical events, managing social media initiatives, and leading production teams across multiple organizations.
            </p>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '18px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--teal)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Core Strengths</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {['Problem-Solving', 'Event Planning', 'Photography & Videography', 'Social Media Management', 'Team Leadership', 'MERN Stack', 'AI Development'].map(s => (
                  <span key={s} className="tag-chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Education */}
            <div className="slide-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-1)' }}>
                  <BookOpen size={17} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--white)', letterSpacing: '1px' }}>Education</h3>
              </div>
              <div style={{ paddingLeft: '12px', borderLeft: '2px solid var(--teal)' }}>
                <p style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.93rem', marginBottom: '4px' }}>Bachelor of Technology</p>
                <p style={{ color: 'var(--teal)', fontSize: '0.86rem', marginBottom: '4px' }}>Computer Science & Engineering</p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.83rem', marginBottom: '8px' }}>MES College of Engineering, Kuttippuram</p>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--gold)', padding: '3px 9px', borderRadius: '4px', background: 'rgba(240,180,41,0.08)', border: '1px solid rgba(240,180,41,0.18)' }}>Expected April 2027</span>
              </div>
            </div>

            {/* Location */}
            <div className="slide-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: 34, height: 34, borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-1)' }}>
                  <MapPin size={17} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--white)', letterSpacing: '1px' }}>Contact</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[['📍', 'Kerala, India'], ['✉️', 'adhnan.ct@gmail.com'], ['🔗', 'linkedin.com/in/adhnan-ct'], ['💻', 'github.com/adhnan-adz11']].map(([icon, val]) => (
                  <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'var(--text-2)', fontSize: '0.83rem', fontFamily: 'var(--font-mono)' }}>
                    <span>{icon}</span><span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Roles */}
            <div className="slide-card" style={{ padding: '24px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--teal)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>Active Roles</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { role: 'Chief Production Officer', org: 'IEDC MESCE' },
                  { role: 'Head of Media', org: 'NSS, MESCE' },
                  { role: 'Head of Media', org: 'MATRICS – MESCE' },
                ].map(({ role, org }) => (
                  <div key={org} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-1)', fontSize: '0.82rem' }}>{role}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', color: 'var(--text-2)', padding: '2px 7px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.07)' }}>{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; } .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
