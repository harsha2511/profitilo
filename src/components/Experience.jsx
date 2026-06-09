import { useState } from 'react';
import '../styles/experience.css';

const EXPERIENCE = [
  {
    icon: 'fa-laptop-code',
    role: 'SDE Intern',
    date: 'Apr 2026 – Present',
    duration: '< 1 yr',
    company: 'Skypoint – Sky Command Platform · Bangalore, India',
    stack: 'Software Development · Feature Development · Scalable Systems',
    points: [
      <>Working on <strong>Sky Command</strong>, contributing to feature development and system improvements at Skypoint.</>,
      <>Collaborating with the engineering team to build <strong>scalable solutions</strong> and enhance overall platform performance.</>,
    ],
  },
  {
    icon: 'fa-paint-brush',
    role: 'UI/UX Intern',
    date: 'Jun 2025 – Aug 2025',
    duration: '3 months',
    company: 'Confiable Technocraft · Remote',
    stack: 'UI/UX Design · Responsive Web · Chatbot Integration · Performance Optimization',
    points: [
      <>Developed a <strong>responsive website</strong> with modern UI/UX principles and interactive elements for the client.</>,
      <>Integrated a <strong>chatbot</strong> into the platform and optimized overall site performance for a seamless user experience.</>,
    ],
  },
  {
    icon: 'fa-brain',
    role: 'Machine Learning Intern',
    date: 'May 2024 – Jul 2024',
    duration: '3 months',
    company: 'National Institute of Technology Rourkela · Rourkela, India',
    stack: 'Python · Deep Learning · UNet · Squeeze-and-Excitation · ASPP · PyTorch',
    points: [
      <>Led the <strong>Automated Nucleus Segmentation</strong> project, engineering a deep learning model leveraging enhanced UNet architecture with <strong>Squeeze-and-Excitation (SE) blocks</strong> and <strong>ASPP</strong>.</>,
      <>Implemented advanced loss functions — <strong>Jaccard Distance, Dice Loss, Focal Loss</strong> — effectively mitigating class imbalances in histopathological datasets.</>,
      <>Achieved strong metrics: <strong>F1 Score: 0.7613</strong>, <strong>Accuracy: 90.80%</strong>, and <strong>Dice Coefficient: 0.6357</strong>.</>,
    ],
  },
];

const PREVIEW_COUNT = 1;

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">// work experience</p>
        <h2 className="section-title reveal">Where I've Worked</h2>
        <div className="section-line reveal" />
        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="timeline-dot"><i className={`fas ${exp.icon}`} /></div>
              <div className="timeline-card">
                <div className="exp-header">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-date">
                    {exp.date}
                    {exp.duration && <span className="exp-duration">{exp.duration}</span>}
                  </div>
                </div>
                <div className="exp-company">{exp.company}</div>
                {exp.stack && <div className="exp-stack">{exp.stack}</div>}
                <ul className="exp-points">
                  {exp.points.slice(0, PREVIEW_COUNT).map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
                {exp.points.length > PREVIEW_COUNT && (
                  <div className="exp-view-more-wrap">
                    <button className="exp-view-more" onClick={() => setSelected(exp)}>
                      <i className="fas fa-plus-circle" /> View More
                      <span className="exp-count">+{exp.points.length - PREVIEW_COUNT} more</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="exp-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="exp-modal" onClick={e => e.stopPropagation()}>
            <button className="exp-modal-close" onClick={() => setSelected(null)}>
              <i className="fas fa-times" />
            </button>
            <div className="exp-modal-header">
              <div className="exp-modal-dot"><i className={`fas ${selected.icon}`} /></div>
              <div>
                <div className="exp-modal-role">{selected.role}</div>
                <div className="exp-modal-company">{selected.company}</div>
                <div className="exp-modal-date">
                  {selected.date}
                  {selected.duration && <span className="exp-duration">{selected.duration}</span>}
                </div>
              </div>
            </div>
            {selected.stack && <div className="exp-stack exp-modal-stack">{selected.stack}</div>}
            <ul className="exp-modal-points">
              {selected.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
