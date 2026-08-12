// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio.
// All sections: profile, experience, education, skills, projects, certifications
// ============================================================

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  tags: string[];
  stars: number;
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  status?: "Completed" | "In Progress";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

// ─────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────
export const profile: Profile = {
  name: "Sakib Hussain A",
  title: "Aspiring AI Engineer",
  tagline: "Machine Learning · Deep Learning · NLP · Federated Learning Researcher",
  summary:
    "Motivated AI & Data Science graduate with hands-on experience in machine learning, data analytics, and predictive modelling. Eager to apply analytical skills and domain knowledge to solve real-world business problems through data-driven insights. Seeking a challenging role in data science or analytics to contribute to innovative, impactful projects.",
  location: "Mysore, Karnataka, India",
  email: "asakibhussain@gmail.com",
  phone: "+91 9844773285",
  github: "https://github.com/asakibhussain-sketch",
  linkedin: "https://linkedin.com/in/sakib-hussain-a-333209316",
  avatarUrl: "/profile.jpg",
  // resumeUrl: "/resume.pdf",  // Add your resume PDF to public/ and uncomment
};

// ─────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    id: "internspot",
    company: "Internspot Innovations",
    role: "AI Intern",
    type: "Internship",
    location: "Remote",
    startDate: "July 2026",
    endDate: "September 2026",
    achievements: [
      "Ongoing internship focused on AI coursework and two structured projects (major and minor).",
      "Working with machine learning pipelines and AI model development under professional mentorship.",
    ],
  },
  {
    id: "codealpha",
    company: "Code Alpha",
    role: "Data Science Intern",
    type: "Internship",
    location: "Remote",
    startDate: "2026",
    endDate: "2026",
    achievements: [
      "Ongoing internship in Data Science with remote course training and two structured projects (major and minor).",
      "Developed ML models including Iris Flower Classifier (KNN) and Car Price Prediction (Extra Trees Regressor).",
    ],
  },
];

// ─────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: "be-mit",
    institution: "Maharaja Institute Of Technology Thandavapura",
    degree: "Bachelor of Engineering",
    field: "Artificial Intelligence & Data Science",
    startYear: "2023",
    endYear: "2027",
    details: [
      "Visvesvaraya Technological University (VTU)",
      "Coursework: Machine Learning, Deep Learning, Big Data Analytics, NLP, Computer Networks, Data Structures & Algorithms, DBMS, Design and Analysis of Algorithms",
    ],
  },
  {
    id: "kle-pu",
    institution: "K.L.E PU College, Gangavathi",
    degree: "Pre-University",
    field: "PCMB (Science)",
    startYear: "2021",
    endYear: "2023",
    details: ["Completed PCMB in Science."],
  },
  {
    id: "lhs-sslc",
    institution: "Little Hearts School",
    degree: "SSLC / 10th",
    field: "General",
    startYear: "2020",
    endYear: "2021",
    details: ["Completed SSLC/10th boards with a result of distinction."],
  },
];

// ─────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "HTML", "CSS", "JavaScript", "Java (basics)"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Federated Learning", "Computer Vision", "LLM / RAG"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Streamlit", "Power BI", "Tableau", "Hadoop (basics)"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["FastAPI", "Node.js", "Express.js", "React", "Next.js", "Git", "GitHub"],
  },
];

// ─────────────────────────────────────────────────────────
// PROJECTS (from GitHub API — top 8)
// ─────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "visionai",
    name: "VisionAI — AI Model Hub",
    description:
      "A modern, full-stack AI Model Hub providing seamless access to powerful image classification models. Allows users to upload images and instantly run AI predictions for Plant Disease Classification and Waste Classification.",
    language: "TypeScript",
    tags: ["TypeScript", "AI", "Image Classification", "Full-Stack", "Next.js"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/VisionAI--AI-Model-Hub",
    featured: true,
  },
  {
    id: "medweb",
    name: "MediSync — AI Healthcare Platform",
    description:
      "Premium AI-powered healthcare platform featuring interactive biological digital twins, real-time doctor-patient messaging, and lifestyle simulations. Built with React + Vite, TailwindCSS, Express.js, MongoDB, and Socket.io.",
    language: "JavaScript",
    tags: ["React", "Express.js", "MongoDB", "Socket.io", "TailwindCSS", "Healthcare AI"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/MedWeb",
    featured: true,
  },
  {
    id: "salafiyah",
    name: "Salafiyah — Muslim Companion PWA",
    description:
      "A Progressive Web App featuring prayer tracking, Quran recitation, authentic Duas, premium theme styling, and AI-powered spiritual guidance (Ask Imam chat & context-based Tasbih generation).",
    language: "JavaScript",
    tags: ["PWA", "JavaScript", "Groq LLM", "Service Workers", "SQLite", "Offline-First"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/salafiyah",
    demoUrl: "https://salafiyah.vercel.app",
    featured: true,
  },
  {
    id: "vtu-study-buddy",
    name: "VTU AI Study Buddy",
    description:
      "An AI-powered study companion, exam tutor, and placement prep portal for VTU students. Built using FastAPI, SQLite, and Groq LLaMA 3.1 for custom RAG tutoring and live interactive mock interviews.",
    language: "Python",
    tags: ["Python", "FastAPI", "Groq LLaMA 3.1", "RAG", "SQLite", "AI Tutor"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/VTU-AI-Study-Buddy",
    demoUrl: "https://vtu-ai-study-buddy-dusky.vercel.app",
    featured: true,
  },
  {
    id: "lifelink",
    name: "LifeLink — Organ Donation System",
    description:
      "An automated Organ Donation Management System built with Node.js, Express, and SQLite. Features secure donor/patient tracking, live dashboard statistics, and a compatibility matching engine.",
    language: "HTML/Node.js",
    tags: ["Node.js", "Express", "SQLite", "Healthcare", "Dashboard"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/LifeLink",
    demoUrl: "https://life-link-iota.vercel.app",
  },
  {
    id: "car-price",
    name: "Car Price Prediction (ML)",
    description:
      "AutoPrice AI — cleans historical car data and trains an Extra Trees Regressor to predict selling prices based on make, model, mileage, year, and other features.",
    language: "Python",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Extra Trees", "Data Analysis"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/Car-Price-Prediction-with-Machine-Learning",
  },
  {
    id: "unemployment",
    name: "Unemployment Analysis Dashboard",
    description:
      "A Python-based data analysis pipeline and interactive Streamlit dashboard exploring unemployment trends, regional disparities, and the economic impact of the COVID-19 pandemic.",
    language: "Python",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Data Visualization", "Analytics"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/Unemployment-Analysis-with-python",
  },
  {
    id: "iris",
    name: "Iris Flower Classifier",
    description:
      "An end-to-end ML pipeline and Streamlit web app for classifying Iris flowers using a K-Nearest Neighbors model. Built for the CodeAlpha Internship Task.",
    language: "Python",
    tags: ["Python", "Scikit-learn", "Streamlit", "KNN", "Classification"],
    stars: 0,
    githubUrl: "https://github.com/asakibhussain-sketch/Iris-Flower-Classifier",
  },
];

// ─────────────────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: "infosys-python",
    name: "Python Fundamentals",
    issuer: "Infosys Springboard",
    year: "2023",
    status: "Completed",
  },
  {
    id: "ibm-ml",
    name: "Machine Learning Introduction for Everyone",
    issuer: "IBM — Coursera",
    year: "2026",
    status: "Completed",
  },
  {
    id: "coursera-nlp",
    name: "Fundamentals of Natural Language Processing",
    issuer: "Coursera",
    year: "2026",
    status: "Completed",
  },
  {
    id: "coursera-dl",
    name: "Deep Learning",
    issuer: "Coursera",
    year: "2026",
    status: "In Progress",
  },
];

// ─────────────────────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: "mitt-ideathon",
    title: "4th Place — Ideathon, MITT 2025",
    description: "Secured 4th place among 50 competing teams.",
  },
  {
    id: "national-ideacraft",
    title: "Top 2 — National Ideathon, Ideacraft 2025",
    description: "Placed in the Top 2 at a national-level Ideathon competition.",
  },
  {
    id: "hack-mce",
    title: "Top 2 — Hack.MCE 5.0",
    description: "Placed in Top 2 at Hack.MCE 5.0 hackathon.",
  },
  {
    id: "ideathons",
    title: "Leadership & State-Level Ideathons",
    description:
      "Participated in five state and national ideathons at MITT Mysore, ATME Mysore, GSSS Mysore, Malanad College of Engineering Hassan, and IBIS Hotel Mysore Maharaja.",
  },
];
