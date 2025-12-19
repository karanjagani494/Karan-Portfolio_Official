import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { SkillsGrid } from '../components/ui/SkillsGrid';
import { siteData } from '../config/siteData';
import profileImage from '../assets/images/Profile_Img.png';

const About = () => {
    return (
        <div className="pt-10">
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    {/* Text Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-8 text-white"
                        >
                            {siteData.about.title}
                        </motion.h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            {siteData.about.description.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>

                {/* Education Section */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 flex items-center gap-3"
                    >
                        <span className="w-8 h-1 bg-primary rounded-full" />
                        Education
                    </motion.h3>
                    <div className="grid gap-6">
                        {siteData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-surface/50 p-8 rounded-2xl border border-white/5"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <span className="text-primary font-medium bg-primary/10 px-3 py-1 rounded-full text-sm w-fit">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-6">{edu.institution}</p>

                                <div>
                                    <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">Key Modules</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.modules.map((module) => (
                                            <span key={module} className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300">
                                                {module}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 flex items-center gap-3"
                    >
                        <span className="w-8 h-1 bg-white rounded-full" />
                        Technical Skills
                    </motion.h3>
                    <SkillsGrid />
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
