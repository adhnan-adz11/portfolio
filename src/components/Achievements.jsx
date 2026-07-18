import { Trophy, Star, Users, Calendar } from 'lucide-react';

const achievements = [
  {
    icon: Trophy, number: '01',
    title: 'ScaleUp Conclave 2026',
    subtitle: 'Core Team Member · Social Media Manager',
    org: 'ScaleUp Village', year: '2026', color: 'var(--gold)',
    description: 'Managed social media strategy, audience engagement, and content planning for the flagship entrepreneurship event. Also contributed to media operations, event coordination, and produced the official promotional video.',
    highlights: ['Social Media Strategy', 'Content Planning', 'Promo Video Production', 'Event Coordination'],
  },
  {
    icon: Star, number: '02',
    title: 'ScaleUp Conclave 2025',
    subtitle: 'Core Team Member',
    org: 'ScaleUp Village', year: '2025', color: 'var(--teal)',
    description: 'Contributed to overall event operations with a primary focus on media coverage and content creation for the flagship entrepreneurship event.',
    highlights: ['Media Coverage', 'Content Creation', 'Event Operations', 'Team Collaboration'],
  },
  {
    icon: Users, number: '03',
    title: 'Inspiria — Flagship Event',
    subtitle: 'Media Associate · IEDC MESCE',
    org: 'MES College of Engineering', year: '2024–25', color: '#c084fc',
    description: 'Led end-to-end production and media coverage for Inspiria, IEDC MESCE\'s flagship event — including documentation, photography, and videography.',
    highlights: ['Event Documentation', 'Photography', 'Videography', 'Production Planning'],
  },
  {
    icon: Calendar, number: '04',
    title: 'Frizbee — IEEE Event',
    subtitle: 'Worked for Media · IEEE MESCE',
    org: 'MES College of Engineering', year: '2025', color: 'var(--green)',
    description: 'Managed all media operations and content creation for Frizbee, the flagship IEEE event. Oversaw photography, videography, and promotional content.',
    highlights: ['Photography', 'Videography', 'Promotional Content', 'Media Operations'],
  },
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">06 · LEADERSHIP & KEY EVENTS</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>Achievements & <span>Events</span></h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Key contributions to major events and leadership initiatives across IEDC, NSS, MATRICS, and ScaleUp Conclave.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="achiev-grid">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="slide-card" style={{ padding: '28px', position: 'relative' }}>
                {/* Faint number */}
                <div style={{ position: 'absolute', top: '12px', right: '18px', fontFamily: 'var(--font-display)', fontSize: '3.5rem', color: a.color, opacity: 0.1, lineHeight: 1, userSelect: 'none' }}>{a.number}</div>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '9px', background: `${a.color}12`, border: `1px solid ${a.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: a.color, flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--white)', fontWeight: 700, fontSize: '0.97rem' }}>{a.title}</h3>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-2)', marginTop: '2px' }}>{a.subtitle}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '7px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-2)', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>{a.org}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-2)', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>{a.year}</span>
                </div>

                <p style={{ color: 'var(--text-2)', fontSize: '0.86rem', lineHeight: 1.62, marginBottom: '0' }}>{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .achiev-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
