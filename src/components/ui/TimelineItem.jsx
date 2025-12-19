import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row gap-8 items-center justify-center w-full mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="w-full md:w-5/12 bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors duration-300 group"
                style={{ willChange: "transform, opacity" }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Briefcase size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.role}</h3>
                        <p className="text-primary/80 font-medium">{item.company}</p>
                    </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                </div>

                <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {desc}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Center Line & Dot */}
            <div className="hidden md:flex flex-col items-center w-2/12 relative">
                <div className="w-0.5 h-full bg-white/10 absolute top-0 bottom-0" />
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-4 h-4 bg-primary rounded-full z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                />
            </div>

            {/* Empty Space for alignment */}
            <div className="hidden md:block w-5/12" />
        </div>
    );
};
