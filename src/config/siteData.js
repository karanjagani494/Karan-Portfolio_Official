import { Github, Linkedin, Mail } from 'lucide-react';
import DBMS_IMG from "../assets/images/DBMS.jpeg";
import LEAF_IMG from "../assets/images/Img_pro.jpeg";
export const siteData = {
    name: "Karan Jagani",
    role: "Computer Science Student & Future Software Engineer",
    location: "Cambridge, UK",
    email: "karanjagani2003@gmail.com",
    social: [
        { name: "GitHub", url: "https://github.com/karanjagani494", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/karan-jagani-596077242", icon: Linkedin },
        { name: "Email", url: "karanjagani2003@gmail.com", icon: Mail }
    ],
    about: {
        title: "About Me",
        description: [
            "I am a Computer Science student at Anglia Ruskin University with a passion for embedded systems, AI, and software development.",
            "I enjoy problem-solving, teamwork, and building real-world projects that make a difference.",
            "Currently exploring the intersection of hardware and software, and looking for opportunities to apply my skills in a professional setting."
        ],
    },
    education: [
        {
            degree: "BEng (Hons) Computer Science",
            institution: "Anglia Ruskin University, Cambridge",
            period: "Sep 2023 – Dec 2026",
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
        languages: ["Java", "C", "C++", "C#", "Python", "SQL", "JavaScript", "HTML5", "CSS"],
        tools: ["MATLAB", "Git & GitHub", "Visual Studio", "VS Code", "MySQL"],
        concepts: ["OOP", "Data Structures & Algorithms", "Operating Systems"],
        ai: ["Basic ML & Neural Networks", "NumPy", "Pandas", "TensorFlow", "PyTorch"]
    },
    experience: [
        {
            role: "Customer Assistant",
            company: "Sainsbury’s",
            location: "Cambridge, UK",
            period: "Oct 2023 – Present",
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
            period: "Oct 2023 – Present",
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
            period: "Jan 2023 – Jul 2023",
            description: [
                "Managed visa application documents with high accuracy.",
                "Ensured compliance with immigration regulations.",
                "Coordinated with clients to gather necessary information."
            ]
        }
    ],
    projects: [
        {
            id: 1,
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
            link: "#",
            github: "#",
            image: LEAF_IMG
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A modern, animated portfolio website built with React and Framer Motion.",
            longDescription: "A fully responsive, high-performance personal portfolio designed to showcase projects and skills with an immersive user experience. Built with React and TypeScript, it utilizes Framer Motion for complex animations including the starfield background and page transitions. Tailwind CSS ensures a clean, maintainable design system.",
            timeline: "Nov 2024 - Present",
            role: "Frontend Developer",
            challenges: ["Optimizing 3D particle systems for mobile devices", "Designing a cohesive physics-based interaction model"],
            features: [
                "Performance-optimized animations",
                "Interactive 3D starfield",
                "Face tracking integration (experimental)",
                "Responsive grid layout",
                "Aceternity UI components"
            ],
            tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Multi-Modal AI Analysis",
            description: "A rigorous comparative study of classical Machine Learning versus Deep Learning architectures architectures.",
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
            tech: ["Python", "Deep Learning", "NLP", "Computer Vision", "+1"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
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
            link: "#",
            github: "#",
            image: (DBMS_IMG)
        },
        {
            id: 5,
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
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
        }
    ]
};
