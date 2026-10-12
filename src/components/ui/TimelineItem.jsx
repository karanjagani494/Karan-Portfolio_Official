import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const TimelineItem = ({ item, index, isFirst, isLast }) => {
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
                className={`w-full md:w-5/12 bg-surface/50 backdrop-blur-sm p-6 rounded-2xl border ${isPresent ? 'border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.08)]' : 'border-white/10'} hover:border-white/40 transition-colors duration-300 relative z-10`}
                style={{ willChange: "transform, opacity" }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white/10 rounded-lg text-white">
                        <Briefcase size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white transition-colors">{item.role}</h3>
                        <p className="text-gray-300 font-medium">{item.company}</p>
                    </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                </div>

                <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-white/80 rounded-full flex-shrink-0" />
                            {desc}
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Center Line & Dot */}
            <div className="hidden md:flex flex-col items-center w-2/12 relative min-h-[150px] justify-center">
                {/* Horizontal Connecting Line - Permanently Glowing White */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-zinc-600 transition-colors duration-300 w-1/2 ${isEven ? 'right-0' : 'left-0'}`}
                />

                {/* Vertical Line - Clean subtle rail */}
                <div
                    className={`w-[1px] bg-zinc-700 absolute transition-colors duration-300 left-1/2 -translate-x-1/2`}
                    style={{
                        top: isFirst ? '0' : '-50%',
                        bottom: isLast ? '0' : '-50%'
                    }}
                />

                {/* Dot Container */}
                <div className="relative z-10 flex items-center justify-center">
                    {/* Pulsating Glow for Present */}
                    {isPresent && (
                        <div className="absolute w-3.5 h-3.5 bg-white rounded-full animate-ping opacity-40" />
                    )}

                    {/* Main Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`relative w-3.5 h-3.5 rounded-full transition-all duration-300 ${isPresent
                            ? 'bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] scale-110'
                            : 'bg-zinc-300 group-hover:scale-125 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]'
                            }`}
                    />
                </div>
            </div>

            {/* Empty Space for alignment */}
            <div className="hidden md:block w-5/12" />
        </div>
    );
};
