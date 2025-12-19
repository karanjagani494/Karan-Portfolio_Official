import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useSound } from '../context/SoundContext';
import { useStarfield } from '../context/StarfieldContext';
import { useEffect, useRef } from 'react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { HyperText } from '../components/ui/HyperText';
import { siteData } from '../config/siteData';

const Home = () => {
    const containerRef = useRef(null);
    const { playStartupSound } = useSound();
    const { triggerWarp } = useStarfield();

    useEffect(() => {
        playStartupSound();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const handleViewWork = () => {
        triggerWarp();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10" />

            <motion.div
                style={{ y, opacity, scale }}
                className="text-center z-10 px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl font-medium text-primary mb-6 tracking-widest uppercase"
                >
                    Hello, I am
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <HyperText
                        text={siteData.name}
                        className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] pb-4"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl text-gray-400 mb-12 font-light max-w-4xl mx-auto leading-tight"
                >
                    {siteData.role}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-6 justify-center"
                >
                    <button onClick={handleViewWork}>
                        <MagneticButton
                            whileHover={{ scale: 1.05 }}
                            className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight size={20} />
                        </MagneticButton>
                    </button>

                    <a
                        href="/cv.pdf"
                        download="Karan_Jagani_CV.pdf"
                        className="inline-block"
                    >
                        <MagneticButton
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg flex items-center gap-2 backdrop-blur-sm"
                        >
                            Download CV
                            <Download size={20} />
                        </MagneticButton>
                    </a>
                </motion.div>
            </motion.div>

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
