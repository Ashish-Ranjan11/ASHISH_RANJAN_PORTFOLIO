import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Ashish Ranjan",
  title: "Software Engineering Intern | AI & Digital Forensics Developer",
  email: "ashishranjan1109@gmail.com",
  github: "https://github.com/Ashish-Ranjan11",
  linkedin: "https://www.linkedin.com/in/ashish-ranjan-77a422371/",
  resume: "/resume.pdf"
};

const domains = [
  "Artificial Intelligence",
  "Generative AI",
  "LLMs",
  "Explainable AI",
  "Digital Forensics",
  "Deepfake Detection",
  "Full-Stack Development",
  "Healthcare Technology",
];

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "SQL",
  "React",
  "FastAPI",
  "Flask",
  "REST APIs",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Deep Learning",
  "NLP",
  "Feature Engineering",
  "CNN-BiLSTM",
  "EfficientNetB0",
  "SBERT",
  "TF-IDF",
  "SHAP XAI",
  "LFCC",
  "Grad-CAM",
  "OCR",
  "Audio Forensics",
  "Image Forensics",
  "Text Forensics",
  "Linux",
  "Git",
  "GitHub",
  "Google Colab",
  "Kaggle",
];

const projects = [
  {
    title: "F.O.R.G.E.",
    label: "Flagship AI Forensics System",
    description:
      "A multimodal AI forensic system for analysing text, image, and audio evidence using explainable AI, forensic parameters, heatmaps, and automated legal-style reporting.",
    points: [
      "Text forensics using stylometric analysis, TF-IDF, N-Gram scoring, SBERT embeddings, and SHAP-based explainability.",
      "Image forensics using EfficientNetB0, Random Forest fusion, and Grad-CAM visual heatmaps.",
      "Synthetic speech detection using CNN-BiLSTM with LFCC-based audio feature extraction.",
      "OCR-based document processing for DOCX, PDF, TXT, and forensic evidence artifacts.",
    ],
    stack: ["React", "FastAPI", "Python", "SHAP", "Grad-CAM", "SBERT", "LFCC", "OCR"],
    github: "https://github.com/Ashish-Ranjan11/F.O.R.G.E",
    live: "#",
  },
  {
    title: "ASHA CONNECT",
    label: "Healthcare Workflow Platform",
    description:
      "A healthcare workflow automation platform designed for ASHA workers, PHC admins, supervisors, and beneficiaries to improve rural medical service accessibility.",
    points: [
      "Built role-based dashboards for ASHA workers, PHC administrators, and supervisors.",
      "Designed field-to-centre reporting workflows and healthcare data exchange pipelines.",
      "Focused on maternal-child health tracking, visits, referrals, records, and emergency workflows.",
      "Created database-driven architecture for healthcare monitoring and service optimisation.",
    ],
    stack: ["React", "FastAPI", "Flask", "PostgreSQL", "MongoDB", "REST APIs"],
    github: "https://github.com/Ashish-Ranjan11/ASHACONNECT",
    live: "#",
  },
  {
    title: "Digi-Darshan",
    label: "Smart India Hackathon Project",
    description:
      "A real-time crowd management system designed for safer pilgrimage and large-event movement monitoring under Smart India Hackathon.",
    points: [
      "Developed real-time crowd data pipelines for high-throughput environments.",
      "Implemented low-latency WebSocket updates for live monitoring.",
      "Designed scalable backend architecture for peak-load responsiveness.",
      "Led task distribution, project execution, and development workflow.",
    ],
    stack: ["Python", "Flask", "WebSockets", "PostgreSQL", "System Design"],
    github: "#",
    live: "#",
  },
];

const leadership = [
  {
    title: "MUN Diplomat",
    text: "I occasionally participate in Model United Nations, where I work on diplomacy, geopolitical research, policy framing, and structured international debate.",
  },
  {
    title: "Public Speaker",
    text: "I enjoy presenting ideas, explaining technical systems, and speaking on topics that combine technology, society, leadership, and impact.",
  },
  {
    title: "Co-Lead, Debating Society",
    text: "As a debating society co-lead, I contribute to argument building, public discussion, event participation, and team coordination.",
  },
  {
    title: "Executive Director, Cinema Club",
    text: "As Executive Director of my college cinema club, I work around creative direction, storytelling, content planning, and visual communication.",
  },
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <BeyondAcademics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        Ashish Ranjan
      </a>

      <nav>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#beyond">Beyond</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="eyebrow">AI • Digital Forensics • Full-Stack Systems</p>

        <h1>Building AI systems that are useful, explainable, and real-world ready.</h1>

        <p className="hero-text">
          I’m <strong>{profile.name}</strong>, a B.Tech Computer Science student with a minor specialisation in AI & ML
            at Sikkim Manipal Institute of Technology. I like working on projects where
            software is not just a screen, but a complete system — data, models, APIs,
            interfaces, workflows, and user-facing decisions.
            <p>
            My interests sit around forensic computing, intelligent automation, language
            technologies, explainable decision systems, backend engineering, and products
            built for social or institutional use. I enjoy taking complex pipelines and
            converting them into clean, understandable tools that people can actually use.
          </p>
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href={profile.resume} className="btn secondary" target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a href={profile.linkedin} className="btn ghost" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="domain-card">
        <p className="card-label">Working Domains</p>
        <h2>Where my work is focused</h2>
        <p>
          My current direction combines AI research pipelines with deployable software,
          especially in digital forensics, explainable intelligence, and social-impact systems.
        </p>

        <div className="domain-list">
          {domains.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <span>Experience</span>
        <h2>Hands-on professional work in AI forensics.</h2>
      </div>

      <article className="experience-card">
        <div className="experience-left">
          <p className="date">May 2026 – Present</p>
          <h3>Software Engineering Intern</h3>
          <h4>C-DAC, CINE – MeitY</h4>
          <p>IIT Guwahati Research Park, Assam</p>
        </div>

        <div className="experience-right">
        
          <p>
  Contributing to <strong>F.O.R.G.E. — Forensic Observation and Recognition Gateway for Emerging Generative Exploits</strong>,
  a multimodal deepfake threat intelligence system developed as part of the National Cyber Forensics Console. The work
  involves engineering advanced text, image, and audio forensic pipelines that transform complex evidence signals into
  explainable, investigation-ready outputs for emerging digital threat analysis.
</p>
        

          <div className="experience-grid">
            <div>
              <strong>Text Forensics</strong>
              <span>Stylometry, TF-IDF, SBERT, N-Gram scoring, SHAP heatmaps</span>
            </div>
            <div>
              <strong>Image Forensics</strong>
              <span>EfficientNetB0, Random Forest fusion, Grad-CAM visual reasoning</span>
            </div>
            <div>
              <strong>Audio Forensics</strong>
              <span>CNN-BiLSTM with LFCC feature extraction for synthetic speech</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span>About Me</span>
        <h2>A developer interested in AI, intelligence systems, and impact-driven software.</h2>
      </div>

      <div className="about-layout">
        <div className="about-main">
          <h3>Who I Am</h3>
          <p>
            I am a B.Tech Computer Science student with a minor specialisation in AI & ML
            at Sikkim Manipal Institute of Technology. I like building systems that combine
            machine learning, backend engineering, clean interfaces, and real-world usability.
          </p>

          <p>
            My strongest areas of interest are Artificial Intelligence, Generative AI, Large
            Language Models, Explainable AI, digital forensics, and full-stack product
            development. I am especially interested in systems where AI decisions need to be
            interpreted, justified, visualised, and converted into useful user-facing outputs.
          </p>
        </div>

        <div className="about-side">
          <div>
            <h4>Current Focus</h4>
            <p>Multimodal forensic intelligence systems for text, image, and audio analysis.</p>
          </div>

          <div>
            <h4>Technical Direction</h4>
            <p>AI + XAI + backend APIs + interactive dashboards + practical deployment.</p>
          </div>

          <div>
            <h4>Impact Areas</h4>
            <p>Cyber forensics, healthcare accessibility, crowd management, and public-interest technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span>Skills</span>
        <h2>Tools and technologies I work with.</h2>
      </div>

      <div className="skills-cloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span>Projects</span>
        <h2>Selected systems that represent my work.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span>{project.label}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-points">
              {project.points.map((point) => (
                <div key={point}>✓ {point}</div>
              ))}
            </div>

            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noreferrer">Live / Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BeyondAcademics() {
  return (
    <section id="beyond" className="section">
      <div className="section-heading">
        <span>Beyond Academics</span>
        <h2>Leadership, communication, debate, and creative direction.</h2>
      </div>

      <div className="beyond-grid">
        {leadership.map((item) => (
          <div className="beyond-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s connect.</h2>
        <p>
          Reach out for collaborations, internships, technical discussions, hackathons,
          AI projects, digital forensics, or full-stack development opportunities.
        </p>

        <div className="contact-buttons">
          <a href={`mailto:${profile.email}`} className="btn primary">Email Me</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn secondary">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn ghost">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Ashish Ranjan. Built with React.</p>
      <div>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);