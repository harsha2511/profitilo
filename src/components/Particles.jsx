import { useEffect } from 'react';
import '../styles/particles.css';

const COLORS = ['#7c3aed','#a855f7','#06b6d4','#8b5cf6','#22d3ee'];

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 2;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${COLORS[Math.floor(Math.random()*COLORS.length)]};animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*10}s;`;
      container.appendChild(p);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <>
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div id="particles" />
    </>
  );
}
