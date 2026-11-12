import { useCallback, useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionIds = ['home', 'about', 'work', 'certifications', 'contact'];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLightTheme, setIsLightTheme] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24, mass: 0.7 });
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${smoothX}px ${smoothY}px, ${isLightTheme ? 'rgba(15, 23, 42, 0.42)' : 'rgba(251, 191, 36, 0.18)'}, ${isLightTheme ? 'rgba(41, 37, 36, 0.2)' : 'rgba(15, 23, 42, 0.12)'} 20%, ${isLightTheme ? 'rgba(255, 251, 242, 0)' : 'rgba(2, 6, 23, 0.9)'} 42%)`;

  const navigateToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setCurrentPage(sectionId);
  }, []);

  useEffect(() => {
    const updateCurrentSection = () => {
      const marker = window.innerHeight * 0.32;
      let activeSection = 'home';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= marker) {
          activeSection = sectionId;
        }
      }

      setCurrentPage(activeSection);
    };

    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    updateCurrentSection();
    return () => window.removeEventListener('scroll', updateCurrentSection);
  }, []);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      className={`app-shell relative flex min-h-screen flex-col overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-900 ${isLightTheme ? 'theme-light' : ''}`}
      onMouseMove={handlePointerMove}
    >
      <motion.div
        className={`theme-glow-overlay pointer-events-none absolute inset-0 ${isLightTheme ? 'theme-glow-overlay-light' : ''}`}
        style={{ background: glowBackground }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.05),transparent_18%)]" />
      <Navbar currentPage={currentPage} onNavigate={navigateToSection} />
      <button
        type="button"
        className={`hanging-lamp ${isLightTheme ? 'is-lit' : ''}`}
        onClick={() => setIsLightTheme((current) => !current)}
        aria-label={isLightTheme ? 'Turn lamp off and switch to dark mode' : 'Turn lamp on and switch to light mode'}
        aria-pressed={isLightTheme}
      >
        <span className="lamp-fixture" aria-hidden="true">
          <span className="lamp-mount" />
          <span className="lamp-stem" />
          <span className="lamp-shade">
            <span className="lamp-bulb" />
          </span>
          <span className="lamp-pull-cord">
            <span className="lamp-pull" />
          </span>
        </span>
        <span className="lamp-glow" aria-hidden="true" />
        <span className="lamp-caption">{isLightTheme ? 'LIGHT ON' : 'LIGHT OFF'}</span>
      </button>
      <main className="relative z-10 flex-grow">
        <section id="home" className="scroll-mt-16">
          <Home onNavigate={navigateToSection} />
        </section>
        <section id="about" className="scroll-mt-16 border-t border-slate-800/70">
          <About />
        </section>
        <section id="work" className="scroll-mt-16 border-t border-slate-800/70">
          <Work />
        </section>
        <section id="certifications" className="scroll-mt-16 border-t border-slate-800/70">
          <Certifications />
        </section>
        <section id="contact" className="scroll-mt-16 border-t border-slate-800/70">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
