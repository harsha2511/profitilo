import { useEffect, useState } from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
import ProfileSidebar from './components/ProfileSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('home');
      const threshold = hero ? hero.offsetHeight - 140 : 600;
      setShowSidebar(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
      <ProfileSidebar visible={showSidebar} />
      <div className={`page-wrapper${showSidebar ? ' shifted' : ''}`}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
