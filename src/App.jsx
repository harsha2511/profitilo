import { useEffect } from 'react';
import './styles/global.css';

import Navbar from './components/Navbar';
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
      <Navbar />
      <div className="page-wrapper">
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
