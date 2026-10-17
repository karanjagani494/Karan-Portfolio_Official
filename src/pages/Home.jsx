import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteData } from '../config/siteData';

export default function Home() {
    const reduceMotion = useReducedMotion();
    return <div className="hero relative min-h-[90svh] flex items-center justify-center px-6 pt-36 pb-24">
        <Motion.div initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto">
            <p className="eyebrow mb-7">Software development · Cambridge, UK</p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight mb-6">{siteData.name}</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 leading-snug mb-7">{siteData.role}</h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">{siteData.introduction}</p>
            <div className="flex flex-wrap justify-center gap-3 mt-9">
                <a href="#projects" className="button button-primary">View projects <ArrowRight size={16} /></a>
                <a href="/KARAN JAGANI_CV.pdf" target="_blank" rel="noopener noreferrer" className="button" aria-label="View CV (PDF, opens in a new tab)">View CV <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="flex justify-center gap-7 mt-8">
                {siteData.social.filter(s => s.name !== 'Email').map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-link text-sm text-zinc-400">{s.name}</a>)}
            </div>
        </Motion.div>
    </div>;
}

