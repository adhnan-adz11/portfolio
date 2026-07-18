import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Wrench, Zap } from 'lucide-react';

const skillGroups = [
  {
    icon: Code2, label: 'Programming Languages', color: 'var(--teal)',
    items: [{ name: 'Python', level: 80 }, { name: 'JavaScript (ES6+)', level: 45 }, { name: 'C', level: 72 }],
  },
  {
    icon: Zap, label: 'Web Development', color: 'var(--gold)',
    items: [{ name: 'React.js', level: 85 }, { name: 'Node.js / Express.js', level: 80 }, { name: 'MongoDB', level: 75 }, { name: 'MERN Stack (Full)', level: 82 }],
  },
  {
    icon: Palette, label: 'Design & Creative Tools', color: 'var(--green)',
    items: [{ name: 'Figma', level: 78 }, { name: 'Adobe Illustrator', level: 75 }, { name: 'Adobe Premiere Pro', level: 80 }, { name: 'Photography & Videography', level: 87 }],
  },
  {
    icon: Wrench, label: 'Tools & Soft Skills', color: '#c084fc',
    items: [{ name: 'Git / GitHub', level: 85 }, { name: 'Social Media Management', level: 88 }, { name: 'Event Planning & Production', level: 90 }, { name: 'Team Leadership', level: 87 }],
  },
];

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-1)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: animated ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">02 · TECHNICAL SKILLS</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>Skills & <span>Tools</span></h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Hands-on across full-stack web development, creative media production, and team leadership.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="skills-grid">
          {skillGroups.map(({ icon: Icon, label, color, items }) => (
            <div key={label} className="slide-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '22px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-1)' }}>
                  <Icon size={17} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--white)', letterSpacing: '1px' }}>{label}</h3>
              </div>
              {items.map(({ name, level }) => <SkillBar key={name} name={name} level={level} />)}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Also Familiar With</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {['HTML5', 'CSS3', 'REST APIs', 'Postman', 'VS Code', 'Linux', 'JSON', 'npm', 'Tailwind CSS', 'AI Integration'].map(t => (
              <span key={t} className="tag-chip" style={{ fontSize: '0.76rem', padding: '4px 12px' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
