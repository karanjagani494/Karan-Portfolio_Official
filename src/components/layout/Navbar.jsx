import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');
    const menuButton = useRef(null);
    useEffect(() => {
        const update = () => {
            const current = links.map(name => document.getElementById(name.toLowerCase())).filter(Boolean)
                .filter(section => section.getBoundingClientRect().top <= 150).at(-1);
            setActive(current?.id || 'home');
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);
    useEffect(() => {
        const onKey = event => {
            if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
        };
        const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
    }, [open]);
    const navLink = name => <a key={name} href={`#${name.toLowerCase()}`}
        aria-current={active === name.toLowerCase() ? 'location' : undefined}
        onClick={() => setOpen(false)}
        className={`text-sm py-3 transition-colors border-b ${active === name.toLowerCase() ? 'text-white border-zinc-300' : 'text-zinc-400 border-transparent hover:text-white hover:border-zinc-600'}`}>{name}</a>;
    return <header className="fixed top-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-b border-white/10">
        <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex items-center justify-between h-20">
                <a href="#home" aria-label="Karan Jagani — Home" onClick={() => setOpen(false)} className="text-xl font-semibold tracking-tight">KJ<span className="text-zinc-500">.</span></a>
                <div className="hidden md:flex gap-7">{links.map(navLink)}</div>
                <button ref={menuButton} className="md:hidden p-3" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
            </div>
            <div id="mobile-navigation" hidden={!open} className="md:hidden pb-5">{open && <div className="flex flex-col">{links.map(navLink)}</div>}</div>
        </nav>
    </header>;
};
