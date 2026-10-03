import { useEffect, useState } from "react";
import "./App.css";

// To add your photo, put portrait.jpg in public/ and set photo to 'portrait.jpg'.
// Personalize your details here. No additional packages are needed.
const PROFILE = {
  name: "Mohammad Sarfaraz Hussain",
  role: "Full Stack Software Engineer",
  location: "Houston, Texas",
  email: "m.s.hussain@outlook.com",
  phone: "+15126059034",
  phoneLabel: "(512) 605-9034",
  github: "https://github.com/MSarfarazH",
  linkedin: "https://www.linkedin.com/in/therealmshussain/",
  resume:
    "https://1drv.ms/b/c/229b4db9680049bc/IQCj7lnuG8ndR75OQC_93dLkAc0V0Fn3NfK0kUElb7R5w1c?e=UrIj7t",
  photo: "",
};
const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "resume", label: "Résumé", icon: "file" },
  { id: "portfolio", label: "Portfolio", icon: "grid" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "contact", label: "Contact", icon: "mail" },
];
const PROJECTS = [
  {
    title: "Employee Database",
    category: "Tools",
    icon: "database",
    description:
      "An employee management project built around organizing and maintaining workplace records.",
    repo: "employee-database",
    number: "01",
  },
  {
    title: "Budget Tracker",
    category: "Applications",
    icon: "chart",
    description:
      "A personal budgeting project for keeping income, expenses, and everyday finances in view.",
    repo: "budget-tracker",
    number: "02",
  },
  {
    title: "Tech Blog App",
    category: "Applications",
    icon: "file",
    description:
      "A technology blog project for publishing ideas and sharing development knowledge.",
    repo: "tech-blog-app",
    number: "03",
  },
  {
    title: "Work Day Scheduler",
    category: "Tools",
    icon: "calendar",
    description:
      "A daily planning tool for organizing tasks and making a busy workday easier to manage.",
    repo: "work-day-scheduler",
    number: "04",
  },
  {
    title: "Workout Tracker",
    category: "Applications",
    icon: "activity",
    description:
      "A fitness tracking project for keeping workout records organized in one place.",
    repo: "workout-tracker",
    number: "05",
  },
];
const ICONS = {
  home: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h5v-6h4v6h5V9" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H6v18h12V7Z" />
      <path d="M14 3v5h4M9 12h6M9 16h6" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </>
  ),
  external: (
    <>
      <path d="M14 3h7v7m0-7L10 14" />
      <path d="M10 3H3v18h18v-7" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M6 18 18 6" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  phone: (
    <>
      <path d="m5 3 4 5-2 3a16 16 0 0 0 6 6l3-2 5 4c-1 3-3 3-5 2C8 19 5 16 3 8 2 6 2 4 5 3Z" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 11h18m-14 4h3m4 0h3" />
    </>
  ),
  activity: (
    <>
      <path d="M2 12h5l3-8 4 16 3-8h5" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  github: (
    <>
      <path d="M9 21v-4c-4 1-4-2-6-2m15 6v-4c0-1-.4-2-1-2 3-.4 5-2 5-5 0-2-.7-3-2-4 .3-1 .3-3 0-4-2 0-3 1-4 2-2-.5-4-.5-6 0-1-1-2-2-4-2-.3 1-.3 3 0 4-1.3 1-2 2-2 4 0 3 2 4.6 5 5-.6 0-1 1-1 2" />
    </>
  ),
};
function Icon({ name, className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.code}
    </svg>
  );
}
function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
function SocialLinks() {
  return (
    <div className="social-links">
      <ExternalLink href={PROFILE.github} aria-label="GitHub profile">
        <Icon name="github" />
      </ExternalLink>
      <ExternalLink href={PROFILE.linkedin} aria-label="LinkedIn profile">
        <Icon name="linkedin" />
      </ExternalLink>
      <a href={`mailto:${PROFILE.email}`} aria-label="Send an email">
        <Icon name="mail" />
      </a>
    </div>
  );
}
function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}
function Portrait() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="portrait-wrap">
      <div className="portrait-card">
        {PROFILE.photo && !failed ? (
          <img
            src={`${process.env.PUBLIC_URL}/${PROFILE.photo}`}
            alt={PROFILE.name}
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="portrait-monogram"
            aria-label="Mohammad Sarfaraz Hussain initials"
          >
            <span className="portrait-grid" />
            <span className="monogram">
              MSH<span>.</span>
            </span>
            <span className="portrait-caption">IDEAS TO INTERFACES.</span>
          </div>
        )}
        <span className="portrait-label">
          <span className="status-dot" /> {PROFILE.role}
        </span>
      </div>
      <span className="portrait-note">
        Thoughtful code. Useful experiences.
      </span>
    </div>
  );
}
function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -45% 0px", threshold: [0, 0.1, 0.5] },
    );
    NAV.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    }
    if (menuOpen) document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  function navigate(id) {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  }
  const visibleProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="mobile-header">
        <a
          className="wordmark"
          href="#home"
          onClick={() => navigate("home")}
          aria-label="Mohammad Sarfaraz Hussain home"
        >
          MSH<span>.</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>
      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <a
          className="wordmark sidebar-brand"
          href="#home"
          aria-label="Mohammad Sarfaraz Hussain home"
          onClick={() => navigate("home")}
        >
          MSH<span>.</span>
        </a>
        <nav id="main-navigation" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? "is-active" : ""}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => navigate(item.id)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              <span className="nav-indicator" />
            </a>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <SocialLinks />
          <span className="sidebar-caption">LET’S BUILD SOMETHING.</span>
        </div>
      </aside>
      <main id="main-content" tabIndex="-1">
        <section
          id="home"
          className="hero section"
          tabIndex="-1"
          aria-labelledby="hero-title"
        >
          <div className="ambient-orb orb-one" />
          <div className="ambient-orb orb-two" />
          <div className="hero-copy">
            <p className="eyebrow">
              {PROFILE.location} <span className="eyebrow-divider" /> SOFTWARE
              ENGINEER PORTFOLIO
            </p>
            <h1 id="hero-title">
              My Portfolio<span className="hero-period">.</span>
            </h1>
            <p className="hero-name">{PROFILE.name}</p>
            <p className="hero-role">
              I’m a <span>{PROFILE.role}.</span>
            </p>
            <p className="hero-description">
              I develop reliable, maintainable web applications with intuitive
              interfaces and robust backend systems. My focus is practical
              engineering that supports business objectives.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="#portfolio"
                onClick={() => navigate("portfolio")}
              >
                View My Work <Icon name="arrow" />
              </a>
              <a
                className="button button-outline"
                href="#contact"
                onClick={() => navigate("contact")}
              >
                Get in Touch
              </a>
            </div>
            <SocialLinks />
          </div>
          <Portrait />
          <a
            className="scroll-cue"
            href="#about"
            onClick={() => navigate("about")}
          >
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>
        <section
          id="about"
          className="section"
          tabIndex="-1"
          aria-labelledby="about-title"
        >
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={<span id="about-title">The person behind the code.</span>}
          />
          <div className="about-layout">
            <div className="about-copy">
              <p>
                I’m {PROFILE.name}, a full stack software engineer based in
                Houston. I enjoy connecting clean interfaces with the systems
                that make them work.
              </p>
              <p>
                My development experience includes React, the MERN stack, Rails,
                and Python. I value readable code, practical problem-solving,
                and collaboration that moves a project forward.
              </p>
              <a
                className="text-link"
                href="#contact"
                onClick={() => navigate("contact")}
              >
                Let’s connect <Icon name="arrow" />
              </a>
            </div>
            <dl className="profile-details">
              <div>
                <dt>BASED IN</dt>
                <dd>{PROFILE.location}</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Full stack development</dd>
              </div>
              <div>
                <dt>APPROACH</dt>
                <dd>Clear. Practical. Thoughtful.</dd>
              </div>
              <div>
                <dt>EMAIL</dt>
                <dd>
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section
          id="resume"
          className="section"
          tabIndex="-1"
          aria-labelledby="resume-title"
        >
          <SectionHeading
            eyebrow="EXPERIENCE & EDUCATION"
            title={<span id="resume-title">A foundation in building.</span>}
          >
            An overview of my background. View my résumé for the full details.
          </SectionHeading>
          <div className="resume-grid">
            <article className="resume-card">
              <p className="card-label">EXPERIENCE</p>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <h3>Full Stack Software Engineer</h3>
                <p className="timeline-company">Citi</p>
                <p>
                  Experience working on internal software in a professional
                  engineering environment.
                </p>
              </div>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <h3>Technology Analyst</h3>
                <p className="timeline-company">Cognizant</p>
                <p>
                  A background in software development and technology delivery.
                </p>
              </div>
            </article>
            <article className="resume-card">
              <p className="card-label">EDUCATION</p>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <h3>Full Stack Web Development</h3>
                <p className="timeline-company">Trilogy Education</p>
                <p>
                  Project-based training in building web applications across the
                  frontend and backend.
                </p>
              </div>
              <ExternalLink
                className="button button-outline"
                href={PROFILE.resume}
              >
                View My Résumé <Icon name="external" />
              </ExternalLink>
            </article>
          </div>
        </section>
        <section
          id="portfolio"
          className="section"
          tabIndex="-1"
          aria-labelledby="portfolio-title"
        >
          <SectionHeading
            eyebrow="SELECTED PROJECTS"
            title={
              <span id="portfolio-title">From ideas to working code.</span>
            }
          >
            A collection of my development projects. Open a repository to
            explore the code and documentation.
          </SectionHeading>
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {["All", "Applications", "Tools"].map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={filter === category}
                className={filter === category ? "selected" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="sr-only" role="status" aria-live="polite">
            {visibleProjects.length} projects shown
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.repo}>
                <div
                  className={`project-art art-${project.icon}`}
                  aria-hidden="true"
                >
                  <span className="project-number">
                    {project.number} / PROJECT
                  </span>
                  <Icon name={project.icon} />
                  <span className="art-orbit" />
                </div>
                <div className="project-body">
                  <p className="card-label">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ExternalLink
                    className="text-link"
                    href={`${PROFILE.github}/${project.repo}`}
                    aria-label={`View ${project.title} repository`}
                  >
                    View Repository <Icon name="external" />
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="skills"
          className="section"
          tabIndex="-1"
          aria-labelledby="skills-title"
        >
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title={<span id="skills-title">Across the stack.</span>}
          >
            The technologies and practices I bring to a project.
          </SectionHeading>
          <div className="skills-grid">
            {[
              {
                title: "Frontend",
                icon: "code",
                skills: [
                  "React",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Responsive design",
                ],
              },
              {
                title: "Backend & data",
                icon: "database",
                skills: [
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Rails",
                  "Python",
                  "Java",
                ],
              },
              {
                title: "Development",
                icon: "grid",
                skills: [
                  "Git",
                  "GitHub",
                  "Agile collaboration",
                  "Problem-solving",
                ],
              },
            ].map((group) => (
              <article className="skill-card" key={group.title}>
                <Icon name={group.icon} />
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="section contact-section"
          tabIndex="-1"
          aria-labelledby="contact-title"
        >
          <div className="ambient-orb contact-orb" />
          <SectionHeading
            eyebrow="LET’S CONNECT"
            title={<span id="contact-title">Have something in mind?</span>}
          >
            For a software role, a project, or a conversation about technology,
            I’d love to hear from you.
          </SectionHeading>
          <a className="contact-email" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
            <Icon name="arrow" />
          </a>
          <div className="contact-details">
            <a href={`tel:${PROFILE.phone}`}>
              <Icon name="phone" />
              {PROFILE.phoneLabel}
            </a>
            <span>
              <Icon name="pin" />
              {PROFILE.location}
            </span>
            <ExternalLink href={PROFILE.linkedin}>
              <Icon name="linkedin" />
              Connect on LinkedIn <Icon name="external" />
            </ExternalLink>
          </div>
          <p className="contact-note">The email link opens your email app.</p>
        </section>
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <a href="#home" onClick={() => navigate("home")}>
            Back to top ↑
          </a>
        </footer>
      </main>
    </div>
  );
}
export default App;
