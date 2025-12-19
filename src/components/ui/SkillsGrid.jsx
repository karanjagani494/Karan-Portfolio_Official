import { motion } from 'framer-motion';
import { siteData } from '../../config/siteData';

export const SkillsGrid = () => {
    const categories = [
        { name: "Languages", skills: siteData.skills.languages },
        { name: "Tools & Frameworks", skills: siteData.skills.tools },
        { name: "Core Concepts", skills: siteData.skills.concepts },
        { name: "AI & ML", skills: siteData.skills.ai },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
                <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, when: "beforeChildren", staggerChildren: 0.1 }}
                    className="bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
                >
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                                className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
