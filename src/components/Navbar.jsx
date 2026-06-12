import { useEffect, useState } from 'react';
import '../styles/navbar.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <nav className={`topnav${scrolled ? ' scrolled' : ''}`}>
        <a className="nav-logo" href="#home" onClick={closeMenu}>
          Harsha<span>.</span>
        </a>
        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {LINKS.map(l => (
              <li key={l.id}><a href={`#${l.id}`} onClick={closeMenu}>{l.label}</a></li>
            ))}
            <li className="nav-resume-li">
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume" onClick={closeMenu}>
                Resume
              </a>
            </li>
          </ul>
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="knob"><i className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`} /></div>
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
