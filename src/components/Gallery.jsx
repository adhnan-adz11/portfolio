import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const galleryData = [
  {
    id: 1,
    title: 'Holographic User Interface',
    category: 'UI Designs',
    description: 'Figma dashboard prototype incorporating fluid 3D glass elements and glowing node indicators.',
    image: 'gallery_1.png',
    gradient: 'linear-gradient(135deg, #8F2E1D, #27313A)',
  },
  {
    id: 2,
    title: 'Future Workspace Setup',
    category: 'Work Setup',
    description: 'Dual monitor console configuration optimized for high-efficiency full-stack and video editing work.',
    image: 'gallery_2.png',
    gradient: 'linear-gradient(135deg, #27313A, #4EF158)',
  },
  {
    id: 3,
    title: 'Apex Hackathon Command Deck',
    category: 'Tech Hackathons',
    description: 'Collaboration layout and repository dashboard built during the 36-hour sprint.',
    image: 'gallery_3.png',
    gradient: 'linear-gradient(135deg, #8F2E1D, #4EF158)',
  },
  {
    id: 4,
    title: 'Liquid Glass Specular Highlight Mockups',
    category: 'UI Designs',
    description: 'High-fidelity render of translucent panels showing soft reflections and neon borders.',
    image: 'gallery_4.png',
    gradient: 'linear-gradient(135deg, #4EF158, #27313A)',
  },
];

const categories = ['All', 'UI Designs', 'Work Setup', 'Tech Hackathons'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = filter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery">
      <div className="container">
        <h2 className="section-title">
          Media <span>Gallery</span>
        </h2>
        <p className="section-subtitle">
          Visual documentation of UI/UX design mockups, developer setups, and hackathon highlights
        </p>

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: '8px 16px',
                fontSize: '0.8rem',
                borderRadius: '16px',
                background: filter === cat ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.03)',
                color: filter === cat ? '#16171d' : '#fff',
                borderColor: filter === cat ? 'transparent' : 'rgba(255, 255, 255, 0.08)',
                borderWidth: '1px',
                borderStyle: 'solid',
                boxShadow: filter === cat ? '0 0 15px var(--accent-green-glow)' : 'none',
                fontWeight: 600,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="glass-panel gallery-panel-hover"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                background: 'rgba(39, 49, 58, 0.2)',
                position: 'relative',
                height: '240px',
              }}
            >
              {/* Media item display */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}
              >
                {/* Fallback beautiful cyberpunk vector design */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: item.gradient,
                    opacity: 0.85,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  <ImageIcon size={32} style={{ marginBottom: '12px', opacity: 0.6 }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}>
                    {item.title}
                  </span>
                </div>

                <img
                  src={`/assets/${item.image}`}
                  alt={item.title}
                  onError={(e) => {
                    e.target.style.display = 'none'; // hide broken images, show beautiful CSS vectors
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    transition: 'transform 0.5s ease',
                  }}
                  className="gallery-image"
                />

                {/* Glass Hover Overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(39, 49, 58, 0.8)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-green)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {item.category}
                  </span>
                  <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.8rem', lineHeight: 1.3 }}>
                    {item.description}
                  </p>
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      color: '#fff',
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(39, 49, 58, 0.9)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={20} />
          </button>

          {/* Left Navigation */}
          <button
            onClick={showPrev}
            style={{
              position: 'absolute',
              left: '24px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(0,0,0,0.3)',
                height: '450px',
                position: 'relative',
              }}
            >
              {/* Fallback visual gradient inside Lightbox */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: filteredItems[lightboxIndex].gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <ImageIcon size={64} style={{ opacity: 0.5 }} />
              </div>

              <img
                src={`/assets/${filteredItems[lightboxIndex].image}`}
                alt={filteredItems[lightboxIndex].title}
                onError={(e) => {
                  e.target.style.display = 'none'; // fallback to gradient
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
              />
            </div>
            {/* Image Text info */}
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--accent-green)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '4px 0 8px' }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}>
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={showNext}
            style={{
              position: 'absolute',
              right: '24px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <style>{`
        .gallery-panel-hover:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-panel-hover:hover .gallery-image {
          transform: scale(1.08) rotate(1deg);
        }
      `}</style>
    </section>
  );
}
