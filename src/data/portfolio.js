export const profile = {
  name: "Ashish Ranjan",
  email: "ashishranjan1109@gmail.com",
  location: "India",
  github: "https://github.com/Ashish-Ranjan11",
  linkedin: "https://www.linkedin.com/in/ashish-ranjan-77a422371/",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
};

export const experience = {
  organisation: "Centre for Development of Advanced Computing, C-DAC CINE",
  ministry: "Ministry of Electronics and Information Technology",
  location: "IIT Guwahati Research Park, Assam",
  role: "Software Engineering Intern",
  period: "2026",
  summary:
    "Developed F.O.R.G.E., a production-oriented multimodal Explainable AI framework that combines text, image and audio intelligence with a designed video-forensics extension. My work covered model experimentation, hybrid feature engineering, model serving, interpretability, interface design, evidence reporting and deployment.",
  achievements: [
    "Compared candidate models using predictive performance, generalisation, explainability, latency and deployment practicality.",
    "Applied model tuning, transfer learning, feature scaling, confidence calibration and hybrid fusion of handcrafted and deep features.",
    "Built FastAPI inference services with persistent model loading, file validation, preprocessing, error handling and structured responses.",
    "Integrated SHAP, Grad-CAM, sentence highlighting, waveform visualisation, segment-level analysis and parameter reasoning.",
    "Designed evidence-integrity metadata including SHA-256 hashing and consistent investigator-oriented verdict views.",
    "Containerised frontend and backend deployment flows with Docker and Docker Compose.",
  ],
  metrics: [
    ["03", "deployed media modules"],
    ["94%", "approx. image validation accuracy"],
    ["04", "modalities in the complete architecture"],
  ],
};

export const projects = [
  {
    id: "forge",
    number: "01",
    title: "F.O.R.G.E.",
    fullTitle: "Forensic Observation and Recognition Gateway for Emerging Generative Exploits",
    category: "Multimodal Explainable AI",
    github: "https://github.com/Ashish-Ranjan11/F.O.R.G.E",
    live: "",
    problem:
      "Generative models can produce convincing text, images and speech, while many detection tools remain single-modality black boxes that offer little evidence behind a prediction.",
    users:
      "Digital investigators, cybersecurity teams, researchers, journalists and organisations that need interpretable authenticity analysis.",
    architecture:
      "A React investigation interface communicates with modular FastAPI services. Each media engine performs validation, preprocessing, feature extraction, model inference, explainability generation and structured reporting.",
    intelligence:
      "Text uses stylometry, TF-IDF, N-grams, SBERT and Random Forest. Image uses EfficientNet-B0, 48 forensic parameters, feature fusion and Grad-CAM. Audio uses LFCC, CNN-BiLSTM and 27 acoustic parameters. Video is designed around RetinaFace, EfficientNet and BiLSTM temporal modelling.",
    contribution:
      "Designed and implemented the multimodal architecture, model pipelines, XAI layer, APIs, dashboard interactions, confidence and risk presentation, evidence metadata and deployment structure.",
    impact:
      "Transforms model probabilities into understandable evidence through highlighted sentences, heatmaps, waveforms, risk timelines, feature reasoning and integrity metadata.",
    features: [
      "Text Intelligence",
      "Image Intelligence",
      "Audio Intelligence",
      "Video Architecture",
      "SHAP explanations",
      "Grad-CAM heatmaps",
      "Sentence-level analysis",
      "Waveform and segment risk",
      "SHA-256 evidence integrity",
      "Docker deployment",
    ],
    stack: ["Python", "FastAPI", "React", "TensorFlow", "Scikit-learn", "SBERT", "SHAP", "Grad-CAM", "EfficientNet-B0", "CNN-BiLSTM", "LFCC", "Random Forest", "OpenCV", "Docker"],
  },
  {
    id: "asha",
    number: "02",
    title: "ASHA CONNECT",
    fullTitle: "Responsive Rural Healthcare Operations Platform",
    category: "Public-service workflow engineering",
    github: "https://github.com/Ashish-Ranjan11/ASHACONNECT",
    live: "",
    problem:
      "ASHA workers depend heavily on manual registers and fragmented communication, making beneficiary tracking, maternal-health follow-up and PHC supervision difficult.",
    users:
      "ASHA workers operating in the field, beneficiaries, PHC administrators and healthcare supervisors.",
    architecture:
      "A responsive React browser experience connects to authenticated FastAPI services and structured SQLAlchemy models. Role-aware APIs separate field workflows from administrative supervision.",
    intelligence:
      "Operational intelligence is built around beneficiary status, maternal and child-health journeys, worker-to-PHC mapping, supervision signals and clear next actions rather than a generic dashboard.",
    contribution:
      "Designed role models, authentication, beneficiary workflows, responsive interfaces and a scalable backend direction suitable for PostgreSQL and future multilingual support.",
    impact:
      "Reduces manual friction while making field activity visible, structured and easier to supervise in phone-browser and low-bandwidth settings.",
    features: [
      "ASHA-first workflows",
      "Beneficiary management",
      "Maternal and child health",
      "PHC and village mapping",
      "SOS support",
      "Role-based dashboards",
      "JWT authentication",
      "Multilingual readiness",
      "Phone-browser accessibility",
      "Low-network design",
    ],
    stack: ["React", "Vite", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT", "REST APIs", "Responsive Design"],
  },
  {
    id: "digi",
    number: "03",
    title: "DIGI-DARSHAN",
    fullTitle: "AI-Assisted Crowd and Pilgrimage Operations System",
    category: "Real-time operations and analytics",
    github: "https://github.com/Ashish-Ranjan11/Digi_Darshan",
    live: "",
    problem:
      "Large temples need more than booking. They require capacity planning, real-time visibility, visitor assistance and coordinated action across many operational roles.",
    users:
      "Pilgrims, scanners, kiosk operators, volunteers, control-room operators, temple administrators, super-admins, VIP coordinators and government stakeholders.",
    architecture:
      "Next.js role interfaces connect to FastAPI services for authentication, booking, analytics, crowd simulation, prediction and control actions, with PostgreSQL-ready persistence and real-time update pathways.",
    intelligence:
      "Temple-specific command centres combine heatmaps, crowd states, predictive panels, automated slots, operational overrides and assistant workflows such as Digi Sathi and Senior Sathi.",
    contribution:
      "Developed the multi-role architecture, booking and slot direction, analytics services, prediction panels, control-action workflows and separate operational experiences for temples and users.",
    impact:
      "Provides a scalable foundation for safer crowd movement, clearer pilgrim decisions, faster control-room response and coordinated high-volume temple operations.",
    features: [
      "Temple command centres",
      "Real-time crowd analytics",
      "Heatmaps and prediction",
      "Automated slot management",
      "Scanner and kiosk workflows",
      "Volunteer operations",
      "VIP and government overrides",
      "Digi Sathi",
      "Senior Sathi",
      "Emergency workflows",
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Analytics APIs", "WebSockets"],
  },
];

export const toolbox = [
  ["Languages", ["Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"]],
  ["AI & Machine Learning", ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "CNN", "LSTM", "BiLSTM", "Random Forest", "Transfer Learning", "Feature Engineering", "Model Tuning", "Feature Scaling", "Confidence Calibration", "Pandas", "NumPy"]],
  ["Generative AI & NLP", ["Transformers", "Sentence-BERT", "TF-IDF", "N-Grams", "Stylometry", "Semantic Embeddings", "OCR"]],
  ["Explainable AI", ["SHAP", "Grad-CAM", "Sentence Highlighting", "Parameter Reasoning", "Risk Visualisation"]],
  ["Computer Vision", ["OpenCV", "EfficientNet", "ResNet", "YOLO", "MediaPipe", "FFT", "DCT", "Facial Geometry"]],
  ["Audio & Signal Processing", ["LFCC", "Librosa", "Spectrograms", "Waveforms", "Pitch Analysis", "Temporal Features"]],
  ["Frontend", ["React", "Next.js", "Vite", "Tailwind CSS", "GSAP", "Framer Motion", "Lenis", "Three.js", "React Three Fiber"]],
  ["Backend", ["FastAPI", "Flask", "REST APIs", "JWT", "SQLAlchemy", "Model Serving", "Input Validation"]],
  ["Databases", ["PostgreSQL", "MongoDB", "SQLite"]],
  ["Deployment & Platforms", ["Docker", "Docker Compose", "Git", "GitHub", "Google Colab", "Kaggle", "Vercel", "Render"]],
];

export const leadership = [
  {
    role: "Co-Lead",
    title: "Debating Society",
    value: "Structured reasoning and community building",
    text: "Planning parliamentary-debate workshops, recruitment, inter-college events, argument-building sessions and coordinated club growth.",
  },
  {
    role: "Executive Director",
    title: "Cinema Club",
    value: "Creative direction and execution",
    text: "Working across storytelling, visual communication, content planning, event design and team delivery.",
  },
  {
    role: "Diplomat & Public Speaker",
    title: "MUN and Public Speaking",
    value: "Research, negotiation and communication",
    text: "Developing policy positions, negotiating across viewpoints and presenting structured ideas to varied audiences.",
  },
];
