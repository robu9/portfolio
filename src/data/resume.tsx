import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anushay Jain",
  initials: "AJ",
  url: "https://paxio.tech",
  location: "Delhi, India",
  locationLink: "https://maps.google.com/?q=Delhi+India",
  description:
    "Full Stack Developer & AI/ML Engineer building autonomous systems and developer tools.",
  summary:
    "Founder of Paxio — an autonomous AI personal crew that automates repetitive digital workflows. I build full-stack systems, AI agents, OSINT tools, and ML pipelines. Previously contributed to open-source under Social Summer of Code and built multiple AI/ML projects including real-time detection, AutoML, and NLP systems.",
  avatarUrl: "/me.png",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "JavaScript",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "LangChain",
    "YOLOv8",
    "TensorFlow",
    "PyTorch"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "anushayjain7622@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/robu9",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anushayjain",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anushayjain7622@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Paxio",
      href: "https://paxio.tech",
      badges: [],
      location: "Remote",
      title: "Co-founder",
      logoUrl: "/paxio.jpg",
      start: "Sep 2025",
      end: "Present",
      description:
        "Leading development of Paxio, an autonomous AI personal crew that automates repetitive workflows. Built multi-agent architecture using LangChain, LLMs, and vector memory. Developed scalable real-time infra using Next.js, Node.js, shadcn UI, and WebSockets. Conducted user research with working professionals and launched public waitlist.",
    },
    {
      company: "Social Summer of Code",
      href: "https://ssoc.dev",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/ssoc.png",
      start: "June 2024",
      end: "Aug 2024",
      description:
        "Contributed to open-source projects under mentorship. Implemented new features, fixed bugs, improved performance, and wrote documentation for better contributor onboarding.",
    },
  ],

  education: [
    {
      school: "Maharaja Agrasen Institute of Technology (MAIT)",
      href: "https://mait.ac.in",
      degree: "B.Tech in Information Technology",
      logoUrl: "/mait.png",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "Paxio – Autonomous AI Personal Crew",
      href: "https://paxio.tech",
      dates: "2025 – Present",
      active: true,
      description:
        "An autonomous multi-agent system that automates repetitive workflows using LLMs, LangChain, and vector memory. Real-time UI built using Next.js, shadcn UI, and WebSockets.",
      technologies: [
        "Next.js",
        "Node.js",
        "LangChain",
        "LLMs",
        "Vector DBs",
        "WebSockets",
        "shadcn UI"
      ],
      links: [{ type: "Website", href: "https://paxio.tech", icon: <Icons.globe className='size-3' /> }],
      image: "",
      video: "/paxio.mp4",
    },
    {
      title: "AI-powered OSINT Tool",
      href: "#",
      dates: "2024 – 2025",
      active: true,
      description:
        "Full-stack OSINT intelligence system for automated data collection, analysis, and reporting. Features NLP entity extraction, sentiment analysis, multi-source search rotation, and interactive dashboards.",
      technologies: [
        "Python",
        "NLP",
        "React",
        "Node.js",
        "Google CSE API",
        "Vector DB"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Real-time Object Detection System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "YOLOv8-based detection pipeline with Falcon LLM explanations and automated retraining feedback loop.",
      technologies: [
        "YOLOv8",
        "Python",
        "Falcon LLM",
        "OpenCV",
        "PyTorch"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AutoML Tool",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Lightweight AutoML platform with automated preprocessing, feature engineering, model selection, and experiment tracking.",
      technologies: [
        "Streamlit",
        "Scikit-learn",
        "TensorFlow",
        "Python"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "HackWithIndia",
      dates: "2024",
      location: "Microsoft Office Noida",
      description:
        "Ranked Top 20 among 800+ teams.",
      image: "",
      links: [],
    },
    {
      title: "BuildWithIndia 2.0",
      dates: "2024",
      location: "Microsoft Office Gurugram",
      description:
        "Ranked Top 40 among 1400+ teams.",
      image: "",
      links: [],
    },
  ],
} as const;
