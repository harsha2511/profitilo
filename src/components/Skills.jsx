import '../styles/skills.css';

const SKILLS = [
  {
    icon: 'fa-code',
    title: 'Languages',
    color: 'purple',
    tags: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Android Development',
    color: 'green',
    tags: ['Kotlin', 'XML', 'Android Studio', 'Firebase', 'Jetpack Components'],
  },
  {
    icon: 'fa-brain',
    title: 'AI / ML',
    color: 'cyan',
    tags: ['Machine Learning', 'Deep Learning', 'UNet', 'Image Segmentation', 'NumPy'],
  },
  {
    icon: 'fa-layer-group',
    title: 'Web & UI/UX',
    color: 'violet',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
  },
  {
    icon: 'fa-tools',
    title: 'Developer Tools',
    color: 'blue',
    tags: ['VS Code', 'Android Studio', 'Google Cloud Platform', 'Jupyter Notebook', 'Git'],
  },
  {
    icon: 'fa-desktop',
    title: 'Operating Systems',
    color: 'amber',
    tags: ['MacOS', 'Windows'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label reveal">// skills</p>
        <h2 className="section-title reveal">Tech Stack</h2>
        <div className="section-line reveal" />
        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            <div className={`skill-category reveal sc-${cat.color}`} key={i}>
              <div className="skill-cat-title">
                <span className="skill-cat-icon"><i className={`fas ${cat.icon}`} /></span>
                {cat.title}
              </div>
              <div className="skill-tags">
                {cat.tags.map(tag => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
