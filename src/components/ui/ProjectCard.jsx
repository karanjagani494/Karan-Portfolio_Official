import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const ProjectCard = ({ project, onClick, isExpanded = false, layoutId, className = '' }) => {
    return (
        <motion.div
            layoutId={layoutId} // Use layoutId for shared transition
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ willChange: "transform" }}
            whileHover={!isExpanded ? { y: -8 } : {}}
            onClick={(e) => e.stopPropagation()}
            className={`group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 ${!isExpanded ? 'hover:border-primary/50 hover:shadow-primary/20 cursor-pointer' : ''} transition-colors duration-500 shadow-lg flex flex-col h-full ${className}`}
        >
            <div className={`overflow-hidden relative ${isExpanded ? 'h-64 md:h-96' : 'aspect-video cursor-pointer'}`} onClick={!isExpanded ? onClick : undefined}>
                <motion.img
                    whileHover={!isExpanded ? { scale: 1.05 } : {}}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    {isExpanded && (
                        <button onClick={onClick} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <span className="sr-only">Close</span>
                            {/* Close Icon if needed, or user clicks out */}
                        </button>
                    )}
                </div>

                {isExpanded && (project.role || project.timeline) && (
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                        {project.role && (
                            <div className="flex items-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                <span className="font-semibold">Role:</span> {project.role}
                            </div>
                        )}
                        {project.timeline && (
                            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                <span className="font-semibold">Timeline:</span> {project.timeline}
                            </div>
                        )}
                    </div>
                )}

                <p className={`text-gray-400 mb-6 ${!isExpanded ? 'line-clamp-2 flex-grow' : ''}`}>
                    {isExpanded ? (project.longDescription || project.description) : project.description}
                </p>

                {isExpanded && project.features && (
                    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {isExpanded && project.outcome && (
                    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        <h4 className="text-lg font-semibold mb-2 text-white">Outcome</h4>
                        <p className="text-gray-300 italic border-l-2 border-primary/50 pl-4 py-1">
                            {project.outcome}
                        </p>
                    </div>
                )}

                {isExpanded && project.challenges && (
                    <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                        <h4 className="text-lg font-semibold mb-3 text-white">Challenges & Solutions</h4>
                        <div className="space-y-3">
                            {project.challenges.map((challenge, idx) => (
                                <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/5">
                                    <p className="text-sm text-gray-300">
                                        <span className="text-primary font-bold mr-2">Goal:</span>
                                        {challenge}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                    {(isExpanded ? project.tech : project.tech.slice(0, 3)).map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
                            {t}
                        </span>
                    ))}
                    {!isExpanded && project.tech.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">+{project.tech.length - 3}</span>
                    )}
                </div>

                <div className="flex gap-4 mt-auto">
                    {!isExpanded && (
                        <div onClick={(e) => { e.stopPropagation(); onClick(); }} className="flex-1">
                            <MagneticButton className="w-full py-3 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors duration-300 border border-white/5 hover:border-white/20">
                                <Eye size={18} /> View Details
                            </MagneticButton>
                        </div>
                    )}
                    <div onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        if (isExpanded) onClick();
                    }} className="flex-1 cursor-pointer">
                        <MagneticButton className="w-full py-3 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black rounded-xl text-sm font-medium transition-colors duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                            <ExternalLink size={18} /> Demo
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
