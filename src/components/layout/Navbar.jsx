import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../../context/SoundContext';
import { cn } from '../../utils/cn';

const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { soundEnabled, toggleSound, playSound } = useSound();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);

                    // Scroll Spy Logic
                    const sections = navLinks.map(link => document.getElementById(link.id));
                    const scrollPosition = window.scrollY + 100; // Offset

                    for (const section of sections) {
                        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                            setActiveSection(section.id);
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
            setIsMobileMenuOpen(false);
            playSound('click');
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-2xl font-bold font-mono bg-primary/10 text-primary px-3 py-1 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                    KJ
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-primary",
                                activeSection === link.id ? "text-primary" : "text-gray-400"
                            )}
                            onMouseEnter={() => playSound('hover')}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => { toggleSound(); playSound('click'); }}
                        className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
                        aria-label="Toggle Sound"
                    >
                        {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={cn(
                                        "text-lg font-medium py-2 px-4 rounded-lg transition-colors text-left",
                                        activeSection === link.id ? "bg-primary/10 text-primary" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="flex items-center gap-4 px-4 py-2 border-t border-white/10 mt-2 pt-4">
                                <button
                                    onClick={toggleSound}
                                    className="flex items-center gap-2 text-gray-400"
                                >
                                    {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                                    <span>Sound</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
