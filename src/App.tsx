import { useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Code2,
  ExternalLink, Github, GraduationCap, Layers3, Menu, X,
} from 'lucide-react';

type Project = {
  name: string;
  description: string;
  category: 'Full-stack' | 'Frontend';
  stack: string[];
  href: string;
  number: string;
};

const projects: Project[] = [
  {
    name: 'E-commerce Platform',
    description: 'A full-stack storefront concept exploring product discovery, customer accounts, cart workflows, and order administration.',
    category: 'Full-stack',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    href: 'https://github.com/bouhamedhichem387-hub/ecommerce-platform',
    number: '01',
  },
  {
    name: 'Task Management App',
    description: 'A productivity application focused on personal task organization, priorities, progress, and a clear daily overview.',
    category: 'Full-stack',
    stack: ['React', 'TypeScript', 'Express', 'MongoDB'],
    href: 'https://github.com/bouhamedhichem387-hub/task-management-app',
    number: '02',
  },
  {
    name: 'Developer Portfolio',
    description: 'A responsive portfolio built to share my learning journey, selected projects, and interests in software engineering.',
    category: 'Frontend',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    href: 'https://github.com/bouhamedhichem387-hub/developer-portfolio',
    number: '03',
  },
];

const filters = ['All', 'Full-stack', 'Frontend'] as const;

function App() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Hichem Bouhamed, home" onClick={closeMenu}>
          <span className="brand-mark">HB</span><span>Hichem Bouhamed</span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE STUDENT <span className="eyebrow-divider">/</span> DEVELOPER</div>
            <h1 id="hero-title">Building with<br /><span>curiosity</span> &amp; care.</h1>
            <p className="hero-lede">Hi, I’m <strong>Hichem Bouhamed</strong> — a Computer Science student exploring how thoughtful software can make everyday work simpler.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={15} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN</span><span>Building my path in software engineering</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of code and layered interface panels" role="img">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-glow" />
            <div className="code-card">
              <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>hello-world.ts</span><Braces size={15} /></div>
              <div className="code-content"><span className="line-no">01</span><span><b>const</b> developer = {'{'}</span><span className="line-no">02</span><span>&nbsp;&nbsp;name: <em>'Hichem'</em>,</span><span className="line-no">03</span><span>&nbsp;&nbsp;focus: <em>'building'</em>,</span><span className="line-no">04</span><span>&nbsp;&nbsp;mindset: <em>'keep learning'</em></span><span className="line-no">05</span><span>{'}'};</span></div>
              <div className="code-foot"><span className="pulse-dot" /> always learning <span>↗</span></div>
            </div>
            <div className="floating-tag tag-top"><Code2 size={15} /> <span>curious by default</span></div>
            <div className="floating-tag tag-bottom"><Layers3 size={15} /> <span>design · build · improve</span></div>
            <span className="art-index">FIG. 01 — THE PROCESS</span>
          </div>
          <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="intro-band" aria-label="Introduction"><div className="section-wrap intro-inner"><span className="section-index">01 / INTRODUCTION</span><p>I’m interested in the space where <span>clear thinking</span>, useful tools, and well-crafted interfaces meet.</p><span className="intro-decoration">✳</span></div></section>

        <section className="section-wrap content-section about-section" id="about">
          <SectionHeading index="02" label="A LITTLE ABOUT ME" title={<>Learning by<br /><span>making.</span></>} />
          <div className="about-content"><div className="about-lead"><p className="large-copy">I enjoy turning a question into something you can actually use.</p><p className="body-copy">As a Computer Science student, I’m developing a strong foundation in programming and software engineering. I like understanding how things work from the interface down to the data, then iterating until the experience feels clear and reliable.</p><p className="body-copy">This portfolio is a living record of that process: projects, experiments, and the skills I’m building along the way.</p></div><div className="about-aside"><div className="aside-rule" /><span className="mono-label">CURRENTLY EXPLORING</span><ul><li>Full-stack web development</li><li>Clean, maintainable architecture</li><li>Accessible user experiences</li></ul><div className="aside-note"><span>✳</span><p>Good software is a team effort between thoughtful engineering and empathy for the person using it.</p></div></div></div>
        </section>

        <section className="skills-section" id="skills"><div className="section-wrap content-section"><SectionHeading index="03" label="TOOLS OF THE TRADE" title={<>Learning the<br /><span>fundamentals.</span></>} /><div className="skills-grid"><SkillCard icon={<Code2 />} title="Programming" items={['JavaScript', 'TypeScript', 'HTML', 'CSS']} note="Growing through hands-on projects" /><SkillCard icon={<Layers3 />} title="Frontend" items={['React', 'Vite', 'Responsive UI', 'Accessibility']} note="Building interfaces that feel considered" /><SkillCard icon={<Braces />} title="Backend & data" items={['Node.js', 'Express.js', 'MongoDB', 'REST APIs']} note="Learning full-stack application patterns" /><SkillCard icon={<GraduationCap />} title="Practices" items={['Git & GitHub', 'Problem solving', 'Testing basics', 'Documentation']} note="Improving the craft as I go" /></div><p className="skills-disclaimer">A snapshot of technologies I’m learning and using in personal projects — not a formal proficiency rating.</p></div></section>

        <section className="section-wrap content-section projects-section" id="work"><SectionHeading index="04" label="SELECTED PROJECTS" title={<>Small steps.<br /><span>Real practice.</span></>} /><div className="project-toolbar"><p>Projects built to learn by doing and explore practical software engineering.</p><div className="filter-group" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'filter-button active' : 'filter-button'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div><a className="all-projects-link" href="https://github.com/bouhamedhichem387-hub?tab=repositories" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></section>

        <section className="journey-section" id="journey"><div className="section-wrap content-section journey-inner"><SectionHeading index="05" label="EDUCATION & GROWTH" title={<>The learning<br /><span>continues.</span></>} /><div className="journey-card"><div className="journey-icon"><GraduationCap size={22} /></div><div><span className="mono-label">CURRENT FOCUS</span><h3>Computer Science / Software Engineering</h3><p>I’m pursuing my learning journey in computer science and software engineering. I’ll share institution and study dates here when I’m ready to publish verified details.</p></div><span className="journey-tag">IN PROGRESS</span></div><div className="training-note"><span className="mono-label">CERTIFICATIONS &amp; TRAINING</span><p>No certifications or formal training are listed yet. I’ll add verified achievements here as they become part of my journey.</p></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="section-index">06 / CONTACT</span><div className="contact-main"><span className="mono-label">HAVE A PROJECT OR IDEA?</span><h2>Let’s make<br /><span>something useful.</span></h2><p>I’m open to connecting with fellow learners and developers. GitHub is the verified public channel linked from this portfolio.</p><a className="button button-light" href="https://github.com/bouhamedhichem387-hub" target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ExternalLink size={14} /></a></div><div className="contact-mark" aria-hidden="true">HB<span>✳</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">HB</span><span>Hichem Bouhamed</span></a><span className="footer-copy">Designed and built with care <span>·</span> {new Date().getFullYear()}</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></div></footer>
    </>
  );
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return <div className="section-heading"><span className="section-index">{index} / {label}</span><h2>{title}</h2></div>;
}

function SkillCard({ icon, title, items, note }: { icon: React.ReactNode; title: string; items: string[]; note: string }) {
  return <article className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><p>{note}</p></article>;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><div className={`project-visual visual-${project.number}`}><span className="project-visual-index">PROJECT / {project.number}</span><div className="visual-shape"><span>{project.number}</span></div><a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository`}><ArrowUpRight size={19} /></a></div><div className="project-info"><div className="project-heading"><span className="project-category">{project.category}</span><span className="project-count">{project.number}</span></div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}<ExternalLink size={15} /></a></h3><p>{project.description}</p><ul className="tag-list" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div></article>;
}

export default App;
