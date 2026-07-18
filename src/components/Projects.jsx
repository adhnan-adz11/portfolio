import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Job Finder Platform',
    badge: 'MINI PROJECT',
    description: 'College mini project — an AI-powered job finder platform that matches candidates with relevant opportunities using intelligent filtering and recommendation algorithms.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'AI', 'Express'],
    github: 'https://github.com/adhnan-adz11/jobFinder.git',
    color: 'var(--orange)',
  },
  {
    id: 2,
    title: 'Kids Shopping Online',
    badge: 'E-COMMERCE',
    description: 'A full-stack e-commerce platform designed for kids\' clothing and accessories, featuring a user-friendly shopping experience with cart management and secure checkout.',
    tags: ['MERN Stack', 'REST API', 'MongoDB', 'CSS'],
    github: 'https://github.com/adhnan-adz11/kids-shopping.git',
    color: 'var(--gold)',
  },
  {
    id: 3,
    title: 'Home Manager',
    badge: 'UTILITY WEBAPP',
    description: 'A household management application for organizing daily tasks, expenses, and home inventory — helping families stay on top of their routines efficiently.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/adhnan-adz11/Home-Manager.git',
    color: 'var(--green)',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">03 · SELECTED WORK</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>My <span>Projects</span></h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Full-stack web applications built with the MERN stack, spanning e-commerce, AI, and utility tools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }} className="proj-grid">
          {projects.map((p) => (
            <div key={p.id} className="slide-card" style={{
              display: 'flex', flexDirection: 'column', height: '100%',
            }}>
              {/* Top header area */}
              <div style={{
                padding: '28px 28px 18px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
              }}>
                {/* Faint number */}
                <div style={{
                  position: 'absolute', top: '12px', right: '18px',
                  fontFamily: 'var(--font-display)', fontSize: '3.5rem',
                  color: 'var(--white)', opacity: 0.05, lineHeight: 1, userSelect: 'none',
                }}>0{p.id}</div>

                {/* Badge */}
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                  color: 'var(--text-2)', padding: '3px 9px', borderRadius: '4px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  letterSpacing: '1px', marginBottom: '12px', display: 'inline-block',
                }}>{p.badge}</span>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                  color: 'var(--white)', letterSpacing: '1px', marginTop: '8px',
                }}>{p.title}</h3>
              </div>

              {/* Body */}
              <div style={{ padding: '22px 28px 28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{
                  color: 'var(--text-2)', fontSize: '0.88rem',
                  lineHeight: 1.65, marginBottom: '20px', flexGrow: 1,
                }}>{p.description}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '22px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>

                {/* GitHub — centered */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{
                      padding: '10px 28px', fontSize: '0.84rem',
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                    }}
                  >
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
