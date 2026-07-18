import { Instagram, ExternalLink, Youtube } from 'lucide-react';

const videosData = [
  {
    id: 1,
    title: 'MESTech Event Promo',
    description: 'Promotional video created for the MES Tech event — showcasing the energy and innovation of the college tech fest.',
    event: 'MES TECH',
    link: 'https://www.instagram.com/reel/DUccrJ_idHL/?igsh=dWp3am1uNmpocGMy',
    color: 'var(--orange)',
    thumb: '/thumbs/reel1.jpg',
  },
  {
    id: 2,
    title: 'Aventron 30hr Hackathon Promo',
    description: 'Promo video for the Aventron 30-hour hackathon, organized by MATRICS MESCE — capturing the spirit of intense coding and creativity.',
    event: 'MATRICS MESCE',
    link: 'https://www.instagram.com/reel/DRq7AEBCaRw/?igsh=MTE5djB6OWFrbXppZg==',
    color: 'var(--gold)',
    thumb: '/thumbs/reel2.jpg',
  },
  {
    id: 3,
    title: 'MES Tech Pre-Event Promo',
    description: 'A cinematic pre-event promotional video building anticipation for the MES Tech fest.',
    event: 'MES TECH',
    link: 'https://www.instagram.com/reel/DUf2w4eCUTP/?igsh=MTB6c3FkZmNhOTVmYw==',
    color: 'var(--green)',
    thumb: '/thumbs/reel3.jpg',
  },
  {
    id: 4,
    title: 'ScaleUp Conclave 2026 — Announcement',
    description: 'Promo video announcing that ScaleUp Conclave 2026 is officially on — setting the stage for the flagship event.',
    event: 'SCALEUP CONCLAVE',
    link: 'https://www.instagram.com/reel/DVi7BfkgeTw/?igsh=b2tjY3VybDd3dmxx',
    color: 'var(--orange)',
    thumb: '/thumbs/reel4.jpg',
  },
  {
    id: 5,
    title: 'ScaleUp Conclave 2026-Course introduction video I ',
    description: 'Course introduction — walking you through what is included in the course and how to access all the learning resources.',
    event: 'SCALEUP CONCLAVE',
    link: 'https://www.instagram.com/reel/DV31BHpgcDG/?igsh=MWkzc2dvYjFwdXdjZg==',
    color: 'var(--gold)',
    thumb: '/thumbs/reel5.jpg',
  },
  {
    id: 6,
    title: 'ScaleUp Conclave 2026 — Course introduction video II',
    description: 'Course walkthrough — covering the course structure, available resources, and how to get started.',
    event: 'SCALEUP CONCLAVE',
    link: 'https://www.instagram.com/reel/DV8Zfp0AQFD/?igsh=cGVrdWxkbzhvOGcz',
    color: 'var(--green)',
    thumb: '/thumbs/reel6.jpg',
  },
  {
    id: 7,
    title: 'ScaleUp Conclave 2026 — Course introduction video III',
    description: 'Platform walkthrough — demonstrating how to navigate the course and make the most of its features.',
    event: 'SCALEUP CONCLAVE',
    link: 'https://www.instagram.com/reel/DWHQti-gTbP/?igsh=a3Nld2JpNzR3OHF1',
    color: 'var(--orange)',
    thumb: '/thumbs/reel7.jpg',
  },
  {
    id: 8,
    title: 'Inspiria After Movie',
    description: "After-movie created for IEDC MESCE's flagship event Inspiria.",
    event: 'INSPIRIA',
    link: 'https://youtu.be/QV13uoIGyaI?si=nzZ_kCpOhemp3PdI',
    color: 'var(--orange)',
    thumb: 'https://img.youtube.com/vi/QV13uoIGyaI/maxresdefault.jpg',
    platform: 'youtube',
  },
];

export default function Videos() {
  return (
    <section id="videos">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">04 · VIDEO CREATIONS</span>
          <h2 className="section-heading" style={{ marginTop: '12px' }}>
            Video <span>Creations</span>
          </h2>
          <p className="section-sub" style={{ margin: '12px auto 0', textAlign: 'center' }}>
            Promotional videos and reels created for college events, hackathons, and conclaves.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
          className="vid-grid"
        >
          {videosData.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="slide-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
            >
              {/* Top — real thumbnail area */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  background: '#0e0e10',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  overflow: 'hidden',
                }}
                className="vid-thumb"
              >
                {/* Real thumbnail image */}
                <img
                  src={video.thumb}
                  alt={video.title}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    position: 'absolute', inset: 0,
                    transition: 'transform 0.4s ease, filter 0.4s ease',
                    filter: 'brightness(0.7)',
                  }}
                  className="vid-thumb-img"
                />

                {/* Dark overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(11,11,13,0.6) 0%, transparent 50%)',
                  zIndex: 1,
                }} />

                {/* Platform badge */}
                <div style={{
                  position: 'absolute', top: '12px', right: '12px', zIndex: 2,
                  padding: '4px 10px', borderRadius: '6px',
                  background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
                  fontSize: '0.7rem', color: 'var(--text-2)',
                  display: 'flex', alignItems: 'center', gap: '5px',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {video.platform === 'youtube' ? (
                    <><Youtube size={11} /> YOUTUBE</>
                  ) : (
                    <><Instagram size={11} /> REEL</>
                  )}
                </div>

                {/* Play overlay button */}
                <div style={{
                  position: 'relative', zIndex: 2,
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(12px)',
                  border: `1.5px solid rgba(255,255,255,0.3)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }} className="vid-play-btn">
                  <ExternalLink size={18} color="#fff" />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Event badge */}
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                  color: 'var(--text-2)', letterSpacing: '1.5px',
                  marginBottom: '8px', display: 'inline-block',
                }}>{video.event}</span>

                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                  color: 'var(--white)', letterSpacing: '0.5px',
                  marginBottom: '10px',
                }}>{video.title}</h3>

                <p style={{
                  color: 'var(--text-2)', fontSize: '0.84rem',
                  lineHeight: 1.55, flexGrow: 1,
                }}>{video.description}</p>

                {/* Footer link */}
                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  paddingTop: '14px', marginTop: '16px',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.78rem', color: 'var(--text-2)',
                  fontFamily: 'var(--font-mono)',
                }}>
                  {video.platform === 'youtube' ? (
                    <><Youtube size={13} /> Watch on YouTube</>
                  ) : (
                    <><Instagram size={13} /> Watch on Instagram</>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vid-grid { grid-template-columns: 1fr !important; }
        }
        .vid-thumb:hover .vid-thumb-img {
          transform: scale(1.08);
          filter: brightness(0.85) !important;
        }
        .vid-thumb:hover .vid-play-btn {
          transform: scale(1.12);
          border-color: rgba(255,255,255,0.6) !important;
        }
      `}</style>
    </section>
  );
}
