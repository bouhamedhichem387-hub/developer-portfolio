import { useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Code2,
  ExternalLink, Github, GraduationCap, Layers3, Menu, X,
} from 'lucide-react';

type Project = {
  name: string;
  summary: string;
  category: 'Full-stack' | 'Frontend';
  stack: string[];
  href: string;
  number: string;
  status: string;
};

const projects: Project[] = [
  { name: 'E-commerce Platform', summary: 'A full-stack storefront project exploring product discovery, customer accounts, cart workflows, and order administration.', category: 'Full-stack', stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'], href: 'https://github.com/bouhamedhichem387-hub/ecommerce-platform', number: '01', status: 'IN DEVELOPMENT' },
  { name: 'Task Management App', summary: 'A productivity project for organizing tasks, setting priorities, tracking progress, and managing a personal workload.', category: 'Full-stack', stack: ['React', 'TypeScript', 'Express', 'MongoDB'], href: 'https://github.com/bouhamedhichem387-hub/task-management-app', number: '02', status: 'IN DEVELOPMENT' },
  { name: 'Developer Portfolio', summary: 'A responsive personal website presenting my learning journey, selected work, and interests in software engineering.', category: 'Frontend', stack: ['React', 'TypeScript', 'Vite', 'CSS'], href: 'https://github.com/bouhamedhichem387-hub/developer-portfolio', number: '03', status: 'IN DEVELOPMENT' },
];
const filters = ['All', 'Full-stack', 'Frontend'] as const;

export default function App() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Bouhamed Hichem home"><span className="brand-mark">BH</span><span>Bouhamed Hichem</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <nav id="main-navigation" className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE STUDENT <span className="eyebrow-divider">/</span> DEVELOPER</div>
          <h1 id="hero-title">Curiosity into<br /><span>craft.</span></h1>
          <p className="hero-lede">I’m <strong>Bouhamed Hichem</strong>, a Licence GLSI student building a foundation in software engineering through hands-on projects and continuous learning.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="#about">A little about me <ArrowRight size={15} /></a></div>
          <div className="hero-meta"><span>MY APPROACH</span><span>Learn thoughtfully · build consistently</span></div>
        </div>
        <div className="hero-art" role="img" aria-label="Illustration of a code editor and learning notes"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-glow" />
          <div className="code-card"><div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>learning.ts</span><Braces size={15} /></div><div className="code-content"><span className="line-no">01</span><span><b>const</b> path = {'{'}</span><span className="line-no">02</span><span>&nbsp;&nbsp;learn: <em>'every day'</em>,</span><span className="line-no">03</span><span>&nbsp;&nbsp;build: <em>'with care'</em>,</span><span className="line-no">04</span><span>&nbsp;&nbsp;improve: <em>true</em></span><span className="line-no">05</span><span>{'}'};</span></div><div className="code-foot"><span className="pulse-dot" /> progress over perfection <span>↗</span></div></div>
          <div className="floating-tag tag-top"><Code2 size={15} /><span>curiosity → creation</span></div><div className="floating-tag tag-bottom"><Layers3 size={15} /><span>design · build · learn</span></div><span className="art-index">FIG. 01 — THE PROCESS</span>
        </div><a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>
      <section className="intro-band" aria-label="Introduction"><div className="section-wrap intro-inner"><span className="section-index">01 / INTRODUCTION</span><p>I’m drawn to the meeting point of <span>clear thinking</span>, useful technology, and thoughtful design.</p><span className="intro-decoration" aria-hidden="true">✳</span></div></section>
      <section className="section-wrap content-section" id="about"><SectionHeading index="02" label="ABOUT ME" title={<>Learning by<br /><span>making.</span></>} /><div className="about-content"><div><p className="large-copy">I enjoy turning a question into something you can actually use.</p><p className="body-copy">I’m studying computer science and developing my skills in software development. I like understanding how applications work from the interface down to the data, then improving the details that make them feel clear and dependable.</p><p className="body-copy">Personal projects give me a place to practice, make mistakes, and grow. I value clean code, practical problem-solving, accessibility, and documenting what I learn.</p></div><aside className="about-aside"><div className="aside-rule" /><span className="mono-label">WHAT I VALUE</span><ul><li>Curiosity and steady learning</li><li>Clear, maintainable software</li><li>Useful and accessible experiences</li></ul><div className="aside-note"><span aria-hidden="true">✳</span><p>Thoughtful software starts with understanding the people who use it.</p></div></aside></div></section>
      <section className="skills-section" id="skills"><div className="section-wrap content-section"><SectionHeading index="03" label="SKILLS & TECHNOLOGIES" title={<>Building strong<br /><span>foundations.</span></>} /><div className="skills-grid"><SkillCard icon={<Code2 />} title="Languages" items={['JavaScript', 'TypeScript', 'HTML5', 'CSS3']} note="Practicing through coursework and projects" /><SkillCard icon={<Layers3 />} title="Frontend" items={['React', 'Vite', 'Responsive design', 'Accessibility']} note="Creating considered web interfaces" /><SkillCard icon={<Braces />} title="Backend & data" items={['Node.js', 'Express.js', 'MongoDB', 'REST APIs']} note="Exploring full-stack development" /><SkillCard icon={<GraduationCap />} title="Tools & practices" items={['Git & GitHub', 'Problem solving', 'Testing', 'Documentation']} note="Learning reliable engineering habits" /></div><p className="skills-disclaimer">A snapshot of technologies I’m currently learning and practicing in coursework and personal projects.</p></div></section>
      <section className="section-wrap content-section projects-section" id="projects"><SectionHeading index="04" label="SELECTED PROJECTS" title={<>Practice with<br /><span>purpose.</span></>} /><div className="project-toolbar"><p>Learning through building. Follow each repository for source code and project progress.</p><div className="filter-group" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter-button active' : 'filter-button'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div><a className="all-projects-link" href="https://github.com/bouhamedhichem387-hub?tab=repositories" target="_blank" rel="noreferrer">Browse GitHub repositories <ArrowUpRight size={15} /></a></section>
      <section className="journey-section" id="education"><div className="section-wrap content-section journey-inner"><SectionHeading index="05" label="EDUCATION & GROWTH" title={<>The learning<br /><span>continues.</span></>} /><article className="journey-card"><div className="journey-icon"><GraduationCap size={22} /></div><div><span className="mono-label">CURRENT STUDIES</span><h3>Licence GLSI · 2nd year</h3><p>École Supérieure Privée d'Ingénierie et de Technologie (ESPIN), Sfax.</p></div><span className="journey-tag">IN PROGRESS</span></article><div className="training-note"><span className="mono-label">CERTIFICATIONS &amp; TRAINING</span><p>No certifications or additional formal training have been verified for publication yet.</p></div></div></section>
      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="section-index">06 / CONTACT</span><div className="contact-main"><span className="mono-label">LET’S CONNECT</span><h2>Make something<br /><span>meaningful.</span></h2><p>Open to connecting with fellow students, developers, and people who enjoy building useful things. GitHub is my verified public contact channel.</p><a className="button button-light" href="https://github.com/bouhamedhichem387-hub" target="_blank" rel="noreferrer"><Github size={17} /> Visit my GitHub <ExternalLink size={14} /></a></div><div className="contact-mark" aria-hidden="true">BH<span>✳</span></div></div></section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">BH</span><span>Bouhamed Hichem</span></a><span className="footer-copy">Designed and built with care <span>·</span> {new Date().getFullYear()}</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></div></footer>
  </>;
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return <div className="section-heading"><span className="section-index">{index} / {label}</span><h2>{title}</h2></div>;
}
function SkillCard({ icon, title, items, note }: { icon: React.ReactNode; title: string; items: string[]; note: string }) {
  return <article className="skill-card"><div className="skill-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><p>{note}</p></article>;
}
function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><div className={`project-visual visual-${project.number}`}><span className="project-visual-index">PROJECT / {project.number}</span><div className="visual-shape" aria-hidden="true"><span>{project.number}</span></div><a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub repository`}><ArrowUpRight size={19} /></a></div><div className="project-info"><div className="project-heading"><span className="project-category">{project.category}</span><span className="project-count">{project.status}</span></div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}<ExternalLink size={15} /></a></h3><p>{project.summary}</p><ul className="tag-list" aria-label={`${project.name} technologies`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div></article>;
}
