import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ProjectCard } from '../components/ui/ProjectCard';
import { siteData } from '../config/siteData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);
    const categories = ['All', 'Web', 'AI', 'Systems'];

    // This is a simple filter logic. In a real app, you'd add a 'category' field to your project data.
    // For now, I'll just show all projects or filter randomly/by keyword match if I added categories to data.
    // I'll assume the data has categories or I'll just match keywords for this demo.

    const filteredProjects = siteData.projects.filter(project => {
        if (filter === 'All') return true;
        // Simple keyword matching for demo purposes since we didn't add explicit categories to siteData yet
        // You should add a 'category' field to siteData.ts
        const searchString = (project.title + project.description + project.tech.join(' ')).toLowerCase();
        if (filter === 'Web') return searchString.includes('react') || searchString.includes('web');
        if (filter === 'AI') return searchString.includes('ai') || searchString.includes('learning') || searchString.includes('python');
        if (filter === 'Systems') return searchString.includes('iot') || searchString.includes('arduino') || searchString.includes('embedded');
        return true;
    });

    return (
        <div className="pt-10" onClick={() => selectedId && setSelectedId(null)}>
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of my work in software engineering, embedded systems, and AI.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <LayoutGroup>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === category ? 'text-black' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {category}
                                {filter === category && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        initial={false}
                                        className="absolute inset-0 bg-white rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </LayoutGroup>
                </div>

                {/* Projects Grid */}
                <div className="min-h-[300px]">
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                layoutId={`project-${project.id}`}
                                onClick={() => setSelectedId(project.id)}
                                className={selectedId === project.id ? 'opacity-0' : ''}
                            />
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No projects found in this category.
                        </div>
                    )}
                </div>

                {/* Expanded Project Overlay */}
                <AnimatePresence>
                    {selectedId && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="fixed inset-0 bg-black/90 z-40 backdrop-blur-sm"
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                                <div className="w-full max-w-4xl max-h-[90vh] pointer-events-auto overflow-y-auto custom-scrollbar rounded-2xl">
                                    {filteredProjects.find(p => p.id === selectedId) && (
                                        <ProjectCard
                                            project={filteredProjects.find(p => p.id === selectedId)}
                                            layoutId={`project-${selectedId}`}
                                            isExpanded={true}
                                            onClick={() => setSelectedId(null)}
                                        />
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </SectionWrapper>
        </div>
    );
};

export default Projects;
