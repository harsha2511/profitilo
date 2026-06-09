import { useState } from 'react';
import '../styles/projects.css';

const PROJECTS = [
  {
    icon: '🎮',
    name: 'Tic Tac Toe AI',
    year: '2024–25',
    desc: 'Android Tic Tac Toe with unbeatable AI using Minimax + Alpha-Beta Pruning.',
    shortTech: ['Kotlin', 'XML', 'Minimax'],
    tech: ['Kotlin', 'XML', 'Android Studio', 'Minimax Algorithm', 'Alpha-Beta Pruning'],
    points: [
      'Conceptualized and developed a fully functional Tic Tac Toe game for Android using Kotlin and XML layouts.',
      'Implemented the Minimax Algorithm with Alpha-Beta Pruning for optimal AI decision-making — the AI is provably unbeatable in every scenario.',
      'Enhanced AI decision-making capabilities resulting in smarter, faster gameplay with a 70% improvement in game performance and efficiency.',
      'Designed a clean, interactive UI with smooth game state transitions and real-time board rendering.',
    ],
    href: 'https://github.com/harsha2511kumari',
  },
  {
    icon: '🍔',
    name: 'Delicious Point',
    year: '2023–24',
    desc: 'Android food delivery app with real-time Firebase database and order tracking.',
    shortTech: ['Kotlin', 'Firebase', 'XML'],
    tech: ['Kotlin', 'Firebase Realtime Database', 'XML', 'Android Studio'],
    points: [
      'Designed and implemented a user-friendly food delivery application for Android with a polished, intuitive UI.',
      'Developed key features including menu browsing, cart management, order placement, and streamlined real-time order tracking.',
      'Integrated Firebase Realtime Database for live menu and order status updates across all sessions.',
      'Built clean navigation flows between restaurant listings, cart, and order confirmation screens.',
    ],
    href: 'https://github.com/harsha2511kumari',
  },
  {
    icon: '📚',
    name: 'RITNotebook',
    year: '2023',
    desc: 'Academic resource website for RIT students with notes and PYQs across all 4 years.',
    shortTech: ['HTML', 'CSS', 'JavaScript'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Animation', 'Google Drive'],
    points: [
      'Developed a student-centric academic resource website tailored for Ramaiah Institute of Technology.',
      'Contains organized notes and Previous Year Questions (PYQs) covering Years 1–4 across all major subjects.',
      'Integrated Google Drive links for easy access to downloadable study materials and resources.',
      'Implemented 30-day web analytics to track usage patterns and identify the most accessed content.',
      'Built with responsive Bootstrap design and subtle animations for a clean, engaging experience.',
    ],
    href: 'https://github.com/harsha2511kumari',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">// projects</p>
        <h2 className="section-title reveal">Things I've Built</h2>
        <div className="section-line reveal" />
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card reveal" key={i}>
              <div className="proj-top">
                <span className="project-icon">{p.icon}</span>
                <span className="proj-year-txt">{p.year}</span>
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tech">
                {p.shortTech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="proj-hover-overlay">
                <button className="proj-view-btn" onClick={() => setSelected(p)}>
                  <i className="fas fa-eye" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="proj-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <button className="proj-modal-close" onClick={() => setSelected(null)}>
              <i className="fas fa-times" />
            </button>
            <div className="proj-modal-header">
              <span className="proj-modal-icon">{selected.icon}</span>
              <div className="proj-modal-title">
                <div className="proj-modal-name">{selected.name}</div>
                <div className="proj-modal-year">{selected.year}</div>
              </div>
              {selected.href && (
                <a href={selected.href} target="_blank" rel="noreferrer" className="proj-modal-gh">
                  <i className="fab fa-github" /> GitHub
                </a>
              )}
            </div>
            <div className="proj-modal-tech">
              {selected.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <ul className="proj-modal-points">
              {selected.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
