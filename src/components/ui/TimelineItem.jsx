import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    const isPresent = item.period && (item.period.includes("Present") || item.period.includes("Current"));

    return (
        <div className={`flex flex-col md:flex-row items-stretch justify-center w-full mb-12 ${isEven ? 'md:flex-row-reverse' : ''} group`}>
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className={`w-full md:w-5/12 bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border ${isPresent ? 'border-primary/40 shadow-[0_0_15px_rgba(99,102,241,0.15)]' : 'border-white/10'} hover:border-primary/50 transition-colors duration-300 group-hover:shadow-primary/10 relative z-10`}
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
            <div className="hidden md:flex flex-col items-center w-2/12 relative min-h-[150px] justify-center">
                {/* Horizontal Connecting Line - Now inside center column to ensure connectivity */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-white/20 group-hover:bg-primary/50 transition-colors duration-300 w-1/2 ${isEven ? 'right-0' : 'left-0'}`}
                />

                {/* Vertical Line - Extended to ensure no gaps */}
                <div className="w-[1px] h-[200%] bg-white/10 absolute top-[-50%] bottom-[-50%] group-hover:bg-white/30 transition-colors duration-300" />

                {/* Dot Container */}
                <div className="relative z-10 flex items-center justify-center">
                    {/* Pulsating Glow for Present */}
                    {isPresent && (
                        <div className="absolute w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
                    )}

                    {/* Main Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`relative w-4 h-4 rounded-full transition-all duration-300 ${isPresent
                            ? 'bg-primary shadow-[0_0_20px_rgba(99,102,241,1)] scale-110'
                            : 'bg-surface border-2 border-primary group-hover:bg-primary group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'
                            }`}
                    />
                </div>
            </div>

            {/* Empty Space for alignment */}
            <div className="hidden md:block w-5/12" />
        </div>
    );
};
