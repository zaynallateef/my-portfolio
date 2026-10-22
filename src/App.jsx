import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, ArrowUpRight, Check, Code2, Copy, Download, Github, Linkedin, Mail, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { certificates, experience, profile, projects } from './data/portfolio'
import { ProjectArtwork, RetroScene, Star } from './components/Artwork'

const categories = ['All projects', ...new Set(projects.map((project) => project.category))]

function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    if (!project) return
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
    }
  }, [project])

  return (
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      {project && <div className="dialog-inner">
        <div className="dialog-bar"><span className="mono">PROJECT_FILE / {project.number}</span><button className="icon-button" onClick={onClose} aria-label="Close project details" autoFocus><X size={20} /></button></div>
        <ProjectArtwork kind={project.artwork} />
        <div className="dialog-copy"><span className="eyebrow">{project.type} / {project.category}</span><h2 id="project-title">{project.title}</h2><p>{project.details}</p><h3>The idea</h3><ul>{project.highlights.map((item) => <li key={item}><ArrowRight size={16} />{item}</li>)}</ul><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>{project.note && <p className="project-note">{project.note}</p>}<div className="flex flex-wrap gap-3">{project.liveUrl && <ExternalLink className="button button-dark" href={project.liveUrl}>Visit project <ArrowUpRight size={18} /></ExternalLink>}{project.sourceUrl && <ExternalLink className="button button-paper" href={project.sourceUrl}>Source code <Github size={18} /></ExternalLink>}</div></div>
      </div>}
    </dialog>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = useRef(null)
  const [category, setCategory] = useState('All projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const copyTimer = useRef(null)
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('personal-space-theme') === 'dark' } catch { return false }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#24251f' : '#f5f3eb')
    try { localStorage.setItem('personal-space-theme', dark ? 'dark' : 'light') } catch { /* Theme still works without storage. */ }
  }, [dark])

  useEffect(() => {
    document.title = `${profile.name} — Personal Space`
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', document.title)
    return () => clearTimeout(copyTimer.current)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggle.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const visibleProjects = category === 'All projects' ? projects : projects.filter((project) => project.category === category)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setCopyError(false)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(false), 2500)
    } catch { setCopyError(true) }
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#" className="brand" aria-label={`${profile.name}, back to top`}><span className="brand-mark">{profile.initials}<span>✳</span></span><span className="brand-copy">PERSONAL<br />SPACE<span>®</span></span></a>
          <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Work <span>01</span></a><a href="#about">About <span>02</span></a><a href="#contact">Contact <span>03</span></a></nav>
          <div className="header-actions"><button className="theme-toggle" aria-label="Dark mode" aria-pressed={dark} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark((current) => !current)}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button><a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={17} /></a><button ref={menuToggle} className="mobile-toggle icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
        {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{['Work', 'About', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={20} /></a>)}</nav>}
      </header>

      <main id="main">
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="hello-label"><span className="tiny-dot" /> HELLO, INTERNET. <span>✳</span></div>
            <p className="hero-eyebrow mono">{profile.role} / A CURIOUS HUMAN</p>
            <h1 id="hero-heading">Big ideas.<br />Bold <span className="pixel-word">pixels<svg viewBox="0 0 340 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12Q160-2 334 8M32 15Q210 3 318 12" fill="none" stroke="currentColor" strokeWidth="4" /></svg></span><span className="title-period">.</span></h1>
            <p className="hero-intro">I’m <strong>{profile.name}</strong>. {profile.intro}</p>
            <div className="hero-buttons"><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={21} /></a><a className="text-link" href="#about">A little about me <ArrowRight size={18} /></a></div>
            <div className="hero-footnote"><span className="asterisk">✳</span><span>BUILT WITH INTENTION. ALWAYS A WORK IN PROGRESS.</span></div>
          </div>
          <RetroScene />
          <div className="hero-bottom"><span className="mono">PERSONAL SPACE / VOL. 01</span><a href="#work" className="scroll-prompt">SCROLL TO EXPLORE <ArrowDown size={14} /></a></div>
        </section>

        <div className="ticker"><span className="sr-only">Good design, clean code, endless curiosity, and a little bit of chaos.</span><div className="ticker-track" aria-hidden="true">{[0, 1].map((copy) => <div className="ticker-group" key={copy}><span>GOOD DESIGN</span><Star /><span>CLEAN CODE</span><Star /><span>ENDLESS CURIOSITY</span><Star /><span>A LITTLE BIT OF CHAOS</span><Star /></div>)}</div></div>

        <section id="work" className="work-section shell section-space" aria-labelledby="work-heading">
          <div className="section-topline"><span className="eyebrow">01 / SELECTED WORK</span><span className="mono side-note">IDEAS BROUGHT TO LIFE ↙</span></div>
          <div className="section-heading-row"><h2 id="work-heading">Curiosity, <span className="serif-word">put to work.</span></h2><p>Language, data, and a few good questions.<br />A selection of things I’ve been building.</p></div>
          {profile.isTemplate && <p className="sample-notice"><span className="tiny-dot" /> A preview of what’s possible — these are sample projects.</p>}
          <div className="filter-row" role="group" aria-label="Filter projects by category">{categories.map((item) => <button key={item} className={`filter-button ${category === item ? 'is-active' : ''}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}{item === 'All projects' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div>
          <p className="sr-only" role="status">Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}.</p>
          <div className="projects-grid">{visibleProjects.map((project) => <article className="project-card" key={project.id}>
            <ProjectArtwork kind={project.artwork} />
            <div className="project-copy"><div className="project-meta"><span>{project.type}</span><span>/{project.number}</span></div><h3><button className="project-open" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title} details`}>{project.title}<span className="project-arrow"><ArrowUpRight size={21} /></span></button></h3><p>{project.description}</p><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
          </article>)}{category === 'All projects' && <a className="github-project-card" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={33} /><span className="eyebrow">THE REST OF THE RABBIT HOLE</span><h3>There’s more<br /><span className="serif-word">where that came from.</span></h3><p>Follow the experiments, explore the code,<br />and see what I’m building next.</p><span className="github-card-link">Explore my GitHub <ArrowUpRight size={20} /></span><Star className="github-card-star" aria-hidden="true" /></a>}</div>
          <div className="work-bottom"><span>ALWAYS EXPERIMENTING. ALWAYS LEARNING.</span><Code2 size={18} /><span>MORE GOOD THINGS TO COME.</span></div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-heading"><div className="shell about-grid">
          <div className="about-visual"><div className="id-card"><div className="id-card-top"><span>THE HUMAN BEHIND THE PIXELS</span><span>↗</span></div><div className="id-card-center"><div className="avatar-blob"><span className="avatar-eyes">• •</span><span className="avatar-mouth">⌣</span></div><Star className="id-star" /><span className="id-code">ID: CREATIVE_HUMAN</span></div><div className="id-card-bottom"><strong>{profile.name}</strong><span>{profile.role}</span><div className="id-location"><span className="tiny-dot" /> {profile.location}</div></div><div className="id-barcode" /></div><span className="about-sticker">A LITTLE<br /><strong>DIFFERENT.</strong><Sparkles size={20} /></span><span className="handwritten">Yep, that’s me. (Sort of.)</span></div>
          <div className="about-copy"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><h2 id="about-heading">Serious about craft.<br /><span className="serif-word">Curious about everything.</span></h2>{profile.about.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="skills-block"><h3 className="mono">MY CREATIVE TOOLKIT</h3><div className="flex flex-wrap gap-2">{profile.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></div><div className="currently"><span className="tiny-dot" /><span><b>CURRENTLY</b> {profile.currently}</span></div>{profile.resume && <a className="text-link resume-link" href={profile.resume} download>Download my résumé <Download size={18} /></a>}</div>
        </div></section>

        <section className="interests-strip shell" aria-label="Things I enjoy"><span className="mono">A FEW THINGS I’M INTO</span><div>{profile.interests.map((interest) => <span key={interest}><Star />{interest}</span>)}</div></section>

        <section className="journey-section shell" aria-labelledby="journey-heading"><div className="section-topline"><span className="eyebrow">THE LEARNING NEVER STOPS</span><span className="mono side-note">IN PROGRESS, ON PURPOSE.</span></div><h2 id="journey-heading">Learning by <span className="serif-word">doing.</span></h2><div className="journey-grid"><article className="experience-card"><span className="eyebrow">EXPERIENCE / 2026</span><h3>{experience.title}</h3><p className="experience-company">{experience.company}</p><span className="experience-period mono">{experience.period}</span><p>{experience.description}</p><ArrowUpRight className="experience-arrow" aria-hidden="true" /></article><div className="credentials"><h3 className="mono">COURSES & CREDENTIALS</h3>{certificates.map((certificate, index) => <ExternalLink className="credential-link" href={certificate.url} key={certificate.url}><span className="credential-index mono">0{index + 1}</span><span><strong>{certificate.title}</strong><span>{certificate.provider} · View credential</span></span><ArrowUpRight size={20} /></ExternalLink>)}</div></div></section>

        <section id="contact" className="contact-section shell" aria-labelledby="contact-heading"><div className="contact-panel"><div className="contact-top"><span className="eyebrow">03 / SAY HELLO</span><span className="mono">GOOD THINGS START WITH A CONVERSATION.</span></div><div className="contact-content"><div><h2 id="contact-heading">Got an idea?<br />Let’s make it <span className="serif-word">a thing.</span></h2><p>A project, a possibility, or just a friendly hello.<br />My inbox is a good place to start.</p></div><div className="contact-star" aria-hidden="true"><Star /><ArrowUpRight /></div></div><div className="contact-bottom"><div className="email-actions">{profile.email ? <><a className="button button-dark contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={20} /></a><button className="icon-button copy-button" onClick={copyEmail} aria-label={copied ? 'Email copied' : 'Copy email address'}>{copied ? <Check size={20} /> : <Copy size={20} />}</button></> : <div className="contact-placeholder"><Mail size={22} /><span>Your email goes here<span>Add your contact details to make this space yours.</span></span></div>}<span className="copy-status" role="status">{copied ? 'Copied!' : copyError ? `Copy manually: ${profile.email}` : ''}</span></div><div className="social-links">{profile.github && <ExternalLink href={profile.github}><Github size={17} /> GitHub <ArrowUpRight size={15} /></ExternalLink>}{profile.linkedin && <ExternalLink href={profile.linkedin}><Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></ExternalLink>}{!profile.github && !profile.linkedin && <span className="mono">YOUR NEXT CHAPTER STARTS HERE ↗</span>}</div></div></div></section>
      </main>

      <footer className="shell site-footer"><a className="footer-name" href="#">{profile.initials}<span>✳</span></a><p>© {new Date().getFullYear()} {profile.name}<span>MADE WITH CURIOSITY & A LITTLE CAFFEINE.</span></p><a href="#" className="back-top">BACK TO TOP <ArrowUp size={16} /></a></footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default App
