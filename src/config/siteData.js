import { Github, Linkedin, Mail } from 'lucide-react';
import DBMS_IMG from "../assets/images/DBMS.jpeg";
import LEAF_IMG from "../assets/images/Img_pro.jpeg";
export const siteData = {
    name: "Karan Jagani",
    role: "Computer Science Graduate | Full-Stack Developer",
    introduction: "I build modern web applications using Next.js, TypeScript, Python and PostgreSQL, with a growing interest in AI integration and intelligent software systems.",
    location: "Cambridge, UK",
    email: "karanjagani2003@gmail.com",
    social: [
        { name: "GitHub", url: "https://github.com/karanjagani494", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/karan-jagani-596077242", icon: Linkedin },
        { name: "Email", url: "mailto:karanjagani2003@gmail.com", icon: Mail }
    ],
    about: {
        title: "About Me",
        description: [
            "I'm a Computer Science graduate from Anglia Ruskin University, where I completed my BEng (Hons) with First Class Honours in July 2026.",
            "I enjoy developing full-stack web applications and understanding how frontend interfaces, backend services and databases work together. My experience includes React, Next.js, TypeScript, Python, FastAPI and PostgreSQL.",
            "I'm focused on strengthening my software engineering skills and exploring how AI, machine learning and intelligent systems can be integrated into practical applications."
        ],
    },
    education: [
        {
            degree: "BEng (Hons) Computer Science — First Class Honours",
            institution: "Anglia Ruskin University, Cambridge",
            period: "September 2023 – July 2026",
            modules: [
                "Software Engineering",
                "Database Design & Implementation",
                "Software Principles",
                "Data Structures & Algorithm Analysis",
                "Operating Systems"
            ]
        }
    ],
    skills: {
        "Languages": ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "C#", "SQL"],
        "Frontend": ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
        "Backend & databases": ["FastAPI", "REST APIs", "PostgreSQL", "MySQL", "SQLAlchemy"],
        "Authentication & tooling": ["Google OAuth", "RBAC", "Git", "GitHub", "Docker", "Alembic"],
        "AI & computer vision": ["Machine Learning", "OpenCV", "MATLAB", "NumPy", "Pandas", "TensorFlow", "PyTorch"],
        "Core concepts": ["OOP", "Data Structures & Algorithms", "Operating Systems"]
    },
    experience: [
        {
            role: "Customer Assistant",
            company: "Sainsbury’s",
            location: "Cambridge, UK",
            period: "October 2023 – Present",
            description: [
                "Demonstrated strong communication and teamwork skills.",
                "Handled customer inquiries and resolved issues efficiently.",
                "Maintained high standards of service and store presentation."
            ]
        },
        {
            role: "Student Ambassador",
            company: "Anglia Ruskin University",
            location: "Cambridge, UK",
            period: "October 2023 – March 2026",
            description: [
                "Guided visitors and prospective students during open days.",
                "Represented the university with professionalism and enthusiasm.",
                "Assisted with event organization and logistics."
            ]
        },
        {
            role: "Visa Administrator",
            company: "MyCalculus Visa Consultant Services",
            location: "Rajkot, India",
            period: "January 2023 – July 2023",
            description: [
                "Managed visa application documents with high accuracy.",
                "Ensured compliance with immigration regulations.",
                "Coordinated with clients to gather necessary information."
            ]
        }
    ],
    projects: [
        {
            id: 6,
            title: "WattFlow",
            subtitle: "Full-Stack Energy Broker Management Platform",
            categories: ["Web", "Systems"],
            description: "A full-stack energy broker management platform for business customers, consumption, tenders, contracts and renewals.",
            longDescription: "A full-stack energy broker management platform for handling business customers, electricity consumption, tenders, simulated supplier quotes, contracts and renewals.",
            note: "Portfolio demonstration only. Supplier quotes are simulated; this is not a live energy brokerage service and is not publicly deployed.",
            timeline: "September 2026 – October 2026",
            features: ["Email/password authentication and Google OAuth", "Multi-user organisation workspaces", "Role-based access control", "PostgreSQL with SQLAlchemy and Alembic migrations", "CSV consumption imports and charts", "Tenders and simulated supplier quote comparison", "Contract tracking and renewal dashboards", "Automated API workflow testing", "Docker Compose support"],
            tech: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Tailwind CSS", "Docker"],
            github: "https://github.com/karanjagani494/WattFlow",
            githubUnavailable: true,
            image: null,
        },
        {
            id: 1,
            categories: ["AI"],
            title: "Leaf Morphometric Analysis (MATLAB)",
            description: "A computer-vision pipeline to segment leaves and compute precise morphometric metrics.",
            longDescription: "A robust computer-vision pipeline designed to segment leaves using coin-calibration for scale. It employs morphological operations to clean masks and computes various colour and morphometric metrics such as GLI, centroid/medoid, area, length, and perimeter, providing fully annotated visual outputs.",
            timeline: "Oct 2024 - Dec 2024",
            role: "Computer Vision Engineer",
            outcome: "Achieved 98% segmentation accuracy with sub-100ms processing time per frame.",
            challenges: [
                "Handling variable lighting conditions in raw leaf images",
                "Precisely calibrating scale using coin references",
                "Optimizing morphological operations for real-time performance"
            ],
            features: [
                "Coin-calibrated Segmentation",
                "Morphological Mask Cleaning",
                "Color & Morphometric Metrics (GLI, Area)",
                "Automated Feature Extraction",
                "Annotated Output Generation"
            ],
            tech: ["MATLAB", "Computer Vision", "Image Processing", "Morphology"],
            link: null,
            github: null,
            image: LEAF_IMG
        },
        {
            id: 2,
            categories: ["Web"],
            title: "Portfolio Website",
            description: "A modern, animated portfolio website built with React and Framer Motion.",
            longDescription: "A responsive personal portfolio built with React and JavaScript, Tailwind CSS and Framer Motion. It brings together project details, technical skills and experience with accessible navigation and restrained animations.",
            timeline: "Nov 2024 - Present",
            role: "Frontend Developer",
            challenges: ["Balancing subtle motion with accessibility", "Presenting detailed projects clearly across screen sizes"],
            features: [
                "Performance-optimized animations",
                "Accessible project details and filtering",
                "Responsive grid layout",
                "Reusable React components"
            ],
            tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
            link: "https://karan-jagani.vercel.app/",
            github: "https://github.com/karanjagani494/Karan-Portfolio_Official",
            image: null
        },
        {
            id: 3,
            categories: ["AI"],
            title: "Multi-Modal AI Analysis",
            description: "A comparative study of classical Machine Learning versus Deep Learning architectures.",
            longDescription: "This comprehensive study evaluates the performance, scalability, and interpretability of various AI architectures. By benchmarking classical ML algorithms against state-of-the-art Deep Learning models across diverse datasets (tabular, image, audio, text), the project highlights key trade-offs in accuracy and resource efficiency. Explainability tools like SHAP and Grad-CAM were used to demystify model decision-making.",
            timeline: "Jan 2024 - Mar 2024",
            role: "AI Researcher",
            outcome: "Published comparative analysis highlighting Transformer efficiency in low-data regimes.",
            features: [
                "Benchmarked CNNs vs Transformers",
                "Cross-domain dataset analysis",
                "Explainable AI (XAI) implementation",
                "Performance metrics visualization",
                "Python-based modular pipeline"
            ],
            tech: ["Python", "Deep Learning", "NLP", "Computer Vision"],
            link: null,
            github: null,
            image: null
        },
        {
            id: 4,
            categories: ["Systems"],
            title: "Together Culture Database System",
            description: "A comprehensive database solution for a community CIC.",
            longDescription: "Designed and implemented a robust database solution for Together Culture Cambridge, involving deep requirement analysis to map unstructured business documents into a normalized MySQL schema. The project focused on ensuring data integrity and enabling complex business intelligence reporting through optimized SQL queries.",
            timeline: "2024",
            role: "Database Architect (Group Lead)",
            outcome: "Delivered a fully normalized database with a suite of analytical queries for business insights.",
            challenges: [
                "Translating ambiguous business documents into a strict EERD model",
                "Mapping complex community relationships to relational tables",
                "Optimizing SQL queries for performance and accuracy"
            ],
            features: [
                "UML/EERD Modeling",
                "Requirement Analysis & Mapping",
                "MySQL Implementation",
                "Complex SQL Analytics",
                "Business Intelligence Reporting"
            ],
            tech: ["MySQL", "SQL", "Database Design", "UML", "Systems"],
            link: null,
            github: null,
            image: (DBMS_IMG)
        },
        {
            id: 5,
            categories: ["Web", "Systems"],
            title: "Integrated Software Solution (C#)",
            description: "A complete software lifecycle project from requirements to deployment using C#.",
            longDescription: "A comprehensive software development project involving the full SDLC for a case study. Deliverables included a Problem Definition Document, detailed Software Design (Wireframes, ERD, UML Class & Sequence Diagrams), and a robust C# implementation. The project emphasized clean code practices, modular architecture, and rigorous testing.",
            timeline: "2024",
            role: "Full Stack Developer",
            outcome: "Delivered a robust, well-documented software solution achieving high marks for design and implementation.",
            challenges: [
                "Coordinating team requirements analysis",
                "Implementing complex UML designs into C# code",
                "Ensuring code maintainability and robustness"
            ],
            features: [
                "Requirement Analysis & User Stories",
                "Advanced UML Modeling",
                "Robust C# Implementation",
                "Database Integration",
                "Comprehensive Testing Strategy"
            ],
            tech: ["C#", ".NET", "SQL", "UML", "Web"],
            link: null,
            github: null,
            image: null
        }
    ]
};
