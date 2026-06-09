import { useEffect, useState } from 'react';
import '../styles/navbar.css';

export default function Navbar({ onHamburger, isLight, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
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
        <a className="nav-logo" href="#about">&lt;HK /&gt;</a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {['about','experience','projects','skills','achievements','education','contact'].map(s => (
            <li key={s}><a href={`#${s}`} onClick={closeMenu}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <div style={{ display:'flex', alignItems:'center', gap:'0.85rem' }}>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <div className="knob"><i className={`fas ${isLight ? 'fa-sun' : 'fa-moon'}`} /></div>
          </button>
          <button className="hamburger" onClick={() => { setMenuOpen(o => !o); onHamburger(); }} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
