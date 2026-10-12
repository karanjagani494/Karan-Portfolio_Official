import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { siteData } from '../config/siteData';

const Home = () => {
    const containerRef = useRef(null);

    const handleViewWork = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center z-10 max-w-4xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-sm md:text-base text-zinc-400 mb-5 tracking-widest uppercase"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-4"
                >
                    {siteData.name}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-400 mb-8 max-w-3xl leading-snug"
                >
                    {siteData.role}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    I build resilient full-stack applications, intelligent AI pipelines, and accessible digital experiences with a focus on performance and clean architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                >
                    <button onClick={handleViewWork}>
                        <MagneticButton
                            className="px-8 py-3.5 bg-white text-black hover:bg-zinc-200 rounded-full font-medium text-sm flex items-center gap-2 transition-colors"
                        >
                            View Projects
                            <ArrowRight size={16} />
                        </MagneticButton>
                    </button>

                    <a
                        href="/Karan_Jagani_CV.pdf"
                        download="Karan_Jagani_CV.pdf"
                        className="inline-block"
                    >
                        <MagneticButton
                            className="px-8 py-3.5 bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5 rounded-full font-medium text-sm flex items-center gap-2 transition-all"
                        >
                            Download CV
                            <Download size={16} />
                        </MagneticButton>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent rounded-full"
                />
            </motion.div>
        </div>
    );
};

export default Home;
