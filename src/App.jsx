import { useEffect, useState } from 'react';
import './styles/global.css';

import Particles from './components/Particles';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    document.querySelectorAll(
      '.projects-grid .project-card, .achievements-grid .achievement-card, .skills-grid .skill-category'
    ).forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.08 + 's'; });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Particles />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Navbar
        onHamburger={() => setSidebarOpen(o => !o)}
        isLight={isLight}
        onToggleTheme={() => setIsLight(l => !l)}
      />
      <div className="page-wrapper">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </div>
    </>
  );
}
