import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Videos from './components/Videos';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Videos', id: 'videos' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Videos />
        <Experience />
        <Achievements />
        {/* <Gallery /> */}
        <Contact />
      </main>

      {/* Footer with nav */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '40px 0 28px',
        backgroundColor: 'rgba(4, 16, 28, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div className="container">
          {/* Top row: logo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px' }}>
            {/* Logo */}
            <a href="#home" onClick={e => scrollTo(e, 'home')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--orange)', letterSpacing: '2px' }}>A</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--white)', letterSpacing: '2px' }}>CT</span>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', marginLeft: '4px', display: 'inline-block' }} />
            </a>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '20px' }} />

          {/* Bottom row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
              Designed & Built by <strong style={{ color: 'var(--orange)' }}>ADHNAN CT</strong> · MES College of Engineering, Kuttippuram
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', opacity: 0.5 }}>
              Kerala, India · 2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
