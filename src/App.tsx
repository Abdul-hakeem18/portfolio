import React, { useState } from 'react';
import { projects, type ProjectPlatform, type Project } from './projects';
import { ArrowUpRight, ArrowRight, Download, Mail, MapPin, Linkedin, Github, Menu, X, BriefcaseBusiness, GraduationCap, Code2, Smartphone, Database, Package, Send, ExternalLink, ChevronDown, Puzzle, Server, LayoutTemplate, Wrench } from 'lucide-react';

const asset = (name: string) => `${import.meta.env.BASE_URL}${name}`;
const email = 'mha.abdulhakeem@gmail.com';
const linkedin = 'https://www.linkedin.com/in/abdul-hakeem-a0b075254/';
const github = 'https://github.com/Abdul-hakeem18';
const location = 'Puttalam, Sri Lanka';
const availability = 'Open to remote, hybrid and relocation';
const skillGroups = [
  { title: 'Backend', icon: Server, skills: ['Laravel', 'PHP', 'Node.js', 'Express', 'REST APIs'] },
  { title: 'Frontend', icon: LayoutTemplate, skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'WordPress', icon: Code2, skills: ['WordPress', 'Custom Plugins', 'WooCommerce', 'MemberPress', 'Yoast SEO', 'Elementor', 'WPBakery', 'Classic Editor', 'Avada', 'Porto', 'Rey'] },
  { title: 'Mobile', icon: Smartphone, skills: ['React Native', 'Flutter', 'Expo', 'Redux Toolkit'] },
  { title: 'Databases & Storage', icon: Database, skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Cloud Firestore', 'Hive'] },
  { title: 'Integrations', icon: Puzzle, skills: ['WebXPay', 'PAYable', 'Koko BNPL', 'Payoneer', 'PayPal', 'myPOS', 'Aramex', 'FedEx / UPS / DHL', 'eBay API'] },
  { title: 'AI', icon: Code2, skills: ['OpenAI API', 'DeepSeek API', 'ChatGPT', 'Claude'] },
  { title: 'Testing & DevOps', icon: Wrench, skills: ['PHPUnit', 'Playwright', 'Git', 'GitHub Actions', 'AWS', 'DigitalOcean', 'Cloudways', 'Hostinger'] },
];
const roles = [
  { date: 'Sep 2025 – Present', title: 'Senior Software Engineer', points: ['Lead a three-developer team on POSMate and own its Git workflow, code reviews, servers and 50+ shipped releases.', 'Lead and maintain ClickReport, a WordPress reporting platform with 100+ report templates.', 'Deploy and maintain production servers on AWS and DigitalOcean; mentor junior developers.'] },
  { date: 'Mar 2021 – Sep 2025', title: 'Software Developer', points: ['Started as a WordPress developer: custom plugins on every project, WooCommerce and MemberPress sites, and payment gateway integrations.', 'Took over Dinodio from its original developer and delivered phases 1–5 across front end and backend.', 'Built Laravel and Node.js REST APIs integrating FedEx, UPS, DHL, eBay and PayPal.', 'Built React and Next.js interfaces, an Electron desktop client and a Flutter mobile app; implemented JWT/OAuth 2.0 auth and wrote PHPUnit tests.'] },
];
const projectFilters: ('All' | ProjectPlatform)[] = ['All', 'Web', 'Mobile', 'Desktop', 'WordPress'];
const technologyLogos: Record<string, string> = { React: 'react', HTML: 'html5', CSS: 'css3', JavaScript: 'javascript', TypeScript: 'typescript', Flutter: 'flutter', 'React Native': 'react', 'Node.js': 'nodejs', Laravel: 'laravel', PHP: 'php', WordPress: 'wordpress', MySQL: 'mysql', PostgreSQL: 'postgresql', SQLite: 'sqlite', 'Cloud Firestore': 'firebase' };
const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];


function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span/>{children}</p>; }
function ProjectCard({ project }: { project: Project }) {
  const { name, category, description, tags, color, features, architecture, context } = project;
  const Icon = category.startsWith('Mobile') ? Smartphone : category.startsWith('WordPress') ? Code2 : Package;
  return <article className="project-card">
    {project.preview ? <a className={`project-preview${project.previewFullPage ? ' full-page-preview' : ''}`} href={asset(project.preview)} target="_blank" rel="noreferrer" aria-label={`${project.previewLabel || 'View preview'}: ${name} (opens in a new tab)`}><img src={asset(project.preview)} alt={project.previewAlt || `${name} preview`} loading="lazy" width="1536" height="1024"/><span>{project.previewLabel || 'View preview'} <ExternalLink size={14}/></span></a> : <div className={`project-cover ${color}`}><span className="project-type">{category}</span><Icon size={62} strokeWidth={1.2}/><span className="cover-name">{name}</span></div>}
    <div className="project-body">
      <h3>{name}</h3>{context && <span className="project-context">{context}</span>}<p>{description}</p>
      <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.repoUrl && <a className="project-live-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.repoUrl.includes('/releases') ? 'View releases of' : 'View source code of'} ${name} on GitHub (opens in a new tab)`}>{project.repoUrl.includes('/releases') ? 'View releases' : 'View code'} <Github size={16} aria-hidden="true"/></a>}{project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${name} live site (opens in a new tab)`}>Visit live site <ExternalLink size={16} aria-hidden="true"/></a>}
      <details className="project-details"><summary>Project details <ChevronDown size={15}/></summary><h4>What it includes</h4><ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul><h4>Architecture</h4><p>{architecture}</p>{project.screenshots && <div className="project-screenshots"><h4>Screenshots</h4>{project.screenshots.map(screenshot => <a key={screenshot.src} href={asset(screenshot.src)} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${screenshot.caption} (opens in a new tab)`}><img src={asset(screenshot.src)} alt={`${name}: ${screenshot.caption}`} loading="lazy"/><span>{screenshot.caption} <ExternalLink size={14} aria-hidden="true"/></span></a>)}</div>}</details>
    </div>
  </article>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectFilter, setProjectFilter] = useState<'All' | ProjectPlatform>('All');
  const filteredProjects = projectFilter === 'All' ? projects : projects.filter(project => project.platforms.includes(projectFilter));
  const visibleProjects = projectFilter === 'All' && !showAllProjects ? filteredProjects.slice(0, 4) : filteredProjects;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="hero-shell" id="home">
      <div className="hero-blue" aria-hidden="true"/>
      <header className="container header">
        <a className="brand" href="#home" aria-label="Abdul Hakeem home"><span className="monogram">A<span>H</span></span><span>Abdul Hakeem</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav id="navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>)}<a className="nav-cv" href={asset('Abdul-Hakeem-CV.pdf')} download onClick={() => setMenuOpen(false)}>Download CV</a></nav>
        <a className="button small header-cv" href={asset('Abdul-Hakeem-CV.pdf')} download><Download size={16}/>Download CV</a>
      </header>
      <main id="main">
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="hello">HELLO, I AM</p><h1 id="hero-title">Abdul Hakeem</h1><p className="hero-role">Senior Software Engineer · Full-Stack &amp; WordPress</p><p className="hero-subtitle">Laravel · Node.js · React · WordPress · React Native &amp; Flutter. I build web, mobile and desktop products for logistics, retail and e-commerce.</p><div className="hero-actions"><a className="button" href="#projects">View My Work <ArrowRight size={17}/></a><a className="button outline" href={`mailto:${email}`}>Contact Me</a></div></div>
        <div className="portrait-wrap"><div className="portrait-circle"><img src={asset('abdul-hakeem.jpeg')} alt="Abdul Hakeem wearing a navy blazer" width="1024" height="1024" fetchPriority="high"/></div><span className="ring yellow" aria-hidden="true"/><span className="ring violet" aria-hidden="true"/><div className="experience-badge"><BriefcaseBusiness/><strong>5+ Years</strong><span>Experience</span></div><p className="portrait-note" aria-hidden="true">Build.<br/>Create.<br/>Solve.</p></div>
      </section>
      </main>
    </div>
    <section className="container about-grid section" id="about" aria-labelledby="about-title">
      <div><Eyebrow>ABOUT ME</Eyebrow><h2 id="about-title">About Me<span className="accent">.</span></h2><p>I'm a software engineer with 5+ years of experience at Imara Software Solutions. I started as a WordPress developer in 2021, moved into full-stack work, and was promoted to Senior Software Engineer in 2025. I design REST APIs in Laravel and Node.js, build React and Next.js interfaces, write custom WordPress plugins, and ship cross-platform mobile apps with React Native and Flutter.</p><p>I lead a three-person team on POSMate, an offline-first retail POS, took over Dinodio and delivered phases 1–5, and maintain three live WordPress sites on my own. Outside work I run BookSpot, a live booking marketplace in Sri Lanka. I hold a BSc (Hons) in Computer Science (Software Engineering) from Kingston University (UK).</p><div className="contact-list"><span><MapPin/>{location} · {availability}</span><a href={`mailto:${email}`}><Mail/>{email}</a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/>LinkedIn <ArrowUpRight size={14}/></a><a href={github} target="_blank" rel="noreferrer"><Github/>GitHub <ArrowUpRight size={14}/></a></div></div>
      <div id="skills"><Eyebrow>SKILLS & TECHNOLOGIES</Eyebrow><h2 className="sr-only">Skills and technologies</h2>{skillGroups.map(({ title, icon: Icon, skills }) => <div className="skill-card" key={title}><Icon className="skill-icon"/><div><h3>{title}</h3><div className="skill-items">{skills.filter(skill => technologyLogos[skill] || skill === 'Custom Plugins').map(skill => <div className="skill-item" key={skill}>{technologyLogos[skill] ? <img className="tech-logo" src={asset(`tech/${technologyLogos[skill]}.svg`)} alt="" width="40" height="40" loading="lazy"/> : <Puzzle className="tech-logo capability-icon" aria-hidden="true"/>}<span>{skill}</span></div>)}{skills.filter(skill => !technologyLogos[skill] && skill !== 'Custom Plugins').map(skill => <span className="skill-pill" key={skill}>{skill}</span>)}</div></div></div>)}</div>
    </section>
    <section className="journey section" id="experience" aria-labelledby="experience-title"><div className="container"><div className="section-heading"><Eyebrow>MY JOURNEY</Eyebrow><h2 id="experience-title">Experience & Education</h2><p>Five years building production systems, from first API to leading code reviews.</p></div><div className="journey-grid"><article className="timeline-card"><h3><BriefcaseBusiness/>Professional Experience</h3><ol className="timeline">{roles.map(role => <li key={role.title}><span className="date">{role.date}</span><h4>{role.title}</h4><p>Imara Software Solutions · {location}</p><ul className="role-points">{role.points.map(point => <li key={point}>{point}</li>)}</ul></li>)}</ol></article><article className="timeline-card"><h3><GraduationCap/>Education</h3><ol className="timeline"><li><span className="date">2026 · Completed</span><h4>BSc (Hons) Computer Science (Software Engineering)</h4><p>Kingston University (UK) · ESOFT Metro Campus</p></li><li><span className="date">2020</span><h4>Professional Diploma in Web Designing and Development</h4><p>IMTS (Imara Technology Studies)</p></li></ol></article></div></div></section>
    <section className="container section projects" id="projects" aria-labelledby="projects-title">
      <div className="section-heading"><Eyebrow>SELECTED WORK</Eyebrow><h2 id="projects-title">My Projects</h2><p>Web platforms, desktop systems and mobile applications.</p></div>
      <div className="project-filters" role="group" aria-label="Filter projects by platform">{projectFilters.map(filter => <button key={filter} type="button" aria-pressed={projectFilter === filter} aria-controls="project-gallery" onClick={() => { setProjectFilter(filter); setShowAllProjects(false); }}>{filter}<span>{filter === 'All' ? projects.length : projects.filter(project => project.platforms.includes(filter)).length}</span></button>)}</div>
      <p className="sr-only" role="status">Showing {visibleProjects.length} of {filteredProjects.length} {projectFilter === 'All' ? '' : projectFilter + ' '}projects</p>
      <div className="project-grid" id="project-gallery">{visibleProjects.map(project => <ProjectCard key={project.name} project={project}/>)}</div>
      {projectFilter === 'All' && <button className="projects-toggle" aria-expanded={showAllProjects} aria-controls="project-gallery" onClick={() => {
        setShowAllProjects(!showAllProjects);
        if (showAllProjects) document.getElementById('projects')?.scrollIntoView({ block: 'start' });
      }}>{showAllProjects ? 'Show fewer projects' : `Explore ${projects.length - 4} more projects`}<ChevronDown size={18}/></button>}
      <p className="project-note">Client screenshots are shown with private customer data hidden.</p>
    </section>
    <section className="container contact-panel" id="contact" aria-labelledby="contact-title"><div><Eyebrow>GET IN TOUCH</Eyebrow><h2 id="contact-title">Let's build something useful.</h2><p>Hiring for a full-stack, backend, WordPress or mobile role? I'd like to hear about it.</p></div><div className="contact-right"><div className="contact-list"><a href={`mailto:${email}`}><Mail/>{email}</a><span><MapPin/>{location} · {availability}</span><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin/>LinkedIn <ExternalLink size={14}/></a><a href={github} target="_blank" rel="noreferrer"><Github/>GitHub <ExternalLink size={14}/></a></div><a className="button" href={`mailto:${email}?subject=Portfolio%20enquiry`}>Send a Message <Send size={16}/></a></div></section>
    <footer><div className="container footer-top"><a className="brand" href="#home"><span className="monogram">A<span>H</span></span><span>Abdul Hakeem</span></a><nav aria-label="Footer navigation">{links.map(link => <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>)}</nav><div className="socials"><a href={linkedin} aria-label="Abdul Hakeem on LinkedIn" target="_blank" rel="noreferrer"><Linkedin/></a><a href={github} aria-label="Abdul Hakeem on GitHub" target="_blank" rel="noreferrer"><Github/></a><a href={`mailto:${email}`} aria-label="Email Abdul Hakeem"><Mail/></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Abdul Hakeem</span><span>Senior software engineer · Full-stack, WordPress &amp; mobile</span></div></footer>
  </>;
}

