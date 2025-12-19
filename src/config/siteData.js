import { Github, Linkedin, Mail } from 'lucide-react';

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
            title: "AI Traffic Control",
            description: "A machine learning model to optimize traffic light timings based on vehicle density.",
            tech: ["Python", "TensorFlow", "OpenCV"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A modern, animated portfolio website built with React and Framer Motion.",
            longDescription: "A fully responsive, high-performance personal portfolio designed to showcase projects and skills with an immersive user experience. Built with React and TypeScript, it utilizes Framer Motion for complex animations including the starfield background and page transitions. Tailwind CSS ensures a clean, maintainable design system.",
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
        }

    ]
};
