import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const cdacLogo = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Logo_for_the_Centre_for_Development_of_Advanced_Computing.svg";
import { profile, experience, projects, toolbox, leadership } from "./data/portfolio";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Toolbox", "#toolbox"],
  ["Leadership", "#leadership"],
  ["Contact", "#contact"],
];

function IntelligenceCore() {
  const group = useRef(null);
  const mesh = useRef(null);
  const wire = useRef(null);
  const { pointer } = useThree();
  const smoothed = useRef(new THREE.Vector2());

  useFrame((state, delta) => {
    if (!group.current || !mesh.current || !wire.current) return;
    smoothed.current.lerp(pointer, Math.min(delta * 2.4, 1));
    const time = state.clock.elapsedTime;
    group.current.rotation.x = time * 0.08 + smoothed.current.y * 0.14;
    group.current.rotation.y = time * 0.12 + smoothed.current.x * 0.18;
    group.current.position.x = smoothed.current.x * 0.12;
    group.current.position.y = Math.sin(time * 0.75) * 0.07 + smoothed.current.y * 0.08;
    mesh.current.scale.setScalar(1 + Math.sin(time * 0.9) * 0.015);
    wire.current.rotation.z = -time * 0.08;
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, 8]} />
        <meshPhysicalMaterial
          color="#6477ff"
          roughness={0.18}
          metalness={0.55}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transmission={0.05}
          iridescence={0.65}
          iridescenceIOR={1.25}
        />
      </mesh>
      <mesh ref={wire} scale={1.18}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshBasicMaterial color="#62e6f4" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.4], fov: 45 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 5]} intensity={3} color="#dce5ff" />
        <pointLight position={[-3, -1, 3]} intensity={28} distance={10} color="#62e6f4" />
        <pointLight position={[3, -3, 2]} intensity={20} distance={9} color="#ff8a57" />
        <IntelligenceCore />
      </Canvas>
    </div>
  );
}

function SectionHeader({ number, label, title, description }) {
  return (
    <header className="section-header">
      <div className="section-header__meta">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <div className="section-header__copy">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Ashish Ranjan home">
        <span className="brand__signal" />
        <span className="brand__copy">
          <strong>Ashish Ranjan</strong>
          <small>AI · GenAI · XAI · Full-Stack</small>
        </span>
      </a>
      <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span />
        <span />
      </button>
      <nav className={open ? "nav-open" : ""}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="navbar__actions">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={profile.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
      </div>
    </header>
  );
}

function ProjectCaseStudy({ project, active, onSelect }) {
  return (
    <article className={`case-study ${active ? "case-study--active" : ""}`}>
      <button className="case-study__selector" type="button" onClick={onSelect} aria-expanded={active}>
        <span>{project.number}</span>
        <div>
          <strong>{project.title}</strong>
          <small>{project.category}</small>
        </div>
        <span>{active ? "−" : "+"}</span>
      </button>

      <div className="case-study__content">
        <div className="case-study__hero">
          <div>
            <span className="case-study__eyebrow">{project.category}</span>
            <h3>{project.title}</h3>
            <p className="case-study__full">{project.fullTitle}</p>
          </div>
          <div className="case-study__links">
            <a href={project.github} target="_blank" rel="noreferrer">GitHub repository ↗</a>
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>
            ) : (
              <span>Live URL pending</span>
            )}
          </div>
        </div>

        <div className="case-study__matrix">
          <section><span>Problem</span><p>{project.problem}</p></section>
          <section><span>Target users</span><p>{project.users}</p></section>
          <section><span>System architecture</span><p>{project.architecture}</p></section>
          <section><span>AI / intelligence layer</span><p>{project.intelligence}</p></section>
          <section><span>My contribution</span><p>{project.contribution}</p></section>
          <section><span>Impact</span><p>{project.impact}</p></section>
        </div>

        <div className="case-study__footer">
          <div>
            <span className="micro-label">Core capabilities</span>
            <div className="tag-list">
              {project.features.map((feature) => <span key={feature}>{feature}</span>)}
            </div>
          </div>
          <div>
            <span className="micro-label">Technical stack</span>
            <div className="tag-list tag-list--muted">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const appRef = useRef(null);
  const [activeProject, setActiveProject] = useState("forge");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray(".section-header, .scroll-reveal").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: "top 84%" },
          opacity: 0,
          y: 36,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, appRef);
    return () => context.revert();
  }, []);

  return (
    <div ref={appRef} className="site-shell">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__noise" aria-hidden="true" />
          <div className="ambient-orb ambient-orb--one" aria-hidden="true" />
          <div className="ambient-orb ambient-orb--two" aria-hidden="true" />
          <div className="signal-ring signal-ring--one" aria-hidden="true" />
          <div className="signal-ring signal-ring--two" aria-hidden="true" />
          <HeroVisual />
          <div className="hero__content">
            <div className="availability hero-reveal"><span />Available for AI, GenAI, software and research opportunities</div>
            <p className="hero__hello hero-reveal">Hi, I’m Ashish Ranjan.</p>
            <h1 className="hero-reveal">I build intelligent systems from <span>model experimentation to production experience.</span></h1>
            <p className="hero__summary hero-reveal">
              B.Tech Computer Science student with a minor in AI & ML and a Software Engineering Intern working across Artificial Intelligence, Generative AI, Explainable AI, multimodal learning, model experimentation and tuning, NLP, computer vision, production APIs and full-stack engineering.
            </p>
            <div className="hero__actions hero-reveal">
              <a className="button button--primary" href="#projects">Explore Projects</a>
              <a className="button button--secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="button button--secondary" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
              <a className="button button--secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="hero__footer hero-reveal">
              <span>AI Engineering · GenAI · XAI · Full-Stack · System Design</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </section>

        <div className="focus-marquee" aria-label="Areas of expertise">
          <div>
            <span>Artificial Intelligence</span><i />
            <span>Generative AI</span><i />
            <span>Explainable AI</span><i />
            <span>Multimodal ML</span><i />
            <span>Model Tuning</span><i />
            <span>NLP</span><i />
            <span>Computer Vision</span><i />
            <span>Full-Stack Systems</span><i />
            <span>Artificial Intelligence</span><i />
            <span>Generative AI</span><i />
            <span>Explainable AI</span><i />
            <span>Multimodal ML</span><i />
          </div>
        </div>

        <section id="about" className="section">
          <SectionHeader
            number="01"
            label="About"
            title="I work where machine learning becomes a reliable product."
            description="My role is broader than training a model or writing a frontend. I connect experimentation, engineering, interfaces and deployment into a complete experience."
          />
          <div className="about-grid">
            <article className="about-primary scroll-reveal">
              <span className="micro-label">How I build</span>
              <p>
                I work across data preparation, feature engineering, model comparison, hyperparameter tuning, evaluation, explainability, backend APIs, frontend interfaces, databases and deployment. I care about the entire journey from an experiment to a usable system.
              </p>
            </article>
            <article className="about-secondary scroll-reveal">
              <span className="micro-label">AI focus</span>
              <p>Generative AI, multimodal learning, Explainable AI, NLP, computer vision, audio intelligence and hybrid machine-learning pipelines.</p>
            </article>
            <article className="about-secondary scroll-reveal">
              <span className="micro-label">Engineering focus</span>
              <p>FastAPI services, React and Next.js products, authentication, role-based systems, data architecture, analytics, Docker and cloud deployment.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeader
            number="02"
            label="Experience"
            title="Applied AI research inside a national R&D environment."
            description="My internship at C-DAC CINE combined multimodal AI, XAI, model engineering, software architecture and investigator-oriented visualisation."
          />

          <article className="experience scroll-reveal">
            <aside className="experience__identity">
              <div className="cdac-mark">
                <img src={cdacLogo} alt="C-DAC institutional logo" />
              </div>
              <span className="experience__period">{experience.period}</span>
              <h3>{experience.role}</h3>
              <p>{experience.organisation}</p>
              <small>{experience.ministry}</small>
              <small>{experience.location}</small>
            </aside>

            <div className="experience__content">
              <p className="experience__summary">{experience.summary}</p>
              <div className="experience__metrics">
                {experience.metrics.map(([value, label]) => (
                  <div key={label}><strong>{value}</strong><span>{label}</span></div>
                ))}
              </div>
              <div className="experience__list">
                {experience.achievements.map((item, index) => (
                  <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="projects" className="section section--projects">
          <SectionHeader
            number="03"
            label="Selected systems"
            title="Case studies with research depth, architecture and operational weight."
            description="Each project is presented through the problem, users, architecture, intelligence layer, my contribution and practical impact."
          />
          <div className="case-study-list">
            {projects.map((project) => (
              <ProjectCaseStudy
                key={project.id}
                project={project}
                active={activeProject === project.id}
                onSelect={() => setActiveProject(project.id)}
              />
            ))}
          </div>
        </section>

        <section id="toolbox" className="section">
          <SectionHeader
            number="04"
            label="Toolbox"
            title="The languages, models, libraries and frameworks behind my work."
            description="Grouped by actual use rather than presented as an undifferentiated list."
          />
          <div className="toolbox">
            {toolbox.map(([category, items], index) => (
              <article className="toolbox__row scroll-reveal" key={category}>
                <div className="toolbox__heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{category}</h3>
                </div>
                <div className="toolbox__items">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="leadership" className="section">
          <SectionHeader
            number="05"
            label="Leadership & communication"
            title="Experience that strengthens how I reason, communicate and execute."
            description="These roles shape how I build arguments, coordinate teams, understand audiences and turn ideas into organised initiatives."
          />
          <div className="leadership">
            {leadership.map((item, index) => (
              <article className="leadership__row scroll-reveal" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="leadership__role">{item.role}</p>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <strong>{item.value}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact__top">
            <span>06 · Contact</span>
            <span>Open to meaningful opportunities</span>
          </div>
          <h2>Let’s build an intelligent system <span>that creates measurable value.</span></h2>
          <div className="contact__bottom">
            <p>Open to software-engineering internships, AI and GenAI roles, ML research, explainability work, full-stack product engineering and technical collaborations.</p>
            <div>
              <a href={`mailto:${profile.email}`}>Email ↗</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed and built by Ashish Ranjan.</p>
        <p>AI · GenAI · XAI · Full-Stack Engineering</p>
      </footer>
    </div>
  );
}
