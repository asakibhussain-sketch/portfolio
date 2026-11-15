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
  description?: string;
  achievements: string[];
  certificateImage?: string;
  certificateId?: string;
  badges?: string[];
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
  issuer?: string;
  date?: string;
  image?: string;
  certificateId?: string;
  badges?: string[];
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
// EXPERIENCE / INTERNSHIPS
// ─────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    id: "internspot-ai",
    company: "InternSpot Innovation Pvt Ltd",
    role: "Artificial Intelligence Intern",
    type: "Internship",
    location: "Remote",
    startDate: "July 2026",
    endDate: "August 2026",
    certificateId: "ISI-COMP-MT1C9CKX-YR5T",
    certificateImage: "/certificates/internspot-ai.png",
    badges: ["MSME & AICTE Certified", "AI & ML"],
    description:
      "Successfully completed an MSME & AICTE certified internship program in Artificial Intelligence, including comprehensive coursework and end-to-end practical project submissions.",
    achievements: [
      "Completed comprehensive AI & ML coursework with dual major and minor project submissions.",
      "Engineered machine learning pipelines and predictive modeling workflows under professional mentorship.",
      "Awarded official Internship Completion Certificate verified under AICTE & MSME guidelines.",
    ],
  },
  {
    id: "codealpha",
    company: "CodeAlpha",
    role: "Data Science Intern",
    type: "Internship",
    location: "Remote",
    startDate: "July 2026",
    endDate: "July 2026",
    certificateId: "CA/DF1/180357",
    certificateImage: "/certificates/codealpha-datascience.png",
    badges: ["Virtual Internship", "Data Science & ML"],
    description:
      "Active participant in the CodeAlpha Virtual Internship Program in Data Science, applying dedication and analytical skills to machine learning workflows and data modeling tasks.",
    achievements: [
      "Developed and evaluated ML models including Iris Flower Classifier (KNN) and Car Price Prediction (Extra Trees Regressor).",
      "Applied end-to-end data pipelines: exploratory data analysis (EDA), data cleaning, feature engineering, and model evaluation metrics.",
      "Awarded Certificate of Completion recognizing dedicated effort and project delivery (Student ID: CA/DF1/180357).",
    ],
  },
  {
    id: "codec-tech",
    company: "Codec Technologies Pvt. Ltd.",
    role: "Graphic Designing Intern",
    type: "Internship",
    location: "Remote",
    startDate: "September 2026",
    endDate: "September 2026",
    certificateId: "CORPORATE6759d549ce59e1733940553",
    certificateImage: "/certificates/codec-graphic-design.png",
    badges: ["Google for Education Partner", "AICTE & ICAC Approved"],
    description:
      "Completed a 1-month AICTE & ICAC approved Graphic Designing internship program with Google for Education Partner Codec Technologies, focusing on digital aesthetics, visual assets, and UI design principles.",
    achievements: [
      "Designed creative digital graphics, brand identity collateral, and user interface visuals following modern design standards.",
      "Collaborated with project managers and design teams to iterate and refine visual communication concepts.",
      "Awarded Certificate of Internship approved by AICTE & ICAC (Corporate ID: CORPORATE6759d549ce59e1733940553).",
    ],
  },
  {
    id: "internspot-training",
    company: "Internspot",
    role: "Industrial Training — Applied Technology & AI",
    type: "Industrial Training",
    location: "Remote",
    startDate: "July 2026",
    endDate: "August 2026",
    certificateId: "ISI-COMP-MT1C9CKX-YR5T",
    certificateImage: "/certificates/internspot-industrial-training.png",
    badges: ["Industry Mentorship", "Performance: Commendable"],
    description:
      "Completed a 2-month rigorous Industrial Training program working directly with seasoned industry mentors, earning commendation for technical excellence.",
    achievements: [
      "Participated in intensive industrial software training, architecture analysis, and machine learning practical applications.",
      "Collaborated on real-world engineering problem-solving with continuous mentor evaluation.",
      "Awarded Certificate of Industrial Training noting commendable performance (ID: ISI-COMP-MT1C9CKX-YR5T).",
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
    id: "glowlogics-ambassador",
    title: "Campus Ambassador — Glow Logics Solutions",
    issuer: "Glow Logics Solutions · Ministry of MSME, Govt. of India",
    date: "July – August 2026",
    image: "/certificates/glowlogics-campus-ambassador.png",
    badges: ["Campus Ambassador", "Leadership", "MSME Certified"],
    description:
      "Awarded Certificate of Campus Ambassador in recognition of excellent initiatives and outstanding contributions during the Campus Ambassador Program representing Maharaja Institute of Technology Thandavapura.",
  },
  {
    id: "internspot-commendation",
    title: "Industrial Training Commendation — Internspot",
    issuer: "Internspot",
    date: "July – August 2026",
    image: "/certificates/internspot-industrial-training.png",
    certificateId: "ISI-COMP-MT1C9CKX-YR5T",
    badges: ["Commendable Performance", "Industry Mentors"],
    description:
      "Awarded Certificate of Industrial Training noting commendable performance after completing 2 months of engineering training under direct industry mentorship.",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    date: "2026",
    image: "/certificates/aws-cloud-practitioner.png",
    badges: ["AWS Academy", "Cloud Foundations"],
    description:
      "Completed the AWS Academy Cloud Foundations course, gaining foundational knowledge of cloud computing concepts, AWS core services, security, architecture, pricing, and support.",
  },
  {
    id: "mitt-pals-ial",
    title: "MITT PALS IAL 2 — Part Recognition",
    issuer: "Maharaja Institute of Technology Thandavapura",
    date: "2026",
    image: "/certificates/mitt-pals-ial.png",
    badges: ["PALS", "MITT Certified"],
    description:
      "Recognized for successful completion of the PALS IAL 2 Part program at Maharaja Institute of Technology Thandavapura, demonstrating academic achievement and participation.",
  },
  {
    id: "python-cert",
    title: "Python Programming Certification",
    issuer: "Infosys Springboard",
    date: "2023",
    image: "/certificates/python-cert.png",
    badges: ["Python", "Infosys Springboard"],
    description:
      "Earned certification in Python Programming from Infosys Springboard, covering core Python syntax, data structures, OOP principles, and practical scripting skills.",
  },
  {
    id: "skillup-ai",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    image: "/certificates/skillup-ai.png",
    badges: ["IBM SkillsBuild", "AI Fundamentals"],
    description:
      "Completed IBM SkillsBuild's Artificial Intelligence Fundamentals course, covering foundational AI concepts, machine learning basics, neural networks, and real-world AI applications.",
  },
  {
    id: "skillup-microsoft",
    title: "Microsoft Office Productivity",
    issuer: "IBM SkillsBuild · Microsoft",
    date: "2026",
    image: "/certificates/skillup-microsoft.png",
    badges: ["Microsoft", "IBM SkillsBuild"],
    description:
      "Certified in Microsoft Office productivity tools through IBM SkillsBuild, demonstrating proficiency in Word, Excel, PowerPoint, and cloud-based collaboration tools.",
  },
  {
    id: "coursera-ml",
    title: "Machine Learning — Introduction for Everyone",
    issuer: "IBM · Coursera",
    date: "2026",
    image: "/certificates/coursera-ml.png",
    badges: ["IBM", "Coursera", "Machine Learning"],
    description:
      "Completed IBM's Machine Learning Introduction course on Coursera, covering supervised and unsupervised learning, regression, classification, clustering, and model evaluation.",
  },
  {
    id: "coursera-nlp",
    title: "Fundamentals of Natural Language Processing",
    issuer: "Coursera",
    date: "2026",
    image: "/certificates/coursera-nlp.png",
    badges: ["NLP", "Coursera"],
    description:
      "Earned certification in NLP Fundamentals on Coursera, learning text preprocessing, sentiment analysis, word embeddings, sequence models, and transformer-based language models.",
  },
  {
    id: "skillup-genai",
    title: "Generative AI Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    image: "/certificates/skillup-genai.png",
    badges: ["Generative AI", "IBM SkillsBuild"],
    description:
      "Completed IBM SkillsBuild's Generative AI Fundamentals course, exploring large language models, prompt engineering, diffusion models, and responsible AI practices.",
  },
  {
    id: "coursera-sna",
    title: "Social Network Analysis",
    issuer: "Coursera",
    date: "2026",
    image: "/certificates/coursera-sna.png",
    badges: ["Network Analysis", "Coursera"],
    description:
      "Certified in Social Network Analysis on Coursera, studying graph theory, centrality measures, community detection, information diffusion, and network visualization techniques.",
  },
  {
    id: "national-ideacraft",
    title: "Top 2 — National Ideathon, Ideacraft 2025",
    issuer: "Ideacraft National Competition",
    date: "2025",
    badges: ["National Level", "Top 2 Finalist"],
    description:
      "Placed in the Top 2 at a prestigious national-level Ideathon competition, presenting an AI-driven solution among top collegiate participants.",
  },
  {
    id: "hack-mce",
    title: "Top 2 — Hack.MCE 5.0 Hackathon",
    issuer: "Malanad College of Engineering, Hassan",
    date: "2025",
    badges: ["Hackathon", "Top 2 Finalist"],
    description:
      "Secured Top 2 finish at the Hack.MCE 5.0 hackathon after 24 hours of rapid prototyping, technical problem-solving, and pitching.",
  },
  {
    id: "mitt-ideathon",
    title: "4th Place — Ideathon, MITT 2025",
    issuer: "Maharaja Institute of Technology Thandavapura",
    date: "2025",
    badges: ["Ideathon", "4th Place / 50 Teams"],
    description:
      "Secured 4th place among 50 competing engineering teams with an innovative AI and technology proposal.",
  },
  {
    id: "ideathons",
    title: "Leadership & State-Level Ideathons",
    issuer: "Multiple State Institutions",
    date: "2024 – 2025",
    badges: ["5+ Competitions", "State & National"],
    description:
      "Active participant and team lead in five state and national ideathons at MITT Mysore, ATME Mysore, GSSS Mysore, Malanad College of Engineering Hassan, and IBIS Hotel Mysore Maharaja.",
  },
];
