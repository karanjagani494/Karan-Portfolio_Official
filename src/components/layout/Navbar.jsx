import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 40);

                    // Scroll Spy Logic
                    const sections = navLinks.map(link => document.getElementById(link.id));
                    const scrollPosition = window.scrollY + 100;

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
        }
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
                isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Clean Pure B&W Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-2 group text-left"
                    aria-label="Home"
                >
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                        KJ<span className="text-zinc-500">.</span>
                    </span>
                </button>

                {/* Desktop Nav - Clean B&W Brittany Chiang style */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={cn(
                                "text-xs font-mono uppercase tracking-widest transition-colors py-1",
                                activeSection === link.id
                                    ? "text-white font-semibold"
                                    : "text-zinc-400 hover:text-white"
                            )}
                        >
                            <span className="text-zinc-500 mr-1.5 font-normal">0{index + 1}.</span>
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-3">
                            {navLinks.map((link, index) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={cn(
                                        "text-sm font-mono tracking-wider py-2 text-left uppercase transition-colors",
                                        activeSection === link.id ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    <span className="text-zinc-500 mr-2">0{index + 1}.</span>
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
