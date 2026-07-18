import { ArrowRight, Calendar } from 'lucide-react';

const experiences = [
  {
    org: 'IEDC MESCE',
    orgFull: 'Innovation & Entrepreneurship Development Cell',
    color: 'var(--teal)',
    logo: '/logos/iedc.png',
    roles: [
      {
        title: 'Chief Production Officer', period: 'March 2026 – Present', badge: 'Current',
        bullets: [
          'Lead the production team within IEDC MESCE\'s core committee, overseeing media and production planning for innovation and entrepreneurship initiatives.',
          'Designed structured, multi-category interview frameworks for IEDC support team recruitment, evaluating candidates on motivation, initiative, teamwork, operational thinking, and self-awareness.',
        ],
      },
      {
        title: 'Assistant Production Officer', period: 'July 2025 – June 2026',
        bullets: [
          'Assisted in planning and executing production and media coverage for IEDC events, including the flagship event Inspiria.',
          'Collaborated with the media and production team to deliver event documentation, photography, and videography.',
        ],
      },
      {
        title: 'Media Associate', period: 'August 2024 – March 2025',
        bullets: ['Contributed to media production and content creation for IEDC events as part of the media team.'],
      },
    ],
  },
  {
    org: 'NSS, MESCE',
    orgFull: 'National Service Scheme – MES College of Engineering',
    color: 'var(--gold)',
    logo: '/logos/nss.png',
    roles: [
      {
        title: 'Head of Media', period: 'July 2025 – Present', badge: 'Current',
        bullets: [
          'Lead media strategy and content creation for NSS unit activities, documenting community service initiatives and volunteer-driven programs.',
          'Designed a two-tiered interview framework for the Volunteer Secretary selection process, covering motivation, leadership, ethical dilemmas, and crisis-response scenarios.',
        ],
      },
    ],
  },
  {
    org: 'MATRICS – MESCE',
    orgFull: 'MES Association for Technical Research in Computer Science',
    color: '#c084fc',
    logo: '/logos/matrics.png',
    roles: [
      {
        title: 'Head of Media', period: 'June 2025 – Present', badge: 'Current',
        bullets: [
          'Lead media operations and content creation, including coverage of the flagship event Frizbee.',
          'Manage photography, videography, and promotional content for unit-level events.',
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">05 · PROFESSIONAL EXPERIENCE</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>Work <span>Experience</span></h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Media leadership, event production, and content creation across multiple organizations at MES College of Engineering.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map(exp => (
            <div key={exp.org} className="slide-card" style={{ overflow: 'hidden' }}>
              {/* Org header */}
              <div style={{ padding: '24px 28px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(0,0,0,0.1)' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <img src={exp.logo} alt={exp.org} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--white)', letterSpacing: '1px', lineHeight: 1 }}>{exp.org}</h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: exp.color, marginTop: '3px', letterSpacing: '0.5px', opacity: 0.75 }}>{exp.orgFull}</p>
                </div>
              </div>

              {/* Roles */}
              <div style={{ padding: '0 28px 24px' }}>
                {exp.roles.map((r, ri) => (
                  <div key={ri} style={{ borderLeft: `2px solid ${ri === 0 ? exp.color : 'rgba(255,255,255,0.08)'}`, paddingLeft: '18px', marginTop: '22px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', flexWrap: 'wrap', marginBottom: '5px' }}>
                      <h4 style={{ color: 'var(--off-white)', fontWeight: 600, fontSize: '0.92rem' }}>{r.title}</h4>
                      {r.badge && (
                        <span style={{ 
                          fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--white)', 
                          padding: '3px 10px', borderRadius: '20px', 
                          background: 'rgba(255, 255, 255, 0.04)', 
                          backdropFilter: 'blur(12px) saturate(140%)', WebkitBackdropFilter: 'blur(12px) saturate(140%)', 
                          border: '1px solid rgba(255, 255, 255, 0.12)', borderTopColor: 'rgba(255, 255, 255, 0.25)', 
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                          letterSpacing: '0.5px', fontWeight: 600
                        }}>{r.badge}</span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                      <Calendar size={11} />{r.period}
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {r.bullets.map((b, bi) => (
                        <li key={bi} style={{ display: 'flex', gap: '9px', color: 'var(--text-2)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                          <ArrowRight size={13} style={{ color: exp.color, flexShrink: 0, marginTop: '4px' }} />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
