import '../styles/education.css';

const EDUCATION = [
  {
    icon: 'fa-university',
    institution: 'Ramaiah Institute of Technology',
    location: 'Bengaluru, India',
    degree: "B.Tech — Electrical and Electronics Engineering",
    period: 'Nov 2022 – May 2026',
    grade: 'Pursuing',
    tags: ['DSA', 'Database Management', 'SQL', 'OOPs', 'Operating System', 'Deep Learning', 'Computer Networks'],
    color: 'purple',
  },
  {
    icon: 'fa-school',
    institution: 'Himalayan International School',
    location: 'India',
    degree: 'Class XII — PCM (CBSE)',
    period: '2020 – 2021',
    grade: '83.8%',
    tags: ['Physics', 'Chemistry', 'Mathematics'],
    color: 'blue',
  },
  {
    icon: 'fa-graduation-cap',
    institution: 'Carmel High School',
    location: 'India',
    degree: 'Class X (ICSE)',
    period: '2018 – 2019',
    grade: '78.2%',
    tags: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer', 'Hindi', 'English', 'Geography', 'History & Civics'],
    color: 'green',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label reveal">// education</p>
        <h2 className="section-title reveal">Academic Background</h2>
        <div className="section-line reveal" />
        <div className="edu-timeline">
          {EDUCATION.map((e, i) => (
            <div className="edu-item reveal" key={i}>
              <div className={`edu-dot edu-dot--${e.color}`}>
                <i className={`fas ${e.icon}`} />
              </div>
              <div className="edu-card">
                <div className="edu-card-top">
                  <div className="edu-left">
                    <div className="edu-institution">{e.institution}</div>
                    {e.location && <div className="edu-location"><i className="fas fa-map-marker-alt" /> {e.location}</div>}
                    <div className="edu-degree">{e.degree}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-period"><i className="fas fa-calendar-alt" /> {e.period}</div>
                    <div className={`edu-grade edu-grade--${e.color}`}>{e.grade}</div>
                  </div>
                </div>
                <div className="edu-tags">
                  {e.tags.map(tag => <span key={tag} className="edu-tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
